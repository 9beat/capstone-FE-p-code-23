import React, { useEffect, useState } from 'react'
// Axios
// import axios from 'axios';
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setPost } from '../../state/state.js'
// Material UI
import { useTheme, Box, Typography, IconButton, Divider } from '@mui/material';
import { FavoriteOutlined, FavoriteBorderOutlined, ShareOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';
// Components
import StyledFlex from '../styled/StyledFlex.jsx';
import StyledContainer from '../styled/StyledContainer.jsx';
// import StyledEvenly from '../styled/StyledBetween.jsx';
import FriendStripe from '../utils/FriendStripe.jsx';
import StyledBetween from '../styled/StyledBetween.jsx';
// import StyledCentered from '../styled/StyledCentered.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Post = ({ postId, postUserId, name, description, location, picturePath, userPicturePath, likes, comments }) => {
    const [ isComments, setIsComments ] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector((state) => state.token)
    
    const loggedUserId = useSelector((state) => state.user._id)
    const isLiked = Boolean(likes[loggedUserId])
    const likesCount = Object.keys(likes).length


    const { palette } = useTheme()
    const bgAlt = palette.background.alt
    const primaryLight = palette.primary.light
    const primaryMain = palette.primary.main
    // const primaryDark = palette.primary.dark
    const neutralMain = palette.neutral.main
    // const neutralMedium = palette.neutral.medium

    // HANDLE LIKES NUMBER
    const handleLikes = async () => {
        const res = await fetch(`http://localhost:3001/posts/${postId}/like`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: loggedUserId
            })
        })
        const updatedPost = await res.json()
        dispatch(setPost({ post: updatedPost }))
    }

    // HANDLE LIKES W/ AXIOS
    // const handleLikes = async () => {
    //     try {
    //         const response = await axios.patch(`http://localhost:3001/posts/${postId}/like`, { 
    //             userId: loggedUserId,
    //         }, { 
    //             headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //             }
    //         },
    //     );
    //         const updatedPost = response.data;
    //         dispatch(setPost({ post: updatedPost }));
    //     } catch (error) {
    //         console.error("Error while updating likes:", error);
    //     }
    // };

    useEffect(() => {
        Aos.init({
            duration: 600,
            startEvent: "DOMContentLoaded",
            easing: "ease-in-out",
            mirror: true,
            anchorPlacement: "top-top",
            delay: 300,
        })
        Aos.refresh()
    }, [])


    return (
        <StyledContainer data-aos="zoom-in-down" backgroundColor={bgAlt} >
            
            {/* post's author header */}
            <FriendStripe friendId={postUserId} name={name} 
                subtitle={location} userPicturePath={userPicturePath} 
            />
            
            {/* description */}
            <Typography color={neutralMain} sx={{ margin: "1rem" }}>
                {description}
            </Typography>
            
            {/* post body */}
            {picturePath && (
                <img
                    width="94%" 
                    height="auto" 
                    style={{ 
                        borderRadius: ".9rem", 
                        margin: "1rem" 
                    }} 
                    src={`http://localhost:3001/assets/${picturePath}`} 
                    alt="post" 
                />
            )}

            <StyledBetween marginTop=".25rem">
                <StyledBetween gap="1rem">
                    
                    {/* LIKES SECTION */}
                    <StyledFlex gap=".3rem">
                        {/* likes */}
                        <IconButton onClick={handleLikes}>
                            { isLiked 
                                ? <FavoriteOutlined 
                                    sx={{ 
                                        color: primaryMain, 
                                        "&:hover": { 
                                            color: primaryLight, 
                                            cursor: "pointer" 
                                        }
                                    }}
                                /> 
                                : <FavoriteBorderOutlined /> 
                            }
                        </IconButton>
                        {/* likes count */}
                        <Typography>
                            {likesCount}
                        </Typography>
                    </StyledFlex>

                    {/* COMMENTS SECTION */}
                    <StyledFlex gap=".3rem">
                        <IconButton onClick={() => setIsComments(!isComments)}>
                            <ChatBubbleOutlineOutlined />
                        </IconButton>
                        {/* comments count */}
                        <Typography>
                            {comments.length}
                        </Typography>
                    </StyledFlex>

                </StyledBetween>

                {/* SHARE POST SECTION */}
                <IconButton>
                    <ShareOutlined />
                </IconButton>
            </StyledBetween>
            { isComments && (
                <Box marginTop="1rem">
                    { comments.map((comment, i) => (
                        <Box key={`${name}-${i}`}>
                            <Divider />
                            <Typography sx={{ 
                                margin: "1rem .5rem", paddingLeft: "1rem", color: neutralMain 
                            }}>
                                {comment}
                            </Typography>
                        </Box>
                    ))}
                    <Divider />
                </Box>
            )}

        </StyledContainer>
    )

}




export default Post;