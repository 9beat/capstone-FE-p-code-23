import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Redux
import { useSelector } from 'react-redux'
// Material UI
import { useMediaQuery, Box } from '@mui/material'
// Components
import UserPost from '../../components/widget/UserPost'
import RingOfFriends from '../../components/widget/RingOfFriends'
import AllPosts from '../../components/widget/AllPosts'
import UserCard from '../../components/widget/UserCard'
import MainLayout from '../Layout/MainLayout'
// Framer effect
import { motion } from "framer-motion"



export default function Profile() {

    const loggedUser = useSelector((state) => state.user);
    const [ user, setUser ] = useState(null)
    const { userId } = useParams()

    const token = useSelector((state) => state.token)
    const wideScreen = useMediaQuery("(min-width:950px)")

    const isCurrentUserProfile = loggedUser._id === userId;

    const getUser = async () => {
        const res = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const data = await res.json()

        setUser(data)
    }
    

    useEffect(() => {
        getUser()
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    if (!user) 
    return null

    return (
        
        <MainLayout>

        
            <motion.div                        
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0, transition: { duration: .3 }}}  
                
                style={{
                    width: "100%", 
                    display: wideScreen ? "flex" : "block", 
                    gap: "2rem", 
                    padding: "2rem 3rem", 
                    justifyContent: "center"
                }}
            >
                <Box flexBasis={ wideScreen ? "26%" : undefined}>
                    <UserCard userId={userId} picturePath={user.picturePath} />
                    <Box margin="1.5rem .5rem 1.5rem .5rem"/>
                </Box>
                <Box 
                    flexBasis={ wideScreen ? "50%" : undefined} 
                    marginTop={ wideScreen ? undefined : "2rem"}
                >
                {isCurrentUserProfile ? (
                    <>
                        <UserPost picturePath={loggedUser.picturePath}/>
                        <Box margin="1.5rem 0 1.5rem 0"/>
                    </>
                ) : null }
                    <AllPosts userId={userId} isProfile={true} />
                </Box>
                { wideScreen && (
                        <Box flexBasis="26%">
                            <RingOfFriends userId={userId} />
                        </Box>
                    )}
            </motion.div>    
        </MainLayout>

    )
}
