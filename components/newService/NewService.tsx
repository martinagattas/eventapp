import { FC, useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Box, Button, Container, Grid, Link, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import { CustomInput } from "../form-components/CustomInput"
import { CustomTextarea } from "../form-components/CustomTextarea"
import { validateLongDescriptionLength, validatePrice } from "utils/validations"
import { CustomSelect } from "../form-components/CustomSelect"

interface FormData {
    serviceType: string;
    longDescription: string;
    image: null;
    currency: string;
    price: number;
}

const initialData = {
    serviceType: '',
    longDescription: '',
    image: null,
    currency: '',
    price: 0,
}

export const NewServiceForm: FC = () => {

    const [longDescError, setLongDescError] = useState<boolean>(false);
    const [longDescMessage, setLongDescErrorMessage] = useState<string | undefined>(undefined);
    
    const [priceError, setPriceError] = useState<boolean>(false);
    const [priceErrorMessage, setPriceErrorMessage] = useState<string | undefined>(undefined);


    const onSubmit: SubmitHandler<FormData> = async (formData) => {

        const longDescValidation = validateLongDescriptionLength(formData.longDescription);
        const priceValidation = validatePrice(formData.price);

        setLongDescError(longDescValidation !== undefined);
        setLongDescErrorMessage(longDescValidation);
        setPriceError(priceValidation !== undefined);
        setPriceErrorMessage(priceValidation);

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

    const [selectedServiceType, setSelectedServiceType] = useState<string>('');

    const getServiceTypeLabel = (value: string) => {
        const option = serviceTypeOptions.find(option => option.value === value);
        return option ? option.label : value;
    };

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [currency, setCurrency] = useState<string>('');

    const [selectedCurrency, setSelectedCurrency] = useState<string>('');

    const serviceTypeOptions = [
        { value: "photography", label: "FOTOGRAFÍA" },
        { value: "food", label: "CATERING" },
        { value: "website", label: "PÁGINA WEB" },
        { value: "video", label: "VIDEO" },
        { value: "music", label: "MÚSICA" },
        { value: "lights", label: "ILUMINACIÓN" },
        { value: "decoration", label: "DECORACIÓN" },
        { value: "flowers", label: "FLORERÍA" },
        { value: "invitation", label: "DISEÑO DE INVITACIONES" },
        { value: "place", label: "ALQUILER DE ESPACIOS" },
        { value: "tent", label: "ALQUILER DE CARPAS" },
        { value: "car", label: "ALQUILER DE AUTOS" },
        { value: "living", label: "ALQUILER DE LIVINGS" },
    ]

    const currencyOptions = [
        { value: 'ARS', label: 'PESO ARGENTINO' },
        { value: 'COP', label: 'PESO COLOMBIANO' },
        { value: 'UYU', label: 'PESO URUGUAYO' },
        { value: 'R$', label: 'REAL' },
        { value: 'USD', label: 'DÓLAR ESTADOUNIDENSE' },
        { value: '€', label: 'EURO' },
    ];

    const [formData, setFormData] = useState<FormData>(initialData);

    const handleInputChange = (name: keyof FormData, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && typeof event.target.result === 'string') {
                    setImagePreview(event.target.result);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value);
        setSelectedCurrency(event.target.value); 
    };

    return (
        <Container className="newServiceFormContainer">
            <Box className="newServiceForm">
                <Link href="/" underline="none" className="grayLink" mt={2} mb={2} display={"flex"}><ArrowBack/></Link>
                <Typography variant="h4" mt={2} mb={4} className="colorGray">Añadir nuevo servicio</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} mb={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <CustomSelect
                                name="serviceType"
                                label="Tipo de servicio"
                                control={control}
                                value={selectedServiceType}
                                required={true}
                                onChange={(e) => setSelectedServiceType(e.target.value)}
                                className="select"
                            >
                                <MenuItem value="" disabled />
                                {serviceTypeOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                                ))}
                            </CustomSelect>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextarea
                                name="longDescription"
                                label="Descripción"
                                control={control}
                                placeholder="Descripción del producto"
                                required={true}
                                error={longDescError}
                                helperText={longDescMessage}
                                className="input"
                                rows={4}
                                onChange={(e) => handleInputChange("longDescription", e.target.value)}
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
                                                handleImageChange(e); 
                                                field.onChange(e.target.files[0]);
                                            }}
                                            accept="image/*"
                                        />
                                        {imagePreview && (
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
                                placeholder="Ej: 100"
                                required={true}
                                error={priceError}
                                helperText={priceErrorMessage}
                                className="input"
                                onChange={(e) => handleInputChange("price", e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" className="button primaryButton">AÑADIR SERVICIO</Button>
                    </Grid>
                </Box>
            </Box>
            <div className="card">
                <Typography className="preview" variant="h6">{getServiceTypeLabel(selectedServiceType) || 'Aquí viene el tipo de servicio'}</Typography>
                {imagePreview 
                    ? <img src={imagePreview} alt="Vista previa" style={{ maxWidth: '100px' }} className="preview"/>
                    : <img src="\iso_positive.png" alt="Imagen Genérica" style={{ maxWidth: '100px' }} className="preview" />
                }
                <Typography className="preview" variant="body1">{formData.longDescription || 'Aquí viene la descripción del producto'}</Typography>
                <Typography className="preview" variant="h5">{selectedCurrency} {formData.price || 'Aquí viene el precio'}</Typography>
            </div>
        </Container>
    );
}


