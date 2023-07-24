
import { useEffect } from 'react'
// Components
import StyledContainer from '../styled/StyledContainer.jsx'
// import StyledCentered from '../styled/StyledCentered.jsx';
import FriendStripe from '../utils/FriendStripe.jsx'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from '../../state/state.js'
// Material UI
import { useTheme, Typography, Box } from '@mui/material'



const RingOfFriends = ({ _id, userId, friendId }) => {
    // redux
    const dispatch = useDispatch()
    // states
    const token = useSelector((state) => state.token)
    const friends = useSelector((state) => state.user.friends)
    // palette
    const theme = useTheme()
    // const primeLight = theme.palette.primary.light
    const bgAlt = theme.palette.background.alt
    const neuDark = theme.palette.neutral.dark

    const friendList = async () => {
        const response  = await fetch(`http://localhost:3001/users/${userId}/friends`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        // console.log(data);
        dispatch(setFriends({ friends: data }))
    }

    useEffect(() => {
        friendList(userId)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <StyledContainer backgroundColor={bgAlt}>
            <Typography variant="h4" fontWeight="500" color={neuDark} 
                sx={{ textAlign: "center", marginBottom: "1.5rem" }} >
                FRIEND LIST
            </Typography>
            <Box gap="1.5rem">
                { Object.values(friends).map((friend) => (
                    <FriendStripe 
                        key={friend._id} 
                        friendId={friend._id} 
                        name={`${friend.firstName} ${friend.lastName}`}
                        subtitle={friend.occupation}
                        userPicturePath={friend.picturePath}
                    />
                ))}
            </Box>
        </StyledContainer>
    )

}

export default RingOfFriends;