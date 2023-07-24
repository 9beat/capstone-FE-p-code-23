import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Axios
// import axios from 'axios';
// Redux
import { useSelector } from "react-redux";
// Material UI
import { useTheme, Box, Typography, Divider } from "@mui/material";
import {  LocationOnOutlined, WorkOutlineOutlined, GitHub, DynamicForm , Reddit, Instagram, Twitter, VisibilityOutlined, TurnedInOutlined, GroupsOutlined } from "@mui/icons-material";
// Components
import StyledContainer from "../styled/StyledContainer";
import StyledFlex from "../styled/StyledFlex";
import Propic from "../utils/Propic";
import StyledCentered from '../styled/StyledCentered';

const UserCard = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const token = useSelector((state) => state.token)

    const { palette } = useTheme()
    const bgAlt = palette.background.alt
    const primaryLight = palette.primary.light
    const secondaryMain = palette.secondary.main

    // GET USER DATA
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



    
    // GET USER DATA W/ AXIOS
    // const getUser = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:3001/users/${userId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         const data = response.data;
    //         setUser(data);
    //     } catch (error) {
    //         console.error("Error while fetching user:", error);
    //     }
    // };


    useEffect(() => {
        getUser()
        
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return null
    }

    // Add checks for user properties
    const { firstName, lastName, location, occupation, viewedProfile, impressions, ObjectId, friends = [ObjectId] } = user
    
    // Check if friends is an array before getting length
    const friendsCount = Array.isArray(friends) ? friends.length : 0

    return (
        <StyledContainer backgroundColor={bgAlt}>
            {/* header */}
            <StyledFlex gap="1rem" padding="2rem"  onClick={() => navigate(`/profile/${userId}`)}>
                <StyledCentered>
                <Box padding=".1rem" display="flex" justifyContent="center" alignItems="center" flexDirection="row" gap=".2rem">
                    {/* propic */}
                    <Propic image={picturePath} size="150px"/>
                    {/* infos */}
                    <Box display="flex" alignItems="center" flexDirection="column">
                        <Box padding="0 1rem" display="flex" alignItems="center" justifyContent="center">
                            <Typography fontWeight="normalize" letterSpacing=".1rem" fontSize="1.4rem" color={primaryLight} 
                                sx={{ "&:hover": { color: palette.primary.main, cursor: "pointer" } }}
                            >
                                {firstName} {lastName}
                            </Typography>
                        </Box>
                        <Box display="flex" marginLeft="1rem" textAlign="center" alignItems="center"> 
                            
                            {/* occupation */}
                            <WorkOutlineOutlined sx={{ fontSize: "1rem", color: secondaryMain, margin: ".5rem", "&:hover": { color: "yellow", cursor: "pointer" } }} />   
                            <Typography display="flex" variant='h5' padding=".5rem 0">
                                {occupation} 
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                </StyledCentered>
                
            </StyledFlex>

            <Divider />

            {/* informations */}
            <StyledFlex>
                {/* row 1 */}
                <Box padding=".1rem" display="flex" justifyContent="space-evenly" flexDirection="column" gap=".2rem">
                    {/* location */}
                    <Box paddingTop=".1rem" display="flex" alignItems="center" justifyContent="space-evenly" gap=".2rem">
                        <LocationOnOutlined sx={{ fontSize: "2rem", color: secondaryMain, margin: "1rem", "&:hover": { color: "yellow", cursor: "pointer" } }} />
                        <Typography display="flex" variant='h5' padding=".5rem 0">
                            {location} 
                        </Typography>
                    </Box>
                    {/* friends */}
                    <Box paddingTop=".1rem" display="flex" alignItems="center" gap=".2rem">
                        <VisibilityOutlined sx={{ fontSize: "2rem", color: secondaryMain, margin: "1rem", "&:hover": { color: "yellow", cursor: "pointer" } }} />
                        <Typography display="flex" variant='h5' padding=".5rem 0">
                            {viewedProfile}
                        </Typography>
                    </Box>
                </Box>
                {/* row 2 */}
                <Box padding=".1rem" display="flex" justifyContent="space-evenly" flexDirection="column" gap=".2rem">
                    {/* views */}
                    <Box paddingTop=".1rem" display="flex" alignItems="center" gap=".2rem">
                        <GroupsOutlined sx={{ fontSize: "2rem", color: secondaryMain, margin: "1rem", "&:hover": { color: "yellow", cursor: "pointer" } }} />
                        <Typography display="flex" variant='h5' padding=".5rem 0">
                            {friendsCount}
                        </Typography>
                    </Box>
                    
                    {/* impressions */}
                    <Box paddingTop=".1rem" display="flex" alignItems="center" gap=".2rem">
                        <TurnedInOutlined sx={{ fontSize: "2rem", color: secondaryMain, margin: "1rem", "&:hover": { color: "yellow", cursor: "pointer" } }} />
                        <Typography display="flex" variant='h5' padding=".5rem 0">
                            {impressions}
                        </Typography>
                    </Box>
                </Box>
            </StyledFlex>

            <Divider />

            {/* contacts */}
            <StyledCentered gap="2rem">
                <StyledFlex gap="1.5rem" padding="2rem">
                    <StyledFlex gap=".1rem">
                        <GitHub sx={{ color: secondaryMain, "&:hover": { color: "yellow", cursor: "pointer" } }} /> 
                    </StyledFlex>
                    <StyledFlex gap=".1rem">
                        <DynamicForm sx={{ color: secondaryMain, "&:hover": { color: "yellow", cursor: "pointer" } }} /> 
                    </StyledFlex>
                    <StyledFlex gap=".1rem">
                        <Reddit sx={{ color: secondaryMain, "&:hover": { color: "yellow", cursor: "pointer" } }} /> 
                    </StyledFlex>
                    <StyledFlex gap=".1rem">
                        <Instagram sx={{ color: secondaryMain, "&:hover": { color: "yellow", cursor: "pointer" } }} /> 
                    </StyledFlex>
                    <StyledFlex gap=".1rem">
                        <Twitter sx={{ color: secondaryMain, "&:hover": { color: "yellow", cursor: "pointer" } }} /> 
                    </StyledFlex>
                </StyledFlex>
            </StyledCentered>
            
        </StyledContainer>
    )
}


export default UserCard;