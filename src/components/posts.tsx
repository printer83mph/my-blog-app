import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../actions/posts-actions'
import { RootState } from '../reducers'
import { IdentifiedPostData } from '../types'

const Post = ({
  title,
  body,
  image,
}: IdentifiedPostData) => (
  <li>
    <h4>{title}</h4>
    <p>{body}</p>
    {/* TODO: image */}
  </li>
)

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)

  return (
    <div>
      <div>
        <h2>Posts</h2>
        <button
          type="button"
          onClick={() => dispatch(addPost({ title: 'hello', body: 'yo', image: 'google' }))}
        >
          Add post
        </button>
      </div>
      <ul>
        {posts.map((data) => (<Post {...data} key={data.id} />)) }
      </ul>
    </div>
  )
}

export default Posts
