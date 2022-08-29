import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
  const params= useParams();
  const navigate = useNavigate();
  console.log(params);


  return (
    <div>Post - {params.url}
    3 saniyeden sonra gedecek 
    <button onClick={()=>{
      navigate('/home')
    }}>sdfsd</button>
     </div>
  )
}

export default Post