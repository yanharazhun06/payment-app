import { useState, useCallback, useMemo } from 'react';
import { Validator } from '../utils/validator';

export const useValidation = () => {

    const validator = useMemo(() => new Validator(), []);

    const [errors, setErrors] = useState<{ cardNum: string | null; expDate: string | null; CVC: string | null }>({
        cardNum: null,
        expDate: null,
        CVC: null
    });
  
    const validateField = useCallback((name: string, value: string) => {
        let errorMessage: string | null = null;
        switch (name) {
          case 'cardNum':
            errorMessage = validator.validateCardNum(value);
            break;
          case 'expDate':
            errorMessage = validator.validateExpDate(value);
            break;
          case 'CVC':
            errorMessage = validator.validateCVC(value);
            break;
          default:
            break;
        }
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: errorMessage,
        }));
      }, [validator]);
    
      const validateAll = useCallback((fields: { cardNum: string; expDate: string; CVC: string }) => {
        const newErrors: { cardNum: string | null; expDate: string | null; CVC: string | null } = {
          cardNum: validator.validateCardNum(fields.cardNum),
          expDate: validator.validateExpDate(fields.expDate),
          CVC: validator.validateCVC(fields.CVC),
        };
    
        setErrors(newErrors);
    
        return !newErrors.cardNum && !newErrors.expDate && !newErrors.CVC;
      }, [validator]);
    
      return {
        errors,
        validateField,
        validateAll,
        validator
      };
};