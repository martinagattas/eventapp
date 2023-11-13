import { FC, useEffect, useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Box, Button, Container, Grid, Link, Typography, MenuItem, SelectChangeEvent } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import { CustomInput } from "../form-components/CustomInput"
import { validateTitleLength, validateShortDescriptionLength, validateLongDescriptionLength, validatePrice } from "utils/validations"
import { CustomSelect } from "../form-components/CustomSelect"
import { getCategories, registerService } from "eventapp/services/services/services.service"
import { useRouter } from "next/router"

interface optionSelect {
    name: string;
    id: number;    
}

interface FormData {
    name: string;
    information: string;        
    price: number;
    category : number;
}


const initialData = {
    name: '',
    information: '',        
    price: 0,
    category : 1,
}

export const NewServiceForm: FC = () => {

    const router = useRouter();

    const [titleError, setTitleError] = useState<boolean>(false);
    const [titleErrorMessage, setTitleErrorMessage] = useState<string | undefined>(undefined);

    const [shortDescError, setShortDescError] = useState<boolean>(false);
    const [shortDescErrorMessage, setShortDescErrorMessage] = useState<string | undefined>(undefined);

    const [longDescError, setLongDescError] = useState<boolean>(false);
    const [longDescMessage, setLongDescErrorMessage] = useState<string | undefined>(undefined);
    
    const [priceError, setPriceError] = useState<boolean>(false);
    const [priceErrorMessage, setPriceErrorMessage] = useState<string | undefined>(undefined);

    const [categories, setCategories] = useState([]);

    const [categoryID, setCategoryID] = useState('');


    useEffect(() => {
        const fetchData = async () => {
          try {
            const categoriesGet = await getCategories();           
            setCategories(categoriesGet);
          } catch (error) {
            console.error('Error al obtener categorias:', error);
          }
        };
    
        fetchData();        
      }, [categories]); 


    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        
        const titleValidation = validateTitleLength(formData.name);        
        const longDescValidation = validateLongDescriptionLength(formData.information);
        const priceValidation = validatePrice(formData.price.toString());

        setTitleError(titleValidation !== undefined);
        setTitleErrorMessage(titleValidation);
        // setShortDescError(shortDescValidation !== undefined);
        // setShortDescErrorMessage(shortDescValidation);
        setLongDescError(longDescValidation !== undefined);
        setLongDescErrorMessage(longDescValidation);
        setPriceError(priceValidation !== undefined);
        setPriceErrorMessage(priceValidation);

        if (titleValidation) {
            setTitleError(true);
            setTitleErrorMessage(titleValidation);
            return;
        }

        // if (shortDescValidation) {
        //     setShortDescError(true);
        //     setShortDescErrorMessage(shortDescValidation);
        //     return;
        // }

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
        addService(formData);
    };


    const addService = async (formData : FormData) => {
        try {
            formData.category = parseInt(categoryID);            
            registerService(formData);    
            alert("Se ha agregado el servicio!!! Estamos trabajando en el front")     
            router.push('/');     
        } catch (error) {
          console.error('Error en llamarMetodoConEndpoint:', error);
          throw error;
        }
      };

    const { control, handleSubmit } = useForm<FormData>();

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    //const [currency, setCurrency] = useState<string>('');
    

    const handleChange = (event: SelectChangeEvent) => {        
        setCategoryID(event.target.value);
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
                                name="name"
                                label="Título"
                                control={control}
                                defaultValue={initialData.name}
                                placeholder="Ej: Producto A"
                                required={true}
                                error={titleError}
                                helperText={titleErrorMessage}
                                className="input"
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
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
                        </Grid> */}
                        <Grid item xs={12}>
                            <CustomInput
                                type="text"
                                name="information"
                                label="Descripción Larga"
                                control={control}
                                defaultValue={initialData.information}
                                placeholder="Ej: Descripción larga del producto"
                                required={true}
                                error={longDescError}
                                helperText={longDescMessage}
                                className="input"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
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
                        </Grid> */}
                        <Grid item xs={12}>
                            <CustomSelect
                                name="category"
                                label="Categoria"
                                control={control}
                                //defaultValue={initialData.currency}
                                value={categoryID}
                                required={true}
                                onChange={handleChange}
                                className="select"
                            >
                                <MenuItem value="" disabled />
                                {categories.map((option : optionSelect) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
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
                    <br/>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" className="button primaryButton">AÑADIR SERVICIO</Button>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}


