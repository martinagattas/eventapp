import { Controller } from "react-hook-form"
import { CustomSelectType } from "types/form-components/CustomSelectType"
import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material"

export const CustomSelect = ({
    name,
    label,
    required,
    control,
    defaultValue,
    value,
    displayEmpty,
    error,
    helperText,
    selectProps,
    onChange,
    children,
    className
}: CustomSelectType) => {
    return(
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <FormControl fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        variant="outlined"
                        fullWidth
                        {...field}
                        label={label}
                        required={required}
                        displayEmpty={displayEmpty}
                        error={error}
                        {...selectProps}
                        value={value}
                        onChange={onChange}
                        className={className}
                    >
                        {children}
                    </Select>
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
            )}
        />
    )
}