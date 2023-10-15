
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams } from 'react-router-dom'


interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
  }
  


export default function View () {

const {id} = useParams()
const posts: Post[] = useSelector((state: { posts: Post[] }) => state.posts);
const post = posts.find((p) => p.id === Number(id));




    return (
        <div className='flex-col flex  items-center w-full   p-8'>
{post && (
    <div>
    <h1 className='text-3xl font-bold p-8'>{post.title}</h1>
    <p  className=' text-lg bg-gray-400 p-8 '>{post.content}</p>
            </div>
            )}

        </div>
    )
}