import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const params = useParams();
  console.log(params);
  
  return (
    <div>post</div>
  )
}

export default Post