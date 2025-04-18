import { useState, useCallback } from "react";
import { validateCardNum, validateExpDate, validateCVC } from "../utils/validateFuncs";

export const useValidation = () => {

    const [errors, setErrors] = useState<{ cardNum?: string, expDate?: string, CVC?: string }>({});

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

    return {
        errors,
        validateField
    };
};
