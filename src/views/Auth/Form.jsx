import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
// Redux 
import { useDispatch } from 'react-redux';
import { setSignIn } from '../../state/state.js';
// CSS
import './Form.css';
// import AOS
import AOS from 'aos';
import "aos/dist/aos.css";
// Axios
// import axios from 'axios';
// Material Ui
import { useTheme, useMediaQuery, Box, Typography, TextField, Button } from '@mui/material';
// Formik
import { Formik } from 'formik';
// Yup
import * as yup from 'yup';
// Components
import StyledFlex from '../../components/styled/StyledFlex.jsx';


// min 8 chars, 1 upper case, 1 lower case, 1 num.
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// .matches(passwordRules, { message: "Please create a stronger password" })

// SignIn validation
const signUpSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'), 
    location: yup.string().required("Required"),
    occupation: yup.string().required("Required"),
    picture: yup.mixed().required("Required"),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8).required('Required'),
    // yup.string().required('Required'),
    // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    // acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of service"),
})

// signUp yup validation
const signInSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required'),
    // check: yup.boolean().required('Required'),
    // remember: yup.boolean().notRequired(),
})

// Initial values
const initialValueSignUp = {
    firstName: '',
    lastName: '',
    location: '',
    occupation: '',
    picture: null,
    email: '',
    password: '',
    // confirmPassword: '',
    // acceptedTos: false,
}

const initialValueSignIn = {
    email: '',
    password: '',
}

export default function Form() {
    const [ pageType, setPageType ] = useState("login");
    const [ registerSuccess, setRegisterSuccess ] = useState(false);
    const [ unregistered, setUnregistered ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wideScreen = useMediaQuery("(min-width:480px)");

    const isSignIn = pageType === "login";
    const isSignUp = pageType === "register";

    // palette
    const { palette } = useTheme();

    // REGISTER FUNCTION
    const signUp = async (values, onSubmitProps) => {

        // create formData w/ picture
        const formData = new FormData();
        for (const value in values) {
            formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);

        // await registered user res
        const savedUserRes = await fetch("http://localhost:3001/auth/register", { 
            method: "POST", 
            body: formData, 
        })

        // save res in object
        const savedUser = await savedUserRes.json()
        // reset form
        onSubmitProps.resetForm()

        // if saved user is defined
        if (savedUser) {
            // set registration success on true
            setRegisterSuccess(true);
            // reset state in 10 seconds
            setTimeout(() => { 
                setRegisterSuccess(false) 
            }, 6000);
            // set type to
            setPageType("login");
        }
    }


    // LOGIN FUNCTION
    const signIn = async (values, onSubmitProps) => { 
        // user data from server 
        const signedInRes = await fetch("http://localhost:3001/auth/login", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(values), 
        })
        // save logged in user
        const signedIn = await signedInRes.json()
        // reset form
        onSubmitProps.resetForm() 
        
        if (signedIn) {
            dispatch(setSignIn({ user: signedIn.user, token: signedIn.token, }))
            navigate("/home")
        } else {
            setUnregistered(true)
            setTimeout(() => {
                setUnregistered(false)
            }, 6000)
        }
    }


     // signUp FUNCTION W/ AXIOS
    // const signUp = async (values, onSubmitProps) => {
    //     const formData = new FormData();
    //     for (const value in values) {
    //         formData.append(value, values[value]);
    //     }
    //     formData.append("picturePath", values.picture.name);
        
    //     try {
    //         const response = await axios.post("http://localhost:3001/auth/signUp", formData);
    //         const savedUser = response.data;
    //         onSubmitProps.resetForm();
        
    //         if (savedUser) setPageType("login");
    //     } catch (error) {
    //         // Handle error
    //         if (error.response) {
    //             // Request was made and server responded with a status code
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             // Request was made but no response was received
    //             console.log(error.request);
    //         } else {
    //             // Something else happened in making the request
    //             console.log('Error', error.message);
    //         }
    //     }
    // }
    
    // LOGIN W/ AXIOS
    // const signIn = async (values, onSubmitProps) => {
    //     try {
    //         // Show spinner
    //         showSpinner();
        
    //         const loggedInResponse = await axios.post("http://localhost:3001/auth/login", values, {
    //             headers: { "Content-Type": "application/json" }
    //         });
    //         onSubmitProps.resetForm();

    //         const loggedIn = await loggedInResponse.data;

    //         if (loggedIn) dispatch(setSignIn({ user: loggedIn.user, token: loggedIn.token, }));
    //         navigate("/home");
    //     } catch (error) {
    //         // Handle error
    //         if (error.response) {
    //         // Request was made and server responded with a status code
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //         // Request was made but no response was received
    //             console.log(error.request);
    //         } else {
    //         // Something else happened in making the request
    //             console.log('Error', error.message);
    //         }
    //     } finally {
    //         // Hide spinner
    //         hideSpinner();
    //     }
    //     }
        
        // function showSpinner() {
        //     const spinner = document.createElement('div');
        //     spinner.className = 'spinner';
        //     document.body.appendChild(spinner);
        // }
        
        // function hideSpinner() {
        //     const spinner = document.querySelector('.spinner');
        //     if (spinner) {
        //         spinner.remove();
        //     }
        // }
    
    

    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isSignIn) {
            await signIn(values, onSubmitProps);
        } 
        if (isSignUp) {
            await signUp(values, onSubmitProps);
        }
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Formik 
            initialValues={isSignIn ? initialValueSignIn : initialValueSignUp} 
            validationSchema={isSignIn ? signInSchema : signUpSchema}
            onSubmit={handleFormSubmit}
        >
            {(
                { 
                    values, errors, touched, handleChange, handleSubmit, setFieldValue, resetForm, handleBlur, 
                }
            ) => ( 
                <form onSubmit={handleSubmit}>
                { registerSuccess && ( 
                    <Box sx={{ textAlign: "center", backgroundColor: "green", color: "white", padding: "1rem",  marginBottom: "1rem" }}>
                        Registration successful!! Please Login to continue!
                    </Box>
                )}

                { unregistered && (
                    <Box sx={{ textAlign: "center", backgroundColor: "red", color: "white", padding: "1rem",  marginBottom: "1rem" }}>
                        Please register to continue!
                    </Box>
                )}
                
                <Box 
                    data-aos="flip-left"
                    data-aos-duration="900" 
                    display="grid" 
                    gap="1.8rem" 
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))" 
                    sx={{ "& > div": { 
                        gridColumn: wideScreen ? undefined : "span 4"
                    } }}
                >
                    { isSignUp && (
                        <>
                        <TextField
                            label="First Name"
                            name='firstName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            label="Last Name"
                            name='lastName'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                            label="Location"
                            name='location'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.location}
                            error={Boolean(touched.location) && Boolean(errors.location)}
                            helperText={touched.location && errors.location}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            label="Occupation"
                            name='occupation'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                            helperText={touched.occupation && errors.occupation}
                            sx={{ gridColumn: "span 4" }}
                        />

                        {/* DROP PICTURE */}
                        <Box 
                            gridColumn="span 4" 
                            border={`1px solid ${palette.neutral.medium}`} 
                            borderRadius="5px" 
                            padding="1rem"
                        >
                            <Dropzone
                                accept={{
                                    "image/*": [".jpg", ".jpeg", ".png"],
                                }}
                                multiple={false}
                                onDrop={(acceptedFiles) => setFieldValue("picture", acceptedFiles[0])}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <Box
                                        {...getRootProps()}
                                        sx={{
                                            border: `5px dotted ${palette.primary.main}`,
                                            padding: "1rem",
                                            alignText: "center",
                                            "&:hover": { cursor: "pointer" }
                                        }}
                                    >
                                        <input {...getInputProps()} />
                                        { values.picture? 
                                            (
                                            <StyledFlex>
                                                <Typography alignText="center">
                                                    {values.picture.name}
                                                </Typography>
                                                {/* <EditOutlined sx={{ cursor: "pointer" }} /> */}
                                            </StyledFlex>
                                            ) : (
                                            <p sx={{ alignText: "center", fontWeight: "bold", color: palette.primary.main }}>
                                                {/* Click to browse a file <br/> */}
                                                or drag & drop a picture from your desktop
                                            </p>
                                            )
                                        }
                                        </Box>
                                    )}
                                </Dropzone>
                            </Box>
                        </>
                    )}

                    {/* LOGIN & REGISTER */}
                    <TextField
                        label="Email Address"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.email) && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                        label="Password"
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.password) && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 4" }}
                    />
                </Box>

                {/* BTN SUBMIT */}
                <Box>
                    <Button 
                        fullWidth 
                        type="submit" 
                        sx={{
                            margin: "2rem 0", 
                            padding: "1rem", 
                            backgroundColor: palette.primary.main, 
                            color: palette.background.alt, 
                            "&:hover": { color: palette.primary.main }
                        }}>
                            { isSignIn ? "SIGN IN" : "SIGN UP" }
                    </Button>
                    <Typography 
                        onClick={() => {
                            setPageType( isSignIn ? "register" : "login" ) 
                            resetForm() 
                        }} 
                        sx={{
                            textDecoration: "underline",
                            color: palette.primary.main,
                            "&:hover": { color: palette.primary.light, cursor: "pointer" }
                        }}
                    >
                        { isSignIn ? "SIGN UP" : "SIGN IN" }
                    </Typography>
                </Box>
            </form>  
        )} 
    </Formik>
    )
}
