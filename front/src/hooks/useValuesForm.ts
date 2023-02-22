import { useState } from 'react';

interface UseValuesForm {
    values: any;
    handleValues: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    resetValues: () => void;
}

export const useValuesForm = (initialState: object): UseValuesForm => {
    const [values, setValues] = useState(initialState);

    const handleValues = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const resetValues = () => {
        setValues(initialState);
    }

    return {
        values,
        handleValues,
        resetValues
    };
};
