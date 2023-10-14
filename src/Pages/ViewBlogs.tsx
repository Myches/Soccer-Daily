import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {Link} from 'react-router-dom'

export default function ViewBlogs () {

    const posts:any = useSelector((state:any) => state.posts )


    return (
        <div className=' flex flex-col justify-center items-center'>

            <h1 className='flex justify-center items-center p-8 text-2xl font-bold'>All Blog Posts</h1>

<div className='bg-gray-400 '>
 {posts.map ((post,index) => (
    <div key={index} className='p-8 flex-col flex justify-center items-center text-lg'>
    
        <p className='flex justify-center items-center text-xl font-bold pb-2'>{post.title}</p>

        <div className='p-8 border border-black rounded-lg'>
    <p className=' italic'>{post.content.substring (0,70)}...</p>
    <p className=''><Link to={`/view/${post.id} `} className='underline text-blue-900'> View post</Link></p>
    </div>
    </div>
 ))}

</div>   </div>
    )
}