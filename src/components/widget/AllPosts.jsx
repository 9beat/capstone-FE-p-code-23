/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
// Axios
// import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../state/state.js'
// Material UI
import { useTheme } from '@mui/material'
// Components
import Post from './Post.jsx'

const AllPosts = ({ userId, isProfile = false }) => {
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)
    const dispatch = useDispatch()
    // palette
    const theme = useTheme()
    const primeLight = theme.palette.primary.light
    // const bgAlt = theme.palette.background.alt
    // const neuDark = theme.palette.neutral.dark


    // GET ALL POSTS
    const getPosts = async () => {
        const response = await fetch("http://localhost:3001/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
    };

    // GET USER POSTS
    const getUserPosts = async () => {
        const res = await fetch(`http://localhost:3001/posts/${userId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        const data = await res.json()
        dispatch(setPosts({ posts: data }))
    }

        // GET ALL POSTS W/ AXIOS
    // const getPosts = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3001/posts", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         const data = response.data;
    //         dispatch(setPosts({ posts: data }));
    //     } catch (error) {
    //         console.error("Error while fetching posts:", error);
    //     }
    // };
    
    // GET USER POSTS W/ AXIOS
    // const getUserPosts = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:3001/posts/${userId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         const data = response.data;
    //         dispatch(setPosts({ posts: data }));
    //     } catch (error) {
    //         console.error("Error while fetching user posts:", error);
    //     }
    // };



    useEffect(() => {
        if (isProfile) {
            getUserPosts()
        } else {
            getPosts()
        }
    }, [])


    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={isProfile ? getUserPosts : getPosts}
            hasMore={true}
            loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b style={{primeLight}}>That's all folks!</b>
                </p>
            }>
                <p style={{ textAlign: "center" }}>
                    <b style={{primeLight}}>News feed...</b>
                </p>
                { posts.map(({ 
                    _id, 
                    userId, 
                    firstName, 
                    lastName, 
                    description, 
                    location, 
                    picturePath, 
                    userPicturePath, 
                    likes, 
                    comments,
                }) => (
                    <Post 
                        key={_id} 
                        postId={_id} 
                        postUserId={userId} 
                        name={`${firstName} ${lastName}`} 
                        description={description} 
                        location={location} 
                        picturePath={picturePath} 
                        userPicturePath={userPicturePath}
                        likes={likes}
                        comments={comments}
                    />
                ))}
        </InfiniteScroll>
        

        // <>
        //     {posts.map(({ _id, firstName, lastName, ...rest }) => (
        //         <Post
        //             key={_id}
        //             postId={_id}
        //             postUserId={userId}
        //             name={`${firstName} ${lastName}`}
        //             description={description} 
        //             location={location} 
        //             picturePath={picturePath} 
        //             userPicturePath={userPicturePath}
        //             likes={likes}
        //             comments={comments}
        //             // {...rest}
        //         />
        //     ))}
        // </>

    )
}


export default AllPosts;