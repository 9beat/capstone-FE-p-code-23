import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// Material UI
import { Box, useMediaQuery } from '@mui/material'
// Framer motion
import { motion } from "framer-motion"
// Components
import UserCard from '../../components/widget/UserCard.jsx'
import UserPost from '../../components/widget/UserPost.jsx'
import AllPosts from '../../components/widget/AllPosts.jsx'
import Advertise from '../../components/widget/Ads.jsx'
// import SoundPlayer from '../../components/player/SoundPlayer.jsx'
import RingOfFriends from '../../components/widget/RingOfFriends.jsx'
import MainLayout from '../Layout/MainLayout.jsx'




export default function Home() {
    // media query
    const wideScreen = useMediaQuery("(min-width:950px)")
    // states
    const { _id, picturePath } = useSelector((state) => state.user)
    // player
    // const soundUrl = '../../../public/assets/the-moon_LofCosmos.mp3';



    return (
            <MainLayout>
            <motion.div 
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0, transition: { duration: .6 }}}
            >
                <Box 
                    display={ wideScreen ? "flex" : "block"} 
                    width="100%" 
                    height="30vh" 
                    gap="2rem"  
                    padding="2rem 3rem" justifyContent="space-between"
                >
                    <Box flexBasis={ wideScreen ? "26%" : undefined}>
                        <UserCard userId={_id} picturePath={picturePath} />
                        <Box margin="1.5rem 0 1.5rem 0"/>
                        <Box margin="2rem 0"/>
                        <RingOfFriends userId={_id} />
                    </Box>
                    <Box 
                        flexBasis={ wideScreen ? "50%" : undefined} 
                        marginTop={ wideScreen ? undefined : "2rem"}
                    >
                        <UserPost picturePath={picturePath}/>
                        <AllPosts userId={_id} />
                    </Box>
                    { wideScreen && (
                        <Box flexBasis="26%">
                            <Advertise />
                        </Box>
                    )}

                </Box>
                
            </motion.div>
            </MainLayout>
    )
}
