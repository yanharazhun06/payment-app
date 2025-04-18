export const validateCardNum = (value: string): string => {
    const cardNumRegex = /^(?:\d{4}\s){3}\d{4}$|^\d{13,19}$/;
    return cardNumRegex.test(value) ? '' : 'Card number must be 16 digits';
};

export const validateExpDate = (value: string): string => {
    const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    
    if (!expDateRegex.test(value)) return 'Enter a real date';

    const [month, year] = value.split('/');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;

    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) return 'Enter a valid month';

    const expYear = parseInt(year, 10);
    if (expYear < currentYear) return 'Year cannot be in the past';

    if (expYear === currentYear && parseInt(month, 10) < currentMonth) return 'Month cannot be in the past';

    return '';
};


export const validateCVC = (value: string): string => {
    const cleanValue = value.replace(/\s/g, '');

    const cvcRegex = /^\d{3}$/;
    return cvcRegex.test(cleanValue) ? '' : 'CVC must be 3 digits.';
};

export const formatCardNumber = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
};

export const formatExpDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 2) return cleaned;

    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
};