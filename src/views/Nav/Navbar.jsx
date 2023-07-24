import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setMode, setLogout } from '../../state/state.js';
// Material UI
import { useTheme, Box, IconButton, Typography, FormControl, InputBase, MenuItem, Select, useMediaQuery } from '@mui/material';
import { ModeNight, LightMode, Search , Notifications, Menu, AccountCircle, Close } from '@mui/icons-material';
// Components
import StyledFlex from '../../components/styled/StyledFlex.jsx';
// import StyledEvenly from '../../components/styled/StyledBetween.jsx';
import StyledBetween from '../../components/styled/StyledBetween.jsx';


export default function Navbar() {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
    // dispatch actions from reducers
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const wideScreen = useMediaQuery("(min-width:800px)") 
    // palettes
    const theme = useTheme();
    const { palette } = useTheme()
    const bgAlt = theme.palette.background.alt
    const primaryLight = theme.palette.primary.light
    const neutraLight = theme.palette.neutral.light

    // const fullName = `John Doe`
    const fullName = `${user.firstName} ${user.lastName}`

    // search input
    // const [searchInput, setSearchInput] = useState("");
    // const handleSearch = () => {
    //     let searchResults = [];
    //     user.forEach((user) => {
    //         Object.value(user).forEach((value) => {
    //             if (typeof value === "string" && value.toLowerCase.includes(searchInput.toLowerCase())) {
    //                 searchResults.push(JSON.stringify(user))
    //             }
    //         })  
    //     });
    //     post.forEach((post) => {
    //         Object.values(post).forEach((value) => {
    //             if (typeof value === "string" && value.toLowerCase().includes(searchInput.toLowerCase())) {
    //                 searchResults.push(JSON.stringify(post));
    //             }
    //         });
    //     });
    //     const exactMatches = searchResults.filter((result) => result.includes(searchInput));
    //     console.log("The exact search results:", exactMatches);
    //     dispatch(setPosts(exactMatches))
    // };
    
    return (
        <StyledBetween padding="1rem 5rem" gap="1rem" backgroundColor={bgAlt}>
            <StyledFlex gap="6rem">
                <Typography fontWeight="bold" fontSize="clamp(1rem, 2rem, 2.25rem)" color={primaryLight} 
                    onClick={() => navigate("/home")} sx={{ color: theme.palette.primary.light, cursor: "pointer" }}
                >
                    GeekHub
                </Typography>
                { wideScreen && (
                    <StyledFlex backgroundColor={neutraLight} borderRadius="2rem" gap="1rem" padding="0.3rem 1.5rem">
                        <InputBase  placeholder="Search... " fontSize="0.5rem"/>
                        {/* <InputBase
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        /> */}

                        <IconButton>
                            <Search />
                        </IconButton>
                        {/* <IconButton onClick={handleSearch}>
                            <Search />
                        </IconButton> */}
                    </StyledFlex>
                )}
            </StyledFlex>

            {/* WIDE NAV */}
            { wideScreen ? (
            <StyledFlex gap="2rem">

                {/* theme icon */}
                <IconButton onClick={() => dispatch(setMode())}>
                    { theme.palette.mode === "dark" ? ( 
                        <LightMode sx={{ fontSize:"1.4rem", cursor:"pointer", "&:hover": { color: palette.secondary.main, cursor: "pointer" }}} />
                    ) : (
                        <ModeNight sx={{ fontSize:"1.4rem", cursor:"pointer", "&:hover": { color: palette.secondary.main, cursor: "pointer" }}} />                        
                    )}
                </IconButton>

                {/* notification icon */}
                <Notifications sx={{ fontSize:"1.4rem", cursor:"pointer" }} />
                
                {/* DROPDOWN */}
                <FormControl variant="filled" value={fullName}>
                    <Select 
                        value={fullName} 
                        sx={{ 
                            backgroundColor: theme.palette.background.default, 
                            width: "10rem", 
                            padding: "0.3rem 1rem", 
                            borderRadius: "0.3rem",
                            display: "flex",
                            flexDirection: "column",
                            "& .MuiSvgIcon-root": {
                                pr: ".1rem", 
                                width: "2.9rem" 
                            }, 
                            "& .MuiSelect-select:focus": {
                                backgroundColor: theme.palette.neutral.medium
                            }
                        }} 
                        input={<InputBase />}  
                        >
                            <MenuItem value={fullName}>
                                <Typography>
                                    {fullName}
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>
                                LogOut
                            </MenuItem>
                    </Select>
                    
                </FormControl>
                <AccountCircle sx={{ fontSize:"1.4rem", cursor:"pointer" }}/>
            </StyledFlex>
            ) : (
            <IconButton onClick={() => setMobileMenuToggle(!mobileMenuToggle)}>
                <Menu />
            </IconButton> 
            )}

            {/* MOBILE NAV */}
            { !wideScreen && mobileMenuToggle && (
                <Box position="fixed" right="0" bottom="0" height="100vh" zIndex="999" backgroundColor={theme.palette.background.default} maxWidth="31.2rem" minWidth="18.7rem">
                    
                    {/* MOBILE MENU */}
                    <StyledFlex display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="2.95rem">
                    
                        {/* CLOSE BTN */}
                        <Box display="flex" justifyContent="center" paddingRight=".5rem">
                            <IconButton onClick={() => setMobileMenuToggle(!mobileMenuToggle)}>
                                <Close />
                            </IconButton>
                        </Box>
                        
                        {/* THEME ICON */}
                        <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize:"1rem", cursor:"pointer" }}>
                            { theme.palette.mode === "dark" ? (
                                <LightMode sx={{ color: "dark", fontSize:"1.4rem", cursor:"pointer" }} />
                            ) : (
                                <ModeNight sx={{ fontSize:"1.4rem", cursor:"pointer" }} />
                            )}
                        </IconButton>
                        
                        {/* NOTIFICATIONS ICON */}
                        <Notifications sx={{ fontSize:"1.4rem", cursor:"pointer" }} />
                            <FormControl variant="standard" value={fullName}>
                                <Select 
                                    value={fullName} 
                                    sx={{ 
                                        backgroundColor: theme.palette.neutral.medium, 
                                        width: "9.3rem", 
                                        padding: "0.3rem 1rem", 
                                        borderRadius: "0.3rem",
                                        "& .MuiSvgIcon-root": {
                                            pr: "0.5rem", 
                                            width: "2.8rem" 
                                        }, 
                                        "& .MuiSelect-select:focus": {
                                            backgroundColor: theme.palette.neutral.medium
                                        }
                                    }} 
                                    input={<InputBase />}  
                                >
                                    <MenuItem value={fullName}>
                                        <Typography>
                                            {fullName}
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => fullName && dispatch(setLogout())}>
                                        LogOut
                                    </MenuItem>
                                </Select>
                            </FormControl>
                    </StyledFlex>
                </Box>
            )}
        </StyledBetween>
    )
}
