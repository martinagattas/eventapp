import { Control } from 'react-hook-form';

export type CustomSelectType = {
    name: string,
    label: string,
    required?: boolean,
    control: Control<any>,
    defaultValue?: string,
    displayEmpty?: boolean,
    error?: boolean,
    helperText?: string,
    selectProps?: Record<string, any>,
    children: React.ReactNode,
    className?: string
}