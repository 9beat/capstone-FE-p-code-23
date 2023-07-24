import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function TyposARight() {
    useEffect(() => {
        AOS.init();
        AOS.refresh()
    }, [])

    return (
        <Typography 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            fontWeight="bold" 
            fontSize="1rem"
            color="primary"
        >
        A B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z
        </Typography>);
}
// export const TyposBLeft = () => {
//     useEffect(() => {
//         AOS.init();
//         AOS.refresh()
//     }, [])

//     return (
//         <Typography 
//             data-aos="fade-left"
//             data-aos-duration="1000"
//             data-aos-delay="100"
//             fontWeight="bold" 
//             fontSize="1rem"
//             color="primary"
//         >
//         B C D E F G H I L M N O P Q R S T U V Z A B C D E F G H I L M N O P Q R S T U V Z A
//         </Typography>);
// }