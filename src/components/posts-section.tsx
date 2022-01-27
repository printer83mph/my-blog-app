import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '../actions/posts-actions'
import { RootState } from '../reducers'
import { PostData } from '../types'
import Post from './post'
import PostEdit from './post-edit'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)

  const addPostCallback = useCallback(
    (data: PostData) => dispatch(addPost(data)),
    [dispatch]
  )

  return (
    <div className="mb-12">
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-4xl font-black">Posts</h2>
        <PostEdit
          buttonText="New Post"
          title="New Post"
          onSubmit={(data) => addPostCallback(data)}
        />
      </div>
      {posts.length ? (
        <ul className="flex gap-4 flex-wrap justify-start">
          {posts.map((data) => (
            <Post {...data} key={data.id} />
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No posts yet!</div>
      )}
    </div>
  )
}

export default Posts
