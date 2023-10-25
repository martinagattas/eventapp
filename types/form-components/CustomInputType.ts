import { Control } from 'react-hook-form';

export type CustomInputType = {
    name: string,
    label: string,
    type: string,
    required?: boolean,
    control: Control<any>,
    placeholder?: string,
    defaultValue?: string,
    error?: boolean,
    helperText?: string,
    textFieldProps?: Record<string, any>
}