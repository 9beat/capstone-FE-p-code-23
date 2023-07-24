import React from 'react'
// Axios
// import axios from 'axios'
// Moment
import moment from 'moment';
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFriends } from "../../state/state.js"
// Material UI
import { useTheme, Box, Typography, IconButton } from '@mui/material';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
// Components
import Propic from './Propic.jsx';
import StyledFlex from '../styled/StyledFlex.jsx';
import StyledBetween from '../styled/StyledBetween.jsx';




const FriendStripe = ({ friendId, name, subtitle, userPicturePath, createdAt }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { _id } = useSelector((state) => state.user)
    const token = useSelector((state) => state.token)
    const friends = useSelector((state) => state.user.friends)
    
    const { palette } = useTheme()
    // const bgAlt = palette.background.alt
    const primaryLight = palette.primary.light
    const primaryDark = palette.primary.dark
    const neutralMain = palette.neutral.main
    const neutralMedium = palette.neutral.medium

    // CHECK FRIEND
    const isFriend = Object.values(friends).find((friend) => friend._id === friendId)
    const isSelf = friendId === _id;

    // HANDLE FRIEND
    const patchFriend = async () => {
        const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const data = await response.json()
        dispatch(setFriends({ 
            friends: data 
        } ))
    }

    // HANDLE FRIEND W/ AXIOS
    // const patchFriend = async () => {
    //     const response = await axios.patch(`http://localhost:3001/users/${_id}/${friendId}`, {
    //         method: "PATCH",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //         },
    //     })
    //     const data = await response.json()
    //     dispatch(setFriends({ friends: data }))
    // }


    return (
        <StyledBetween>
            <StyledFlex gap=".5rem" margin=".5rem 0 0 1rem">
                <Propic image={userPicturePath} /> 
                <Box 
                    onClick={() => { 
                        navigate(`/profile/${friendId}`);
                    }}
                    sx={{}}
                >
                    <Typography 
                        variant="h5"
                        fontWeight="400"
                        color={neutralMain}
                        sx={{ "&:hover": { color: primaryLight, cursor: "pointer" } }}
                    >
                        {name}
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        fontSize=".75rem"
                        color={neutralMain}
                        fontWeight="400"
                    >
                        {moment(createdAt).fromNow()}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        fontSize=".75rem"
                        color={neutralMedium}
                    >
                        {subtitle}
                    </Typography>
                </Box>
            </StyledFlex>

            {/* ADD/REMOVE ICON */}
            {!isSelf && (
                <IconButton
                    position="absolute"
                    onClick={() => patchFriend()}
                    sx={{ backgroundColor: "transparent"}}
                >
                    { isFriend ? (
                        <PersonRemoveOutlined sx={{ 
                            color: primaryDark, 
                            margin: "1rem" 
                        }} />
                    ) : (
                        <PersonAddOutlined sx={{ 
                            color: primaryDark, 
                            margin: "1rem" 
                        }} />
                    )}
                </IconButton>
            )}
        </StyledBetween>
    )
}

export default FriendStripe;

// import React, { useCallback } from 'react'
// // Axios
// // import axios from 'axios'
// // Moment
// import moment from 'moment';
// // Redux
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { setFriends } from "../../state/state.js"
// // Material UI
// import { useTheme, Box, Typography, IconButton } from '@mui/material';
// import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
// // Components
// import Propic from './Propic.jsx';
// import StyledFlex from '../styled/StyledFlex.jsx';
// import StyledBetween from '../styled/StyledBetween.jsx';




// const FriendStripe = ({ friendId, name, subtitle, userPicturePath, createdAt }) => {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     // const { _id } = useSelector((state) => state.user)
//     const { user, token} = useSelector((state) => ({ user: state.user, token: state.token }))
//     // const friends = useSelector((state) => state.user.friends)
//     const { _id, friends } = user
//     const { palette } = useTheme()
//     // const bgAlt = palette.background.alt
//     const primaryLight = palette.primary.light
//     const primaryDark = palette.primary.dark
//     const neutralMain = palette.neutral.main
//     const neutralMedium = palette.neutral.medium

//     // CHECK FRIEND
//     const isFriend = friends[friendId]
//     const isSelf = friendId === _id;

//     // HANDLE FRIEND
//     const patchFriend = useCallback(async () => {
//         const response = await fetch(`http://localhost:3001/users/${_id}/${friendId}`, {
//             method: "PATCH",
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = await response.json()
//         dispatch(setFriends({ friends: data }))
//     }, [_id, friendId, token, dispatch])
    
//     const handleNavigate = useCallback(() => {
//         navigate(`/profile/${friendId}`)
//     }, [navigate, friendId])

//     // HANDLE FRIEND W/ AXIOS
//     // const patchFriend = async () => {
//     //     const response = await axios.patch(`http://localhost:3001/users/${_id}/${friendId}`, {
//     //         method: "PATCH",
//     //         headers: {
//     //             Authorization: `Bearer ${token}`,
//     //             "Content-Type": "application/json",
//     //         },
//     //     })
//     //     const data = await response.json()
//     //     dispatch(setFriends({ friends: data }))
//     // }


//     return (
//         <StyledBetween>
//             <StyledFlex gap=".5rem" margin=".5rem 0 0 1rem">
//                 <Propic image={userPicturePath} /> 
//                 <Box 
//                     // margin="0 3rem 0 0"
//                     onClick={handleNavigate} 
//                         // navigate(`/profile/${friendId}`);
//                         // navigate(0); 
//                     >
//                     <Typography 
//                         variant="h5"
//                         fontWeight="400"
//                         color={neutralMain}
//                         sx={{
//                             "&:hover": { color: primaryLight, cursor: "pointer" }
//                         }}
//                     >
//                         {name}
//                     </Typography>

//                     <Typography
//                         variant="subtitle2"
//                         fontSize=".75rem"
//                         color={neutralMain}
//                         fontWeight="400" 
//                     >
//                         {moment(createdAt).fromNow()}
//                     </Typography>
//                     <Typography
//                         variant="subtitle2"
//                         fontSize=".75rem"
//                         color={neutralMedium}
//                     >
//                         {subtitle}
//                     </Typography>
//                 </Box>
//             </StyledFlex>

//             {/* ADD/REMOVE ICON */}
//             {!isSelf && (
//                 <IconButton
//                     position="absolute"
//                     onClick={patchFriend}
//                     sx={{ 
//                         backgroundColor: primaryLight, 
//                         p: "0.6rem" 
//                     }}
//                 >
//                     { isFriend ? (
//                         <PersonRemoveOutlined 
//                             sx={{ 
//                                 color: primaryDark, 
//                                 margin: ".5rem 1rem 0 0" 
//                             }} 
//                         />
//                     ) : (
//                         <PersonAddOutlined 
//                             sx={{ 
//                                 color: primaryDark, 
//                                 margin: ".5rem 1rem 0 0" 
//                             }} 
//                         />
//                     )}
//                 </IconButton>
//             )}
//         </StyledBetween>
//     )
// }

// export default FriendStripe;
