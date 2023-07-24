import React from 'react'
import Navbar from '../Nav/Navbar'
import ScrollToTopBtn from '../../components/utils/ScrollToTopBtn'

export default function MainLayout({children}) {
    return (
        <>
            <Navbar />
                {children}
            <ScrollToTopBtn />
        </>
    )
}
