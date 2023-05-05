import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from "@mui/material";
import Header from '../../components/Header';
import useMediaQuery from "@mui/material/useMediaQuery";


// define initial values for client contact form
const initialValuesClients = {
    companyName: '',
    email: '',
    phone1: '',
    phone2: '',
    website: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    primaryContactName: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// define client contact schema
const userSchemaClients = Yup.object().shape({
    companyName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email'),
    phone1: Yup
    .string()
    .matches (phoneRegExp, 'Phone number is not valid'),
    phone2: Yup
    .string()
    .matches (phoneRegExp, 'Phone number is not valid'),
    website: Yup.string(),
    address1: Yup.string(),
    address2: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zip: Yup.string(),
    country: Yup.string(),
    primaryContactName: Yup.string().required('Required'),
    primaryContactEmail: Yup.string().email('Invalid email'),
    primaryContactPhone: Yup
    .string()
    .matches (phoneRegExp, 'Phone number is not valid')
});

// Add client contact form
const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return <Box m="20px">
        <Header 
            title="Contact Submission Form"
            subtitle="Add a contact to your list"
        />
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValuesClients}
            validationSchema={userSchemaClients}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Company Name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.companyName}
                            name='companyName'
                            error={!!touched.companyName && !!errors.companyName}
                            helperText={touched.companyName && errors.companyName}
                            sx={{ gridColumn: "span 4"}}
                        />                                                
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Street Address'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name='address1'
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: "span 2"}}
                        />                                                                        
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Suite/Apt #'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address2}
                            name='address2'
                            error={!!touched.address2 && !!errors.address2}
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 2"}}
                            />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='City'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.city}
                            name='companyName'
                            error={!!touched.city && !!errors.city}
                            helperText={touched.city && errors.city}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='State'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.state}
                            name='state'
                            error={!!touched.state && !!errors.state}
                            helperText={touched.state && errors.state}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Zip Code'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.zip}
                            name='zip'
                            error={!!touched.zip && !!errors.zip}
                            helperText={touched.zip && errors.zip}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Country'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.country}
                            name='country'
                            error={!!touched.country && !!errors.country}
                            helperText={touched.country && errors.country}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Phone Number 1'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone1}
                            name='phone1'
                            error={!!touched.phone1 && !!errors.phone1}
                            helperText={touched.phone1 && errors.phone1}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Phone Number 2'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone2}
                            name='phone2'
                            error={!!touched.phone2 && !!errors.phone2}
                            helperText={touched.phone2 && errors.phone2}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Email Address'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name='country'
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Website URL'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.website}
                            name='website'
                            error={!!touched.website && !!errors.website}
                            helperText={touched.website && errors.website}
                            sx={{ gridColumn: "span 2"}}
                        />                        
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Primary Contact Name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.primaryContactName}
                            name='primaryContactName'
                            error={!!touched.primaryContactName && !!errors.primaryContactName}
                            helperText={touched.primaryContactName && errors.primaryContactName}
                            sx={{ gridColumn: "span 4"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Primart Contact Phone Number'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.primaryContactPhone}
                            name='phone1'
                            error={!!touched.primaryContactPhone && !!errors.primaryContactPhone}
                            helperText={touched.primaryContactPhone && errors.primaryContactPhone}
                            sx={{ gridColumn: "span 2"}}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Primary Contact Email Address'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.primaryContactEmail}
                            name='country'
                            error={!!touched.primaryContactEmail && !!errors.primaryContactEmail}
                            helperText={touched.primaryContactEmail && errors.primaryContactEmail}
                            sx={{ gridColumn: "span 2"}}
                        />

                        <Button

                            type='submit'
                            variant='contained'
                            sx={{ gridColumn: "span 4"}}
                        >
                         Add New Client
                        </Button>

// add a button that when clicked adds 3 new form fills for a new Contact
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ gridColumn: "span 4"}}
                        >
                            Add New Contact
                        </Button>

                    
                
                    </Box>
                </form>
            )}
      </Formik>
    </Box>
};

export default Form;