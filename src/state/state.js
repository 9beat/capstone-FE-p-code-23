import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
}

// 
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
        // set default theme mode
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        
        // set states after login
        setSignIn: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        
        // reset states after logout
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        
        // set friends in local state
        setFriends: (state, action) => {
            // user already exist
            if (state.user){
                state.user.friends = action.payload.friends;
            } else {
                console.error(`Error: this user has no friends`);
            }
        },

        // set posts in local state
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },

        // find updated post & replace it || return the original
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post
                return post; 
            })
            state.posts = updatedPosts
        }
    }
})

export const { setMode, setSignIn, setLogout, setFriends, setPosts, setPost } = authSlice.actions;

export default authSlice.reducer;