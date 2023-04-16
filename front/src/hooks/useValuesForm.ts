import { useState } from 'react';
import { Task } from '../../types/user';

interface UseValuesForm {
    values: any;
    handleValues: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    resetValues: () => void;
    setEditValues: (values: Task) => void;
}

export const useValuesForm = (initialState: object): UseValuesForm => {
    const [values, setValues] = useState(initialState);

    const handleValues = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const setEditValues = (values: Task) => {
        setValues(values);
    };

    const resetValues = () => {
        setValues(initialState);
    };

    return {
        values,
        handleValues,
        resetValues,
        setEditValues
    };
};
