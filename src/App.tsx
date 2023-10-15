import './App.css'
import HomePage from './Pages/HomePage'
import Create from './Pages/Create'
import Edit from './Pages/Edit'
import View from './Pages/View'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewBlogs from './Pages/ViewBlogs'
import './index.css'








export default function App() {

  

 
  return (
   <div className=' w-full h-full'>
  <BrowserRouter>
       <Routes >
       <Route  path ="/" element={<HomePage />} />
       <Route  path ="/create" element={<Create />} />
       <Route  path ="/view/:id" element={<View />} />
       <Route  path ="/edit/:id" element={<Edit />} />
       <Route  path ="/viewBlogs" element={<ViewBlogs />} />
       </Routes>
       </BrowserRouter>

  </div>
      
    
  
  )
}

 
