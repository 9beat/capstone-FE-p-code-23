import React, { useEffect } from 'react'
import { useTheme, Typography, Box, useMediaQuery } from '@mui/material';
// import CustomCheckbox from './CustomCheckbox.jsx';
import Form from './Form.jsx';
import AOS from 'aos';
import "aos/dist/aos.css";

// const Options = () => {
//     const [view, setView] = useState("basic");
    
//     return (
//     <div className="App">
//         <nav>
//             <h3
//                 onClick={() => setView("basic")}
//                 style={{ color: view === "basic" ? "#fff" : "" }}
//             >
//                 Basic
//             </h3>
//             <h3
//                 onClick={() => setView("advanced")}
//                 style={{ color: view === "advanced" ? "#fff" : "" }}
//             >
//                 Advanced
//             </h3>
//         </nav>
//         {view === "basic" ? <Login /> : <Register />}
//     </div>
//     );
// }


export default function Login() {
    const theme = useTheme()
    const wideScreen = useMediaQuery("(min-width:950px)")
    const bgAlt = theme.palette.background.alt

    // const spinner = (
    //     <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
    //         <Typography>Loading...</Typography>
    //         <Box className="spinner" />
    //     </Box>
    // )

    useEffect(() => {
        AOS.init({
            throttleDelay: 0, 
            easing: 'ease-in-out',
        })
        
        AOS.refresh()
    }, []);

    return (
        <Box> 

            <Box width="100%" backgroundColor={bgAlt} padding=".7rem 2rem" textAlign="center">
                <Typography
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="50"  
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z<br />
                </Typography>
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="100"  
                    fontWeight="bold" fontSize=".7rem" color="primary" >   
                    B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A<br />
                </Typography>        
                <Typography
                    data-aos="fade-right"
                    
                    data-aos-duration="1000"
                    data-aos-delay="150"
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B<br />
                </Typography>
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C<br />
                </Typography>
                <Typography
                data-aos="fade-right"
                
                data-aos-duration="1000"
                data-aos-delay="250"
                fontWeight="bold" fontSize=".7rem" color="primary" >
                    E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D<br />
                </Typography>
                <Typography
                data-aos="fade-left"
                data-aos-duration="1000"  
                data-aos-delay="300"
                fontWeight="bold" fontSize=".7rem" color="primary" >
                    F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E<br />
                </Typography>
                    <Typography 
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-delay=""
                        fontWeight="bold" fontSize="5rem" color="primary" >
                        GeekHub
                    </Typography>
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="400 " 
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G <br />
                </Typography>
                <Typography
                    data-aos="fade-right"
                    
                    data-aos-duration="1000"
                    data-aos-delay="500"  
                    fontWeight="bold" fontSize=".7rem" color="primary" >   
                    I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H <br />
                </Typography>        
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="600"  
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I <br />
                </Typography>
                <Typography
                    data-aos="fade-right"
                    
                    data-aos-duration="1000"
                    data-aos-delay="700"
                    fontWeight="bold" fontSize=".7rem" color="primary" >
                    M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L <br />
                </Typography>
                <Typography
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="800" 
                    fontWeight="bold" fontSize=".7rem" color="primary" >        
                    N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M <br />
                </Typography>
                <Typography
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="900"
                fontWeight="bold" fontSize=".7rem" color="primary" >
                    O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N <br />
                </Typography>
            </Box>

            <Box  
                data-aos="flip-up"
                data-aos-duration="900"
                data-aos-delay="1000"
                width={ wideScreen ? "66vw" : "88vw"} 
                padding="1.5rem 2rem" 
                margin="3rem auto" 
                borderRadius="4rem" 
                backgroundColor={bgAlt} 
                color="primary"
            >
                <Typography textAlign="center" fontWeight="bold" variant="h2" sx={{ margin: "0.5rem .1rem" }}>
                    Welcome to GeekHub!!<br/> 
                    A place for geeks!
                </Typography>
                <Form />
            </Box>
            
        </Box>



        // OLD VARIANT
            
        //     <Box  
        //         data-aos="fade-in"
        //         data-aos-duration="1000"
        //         data-aos-delay="1500"  
        //         width={ wideScreen ? "50vw" : "80vw"} 
        //         padding="1.5rem 2rem" 
        //         margin="3rem auto" 
        //         borderRadius="4rem" 
        //         backgroundColor={bgAlt} 
        //         color="primary"
        //     >
        //         <Typography textAlign="center" fontWeight="bold" variant="h4" sx={{ marginBottom: "2rem" }}>
        //             Welcome to DIGiHUB!!<br/> 
        //             A place for geeks!
        //         </Typography>
        //         <Form />
        //     </Box>
        // </Box>


    )
}



