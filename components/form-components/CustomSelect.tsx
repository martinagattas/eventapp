import { Controller } from "react-hook-form"
import { CustomSelectType } from "types/form-components/CustomSelectType"
import { FormHelperText, Select } from "@mui/material"

export const CustomSelect = ({
    name,
    label,
    required,
    control,
    defaultValue,
    displayEmpty,
    error,
    helperText,
    selectProps,
    children,
    className
}: CustomSelectType) => {
    return(
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <>
                    <Select
                        variant="outlined"
                        fullWidth
                        {...field}
                        label={label}
                        required={required}
                        displayEmpty={displayEmpty}
                        error={error}
                        {...selectProps}
                        className={className}
                    >
                        {children}
                    </Select>
                    <FormHelperText>{helperText}</FormHelperText>
                </>
            )}
        />
    )
}