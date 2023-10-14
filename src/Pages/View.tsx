import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams } from 'react-router-dom'





export default function View () {

const {id} = useParams()
const posts:any = useSelector((state:any) => state.posts )
const post = posts.find((p) => p.id == id)




    return (
        <div className='flex-col flex  items-center w-full   p-8'>

            <h1 className='text-3xl font-bold p-8'>{post.title}</h1>
            <p  className=' text-lg bg-gray-400 p-8 '>{post.content}</p>
        </div>
    )
}