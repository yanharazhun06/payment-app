import { useState, useCallback } from "react";
import { validator } from "../utils/validator";

export const useValidation = () => {

    const [errors, setErrors] = useState<{ cardNum?: string, expDate?: string, CVC?: string }>({});

    const {
        validateCardNum,
        validateExpDate,
        validateCVC,
    } = validator;

    const validateField = useCallback((name: string, value: string) => {

        let errorMessage = '';

        switch (name) {
            case "cardNum": errorMessage = validateCardNum(value); break;
            case "expDate": errorMessage = validateExpDate(value); break;
            case "CVC": errorMessage = validateCVC(value); break;
        }

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    }, []);

    const validateAll = useCallback((fields: { cardNum: string, expDate: string, CVC: string }) => {
        const newErrors: { cardNum?: string, expDate?: string, CVC?: string } = {};

        newErrors.cardNum = validateCardNum(fields.cardNum);
        newErrors.expDate = validateExpDate(fields.expDate);
        newErrors.CVC = validateCVC(fields.CVC);

        setErrors(newErrors);

        return !newErrors.cardNum && !newErrors.expDate && !newErrors.CVC;
    }, []);

    return {
        errors,
        validateField,
        validateAll,
    };
};