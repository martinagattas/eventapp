import { Controller } from "react-hook-form"
import { CustomInputType } from "types/form-components/CustomInputType"
import TextField from '@mui/material/TextField'

export const CustomInput = ({
    name,
    label,
    type,
    required,
    control,
    placeholder,
    defaultValue,
    error,
    helperText,
    textFieldProps,
    className
}: CustomInputType) => {
    return(
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    variant="outlined"
                    fullWidth
                    {...field}
                    label={label}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    error={error}
                    helperText={helperText}
                    {...textFieldProps}
                    className={className}
                />
            )}
        />
    )
}