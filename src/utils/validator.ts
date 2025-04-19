import { ErrorKey } from './validateErrors';

export class Validator {

  public validateCardNum(value: string): ErrorKey | null {
    const regex = /^(?:\d{4}\s){3}\d{4}$|^\d{13,19}$/;
    return regex.test(value) ? null : 'cardNumber';
  }

  public validateExpDate(value: string): ErrorKey | null {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(value)) return 'invalidDate';

    const [month, year] = value.split('/');
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear() % 100;

    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (m < 1 || m > 12) return 'invalidMonth';
    if (y < currentYear) return 'invalidYear';
    if (y === currentYear && m < currentMonth) return 'pastMonth';

    return null;
  }

  public validateCVC(value: string): ErrorKey | null {
    return /^\d{3}$/.test(value.trim()) ? null : 'cvc';
  }

  public formatCardNumber(value: string): string {
    return value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  }

  public formatExpDate(value: string): string {
    const cleaned = value.replace(/\D/g, '');
    return cleaned.length <= 2
      ? cleaned
      : `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  }

  public formatCVC(value: string): string {
    return value.replace(/\D/g, '').slice(0, 3);
  }
}