import { Control } from 'react-hook-form';

export type CustomTextareaType = {
    name: string,
    label: string,
    required?: boolean,
    control: Control<any>,
    placeholder?: string,
    defaultValue?: any,
    error?: boolean,
    helperText?: string,
    textFieldProps?: Record<string, any>,
    className?: string,
    rows?: number 
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}