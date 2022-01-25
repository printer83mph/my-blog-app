import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts)

  return (
    <div>
      Posts!
    </div>
  )
}

export default Posts
