import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
// Axios
import axios from "axios";
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setPosts } from '../../state/state.js'
// Material UI
import { EditOutlined, DeleteOutlined, AttachFileOutlined, GifBoxOutlined, ImageOutlined, MicOutlined, MoreHorizOutlined } from '@mui/icons-material'
import { Box, Button, IconButton, Typography, InputBase, Divider, useMediaQuery, useTheme } from '@mui/material'
// Components
import StyledContainer from '../styled/StyledContainer.jsx'
import StyledBetween from '../styled/StyledBetween.jsx'
import Propic from '../utils/Propic.jsx'
import StyledCentered from '../styled/StyledCentered.jsx'


const UserPost = ({ picturePath }) => {
    const dispatch = useDispatch()
    const [ post, setPost ] = useState('')
    const { _id } = useSelector((state) => state.user)
    const token = useSelector((state) => state.token)
    const [ image, setImage ] = useState(null)
    const [ isImage, setIsImage ] = useState(false)
    const wideScreen = useMediaQuery("(min-width:800px)")
    // palette 
    const { palette } = useTheme()
    // const mediuMain = palette.neutral.mediumMain
    const primaryLight = palette.primary.light
    const neutraLight = palette.neutral.light
    const neutralDark = palette.neutral.dark
    const bgAlt = palette.background.alt
    const primaryMain = palette.primary.main
    const secondaryMain = palette.secondary.main
    
    // HANDLE POST
    // const handlePost = async () => {
    //     const formData = new FormData()
    //     formData.append("userId", _id)
    //     formData.append("description", post)
    //     if (image) {
    //         formData.append("picture", image)
    //         formData.append("picturePath", image.name)
    //     }
    //     // send to BE post info
    //     const res = await fetch(`http://localhost:3001/posts`, {
    //         method: "POST",
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         body: formData,
    //     })
    //     // return updated posts list
    //     const posts = await res.json()
    //     // 
    //     dispatch(setPosts({ posts }))
    //     // reset state
    //     setImage(null)
    //     setPost("")
    // }

    // HANDLE POST W/ AXIOS
    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);
        
        if (image) {
            formData.append("picture", image); 
            formData.append("picturePath", image.name);
        }

        try {
            const response = await axios.post("http://localhost:3001/posts", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            const posts = response.data;
            dispatch(setPosts({ posts }));

            // reset state
            setImage(null);
            setPost("");

        } catch (error) {
            console.error("Error while posting:", error);
        }
    };




    return (
        <StyledContainer backgroundColor={bgAlt}>

            {/* TOP */}
            <StyledBetween gap="0.4rem" padding="1.5rem">
                <Propic image={picturePath} padding="2rem" size="50px" />
                <InputBase placeholder="Just get it out! ;)" 
                    value={post} onChange={(e) => setPost(e.target.value)} 
                    sx={{ 
                        width: "100%",
                        padding: ".5rem 1rem",
                        borderRadius: "3rem",
                        backgroundColor: neutraLight
                    }}
                />
            </StyledBetween>
            
            {/* CENTER */}
            {isImage && (
                <Box marginTop="1rem" borderRadius="0.1rem" minWidth="30rem" >
                    <Dropzone accept={{
                        "image/*": [".jpg", ".jpeg", ".png"],
                        }}
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                        autoFocus={false}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <StyledBetween 
                                sx={{
                                    width: "90%",
                                    border: `.5rem dashed ${primaryMain}`,
                                    borderRadius: "2rem",
                                    padding: "1rem",
                                    alignText: "center",
                                    margin: "auto",
                                    "&:hover": { cursor: "pointer" }
                                }}
                            >
                                <Box {...getRootProps()} >
                                    
                                    <input {...getInputProps()}  /> 
                                        
                                    { image ? (
                                            <StyledCentered 
                                                sx={{ 
                                                    maxHeight: '30rem',
                                                    width: '100%',
                                                    position: "relative"
                                                }}>
                                                <EditOutlined color="light" fontSize="large"  
                                                    sx={{ 
                                                        position: "absolute",
                                                        top: "45%",
                                                        left: "48%",
                                                        overflowWrap: "hidden"
                                                    }}/>
                                                
                                                {/* image preview */}
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt="preview"
                                                    style={{ 
                                                        opacity: ".6",
                                                        objectFit: "contain",
                                                        maxHeight: '35rem',
                                                        maxWidth: '80%',
                                                        borderRadius: '.5rem'
                                                    }}
                                                />
                                            </StyledCentered>
                                        ) : (
                                        <Typography minWidth="100%" 
                                            sx={{ 
                                                m: "30% 30% 30% 30% ",
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "primaryMain"
                                            }}>
                                                Browse a file <br/>
                                                or drag & drop it from your desktop
                                        </Typography>
                                        )
                                    }
                                </Box>
                                {image && (
                                    <>
                                        {/* delete btn */}
                                        <IconButton 
                                            sx={{ 
                                                cursor: "pointer",
                                                width: "4q0%",
                                                borderRadius: "1rem"
                                            }} 
                                            onClick={() => setImage(null)}
                                        >
                                            <DeleteOutlined />
                                        </IconButton>
                                    </>
                                        
                                )}
                            </StyledBetween>
                        )}
                    </Dropzone>
                </Box>
            )}

            <Divider sx={{ margin: "1rem 2rem" }} />
            
            {/* BOTTOM */}
            <StyledBetween>
                <StyledBetween padding="1rem" onClick={() => setIsImage(!isImage)}>
                        <ImageOutlined sx={{ color: secondaryMain, "&:hover": { color: "hsl(12, 94%, 63%)", cursor: "pointer" } }} />
                    </StyledBetween>
                { wideScreen ? (
                    <>    
                    <StyledBetween gap="0.3rem">
                        <GifBoxOutlined sx={{ color: secondaryMain, "&:hover": { color: "hsl(12, 94%, 63%)", cursor: "pointer" } }} />
                    </StyledBetween>
                    
                    <StyledBetween gap="0.3rem">
                        <AttachFileOutlined sx={{ color: secondaryMain, "&:hover": { color: "hsl(12, 94%, 63%)", cursor: "pointer" } }} />
                    </StyledBetween>
                    
                    <StyledBetween gap="0.3rem">
                        <MicOutlined sx={{ color: secondaryMain, "&:hover": { color: "hsl(12, 94%, 63%)", cursor: "pointer" } }} />
                    </StyledBetween>
                    </>
                ) : (
                    <StyledBetween gap="0.3rem">
                        <MoreHorizOutlined sx={{ color: secondaryMain, "&:hover": { color: "hsl(12, 94%, 63%)", cursor: "pointer" } }} />
                    </StyledBetween>
                )}


                <Button disabled={!post} sx={{ borderRadius: "3rem", color: neutralDark, backgroundColor: primaryLight, "&:hover": { color: "hsl(12, 94%, 63%)", fontWeight: "bold", cursor: "pointer" } }} onClick={handlePost}>
                    POST
                </Button>
            </StyledBetween>

        </StyledContainer>
    )
}

export default UserPost