import { Controller } from "react-hook-form";
import { CustomTextareaType } from "types/form-components/CustomTextareaType";
import TextField from '@mui/material/TextField';

export const CustomTextarea = ({
    name,
    label,
    required,
    control,
    placeholder,
    defaultValue,
    error,
    helperText,
    textFieldProps,
    className,
    rows, 
    onChange,
}: CustomTextareaType) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    {...field}
                    label={label}
                    required={required}
                    placeholder={placeholder}
                    error={error}
                    helperText={helperText}
                    {...textFieldProps}
                    className={className} 
                    rows={rows} 
                    onChange={onChange}
                />
            )}
        />
    );
};