import { FC, useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Box, Button, Container, Grid, Link, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import { CustomInput } from "../form-components/CustomInput"
import { validateTitleLength, validateShortDescriptionLength, validateLongDescriptionLength, validatePrice } from "utils/validations"
import { CustomSelect } from "../form-components/CustomSelect"

interface FormData {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: File;
    currency: string;
    price: number;
}

const initialData = {
    title: '',
    shortDescription: '',
    longDescription: '',
    image: null,
    currency: '',
    price: 0,
}

export const NewServiceForm: FC = () => {

    const [titleError, setTitleError] = useState<boolean>(false);
    const [titleErrorMessage, setTitleErrorMessage] = useState<string | undefined>(undefined);

    const [shortDescError, setShortDescError] = useState<boolean>(false);
    const [shortDescErrorMessage, setShortDescErrorMessage] = useState<string | undefined>(undefined);

    const [longDescError, setLongDescError] = useState<boolean>(false);
    const [longDescMessage, setLongDescErrorMessage] = useState<string | undefined>(undefined);
    
    const [priceError, setPriceError] = useState<boolean>(false);
    const [priceErrorMessage, setPriceErrorMessage] = useState<string | undefined>(undefined);


    const onSubmit: SubmitHandler<FormData> = async (formData) => {

        const titleValidation = validateTitleLength(formData.title);
        const shortDescValidation = validateShortDescriptionLength(formData.shortDescription);
        const longDescValidation = validateLongDescriptionLength(formData.longDescription);
        const priceValidation = validatePrice(formData.price.toString());

        setTitleError(titleValidation !== undefined);
        setTitleErrorMessage(titleValidation);
        setShortDescError(shortDescValidation !== undefined);
        setShortDescErrorMessage(shortDescValidation);
        setLongDescError(longDescValidation !== undefined);
        setLongDescErrorMessage(longDescValidation);
        setPriceError(priceValidation !== undefined);
        setPriceErrorMessage(priceValidation);

        if (titleValidation) {
            setTitleError(true);
            setTitleErrorMessage(titleValidation);
            return;
        }

        if (shortDescValidation) {
            setShortDescError(true);
            setShortDescErrorMessage(shortDescValidation);
            return;
        }

        if (longDescValidation) {
            setLongDescError(true);
            setLongDescErrorMessage(longDescValidation);
            return;
        }

        if (priceValidation) {
            setPriceError(true);
            setPriceErrorMessage(priceValidation);
            return;
        }
    };

    const { control, handleSubmit } = useForm<FormData>();

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [currency, setCurrency] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value);
    };

    const currencyOptions = [
        { value: 'ARS', label: 'PESO ARGENTINO' },
        { value: 'COP', label: 'PESO COLOMBIANO' },
        { value: 'UYU', label: 'PESO URUGUAYO' },
        { value: 'R$', label: 'REAL' },
        { value: 'USD', label: 'DÓLAR ESTADOUNIDENSE' },
        { value: '€', label: 'EURO' },
    ];

    return (
        <Container className="additionalForm">
            <Box className="additionalFormBox">
                <Link href="/" underline="none" className="grayLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Añadir nuevo servicio</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="title"
                                label="Título"
                                control={control}
                                defaultValue={initialData.title}
                                placeholder="Ej: Producto A"
                                required={true}
                                error={titleError}
                                helperText={titleErrorMessage}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomInput
                                type="text"
                                name="shortDescription"
                                label="Descripción Corta"
                                control={control}
                                defaultValue={initialData.shortDescription}
                                placeholder="Descripción corta del producto"
                                required={true}
                                error={shortDescError}
                                helperText={shortDescErrorMessage}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomInput
                                type="text"
                                name="longDescription"
                                label="Descripción Larga"
                                control={control}
                                defaultValue={initialData.longDescription}
                                placeholder="Ej: Descripción larga del producto"
                                required={true}
                                error={longDescError}
                                helperText={longDescMessage}
                                className="input"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="image"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <input
                                            type="file"
                                            onChange={(e) => {
                                                if (e.target.files && e.target.files[0]) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                        if (event.target && typeof event.target.result === 'string') {
                                                            setImagePreview(event.target.result);
                                                        }
                                                    };
                                                    reader.readAsDataURL(e.target.files[0]);
                                                    field.onChange(e.target.files[0]);
                                                }
                                            }}
                                            accept="image/*"
                                        />
                                        {imagePreview && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={imagePreview}
                                                alt="Vista previa de la imagen"
                                                style={{ maxWidth: '15%', marginTop: '10px' }}
                                            />
                                        )}
                                    </>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSelect
                                name="currency"
                                label="Moneda"
                                control={control}
                                defaultValue={initialData.currency}
                                value={currency}
                                required={true}
                                onChange={handleChange}
                                className="select"
                            >
                                <MenuItem value="" disabled />
                                {currencyOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </CustomSelect>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomInput
                                type="number"
                                name="price"
                                label="Precio"
                                control={control}
                                defaultValue={initialData.price.toString()}
                                placeholder="Ej: 100"
                                required={true}
                                // inputProps={{ inputMode: "numeric" }}
                                error={priceError}
                                helperText={priceErrorMessage}
                                className="input"
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" className="button primaryButton">AÑADIR SERVICIO</Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}


