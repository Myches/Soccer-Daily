import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { deletePost } from '../Components/PostReducer'







export default function HomePage() {

  

    const posts:any = useSelector((state:any) => state.posts )
    

    const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch (deletePost ({id:id}))
  }

  
    return (
     <div className='w-full flex flex-col justify-center items-center p-8  text-black'>
      <div className=" flex justify-around items-center w-full">
        <h1 className='flex justify-center items-center pb-8 text-3xl text-blue-900 font-bold'>SOCCER DAILY</h1>
<div className='flex space-x-4'>
    <Link to="/create" className='border p-3 bg-black text-blue-500 border-none rounded-lg mb-8'> Create Post</Link>
    <Link to="/viewBlogs" className='border p-3 bg-black text-blue-500 border-none rounded-lg mb-8'> View All Blog Post</Link>
    </div></div>
    <div className='bg-gray-400'>
        {posts.map ((post,index) => (
  <div key={index} className='border border-black rounded-2xl p-4 m-6 text-lg'>
        <p className='font-bold text-2xl'> {post.title}</p>
        <p className='italic '>{post.content.substring (0,70)}...</p>
        
        <p className='font-bold '><Link to={`/view/${post.id} `} className='underline text-blue-900'> View post</Link> by  {post.author}</p>
        <p className='font-bold '> {post.date}</p>
  <div className='flex space-x-6 font-bold text-blue-900'>
  <Link to={`/edit/${post.id} `}> Edit</Link>
  <button onClick={() => handleDelete (post.id)}> Delete </button>
  

  </div>
  
  
    </div>
        )
        
        )}
  
      
  </div></div>
    
    
    )
  }
  