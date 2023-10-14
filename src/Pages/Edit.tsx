import React, { useState } from "react"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams,useNavigate} from 'react-router-dom'
import { editPost } from "../Components/PostReducer"
import { useDispatch } from "react-redux"


export default function Edit() {

        const dispatch = useDispatch();
    const {id} = useParams ()
    const posts:any = useSelector((state:any) => state.posts )
const existingPost = posts.filter (f => f.id == id)
const {title,author,date,content} = existingPost[0]

const [eTitle, setTitle] = useState (title)
    const [eAuthor, setAuthor] = useState (author)
    const [eDate, setDate] = useState (date)
    const [eContent, setContent] = useState (content)

const navigate = useNavigate ()
    const handleEdit = (event) => {

        event.preventDefault();
        dispatch(editPost({id :id,
                title:eTitle,
                author:eAuthor,
                date:eDate,
                content:eContent,

        }))
        navigate ('/')
    }

    return(
        <div className=" flex-col justify-center items-center h-screen ">
<h1 className="flex justify-center items-center p-8 text-lg font-bold" >Edit Post</h1>
<form  className="space-y-6 flex flex-col justify-center items-center pb-8" onSubmit={handleEdit}>
    <div>
        <label htmlFor="title">Title :</label>
<input type="text" placeholder="Add title" name ='title' value={eTitle} onChange={e => setTitle(e.target.value)} className="m-2 p-2 border rounded-lg w-[300px]"  />
</div>

<div>
        <label htmlFor="author">Author :</label>
<input type="text"   placeholder="Add name"  name = 'author' value={eAuthor} onChange={e => setAuthor(e.target.value)}  className="m-2 p-2 border rounded-lg w-[300px] "/>
</div>

<div>
        <label htmlFor="date">Date :</label>
<input type="date"   placeholder="select date" name = 'date' value={eDate} onChange={e => setDate(e.target.value)} className="m-2 p-2 border rounded-lg w-[300px]" />
</div>

<div className="flex flex-col justify-center items-center">
        <label htmlFor="content" className="font-bold text-lg" >Post </label>
<textarea  placeholder="Add blog post" name = 'content' value={eContent} onChange={e => setContent(e.target.value)} className="m-2 border rounded-lg  w-[700px] h-[250px] p-4"/>
</div>


<button className="bg-black text-blue-500 p-3 border rounded-lg border-none ">Update</button>

</form>
        </div>
    )
}