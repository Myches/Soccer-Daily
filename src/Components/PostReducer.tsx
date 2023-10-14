import { createSlice } from "@reduxjs/toolkit";
import BlogData from "./BlogData"

const postSlice = createSlice ({
    name : "posts" ,
    initialState : BlogData ,
    reducers : {
        addPost : (state , action) => {
            state.push(action.payload)
        },
        editPost : (state,action) => {
            const {id,title,author,date,content} = action.payload
            const ep = state.find (post => post.id == id )
            if (ep) {
                ep.title = title;
                ep.author = author;
                ep.date = date;
                ep.content = content;
            }

        },
        deletePost: (state, action) => {
            const {id} = action.payload
            const dp = state.find (post => post.id == id )
            if (dp) {
                return state.filter (f => f.id !== id)
            }

        }
    }

})


export const {addPost,editPost,deletePost} = postSlice.actions
export default postSlice.reducer