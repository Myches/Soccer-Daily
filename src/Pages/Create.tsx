import { useState } from "react"
import { addPost } from "../Components/PostReducer"
import { useDispatch } from "react-redux"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import {useNavigate} from 'react-router-dom'



export default function Create() {

    const [title, setTitle] = useState ('')
    const [author, setAuthor] = useState ('')
    const [content, setContent] = useState ('')
    const [date, setDate] = useState ('')

const dispatch = useDispatch()
const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(addPost ({id:posts[posts.length-1].id + 1 , title ,date, author , content}))
        navigate ('/')
    }

    const posts:any = useSelector((state:any) => state.posts )
   

    return(
        <div className="flex flex-col justify-center items-center  ">
<h1 className="flex justify-center items-center p-8 text-3xl font-bold" >Create Blog Post</h1>

<div>
<form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center items-center pb-8 ">
    <div className="lg:flex flex flex-col">
        <label htmlFor="title" className="font-bold">Title :</label>
<input type="text" value={title} placeholder="Add title" name = 'title' onChange={e => setTitle(e.target.value)} className="m-2 p-2 border rounded-lg w-[300px]"  />
</div>

<div className="lg:flex flex flex-col">
        <label htmlFor="author" className="font-bold" >Author :</label>
<input type="text" value={author}  placeholder="Add author"  name = 'author' onChange={e => setAuthor(e.target.value)} className="m-2 p-2 border rounded-lg w-[300px] "/>
</div>

<div className="lg:flex flex flex-col">
        <label htmlFor="date" className="font-bold" >Date :</label>
<input type="date" value={date}   name = 'date' onChange={e => setDate(e.target.value)} className="m-2 p-2 border rounded-lg w-[300px] "/>
</div>

<div className="flex flex-col justify-center items-center">
        <label htmlFor="content" className="font-bold text-2xl" >Post </label>
<textarea   name = 'content' value={content} onChange={e => setContent(e.target.value)} className="m-2 border rounded-lg  lg:w-[700px] w-[300px] h-[150px] lg:h-[250px] p-4"/>
</div>

<button className="bg-black text-blue-500 p-3 border rounded-lg border-none">Submit</button>

</form>
</div>  </div>
    )
}