import React from 'react'
import { Container,PostForm } from '../components'

function AddPost() {
  return (
    <div className='max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
       <Container>
         <PostForm/>
       </Container>
    </div>
  )
}

export default AddPost