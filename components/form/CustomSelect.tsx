import { Controller } from 'react-hook-form';
import { CustomSelectT } from 'types/form/CustomSelect.types';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

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
}: CustomSelectT) => {
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