import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, updatePost } from '../actions/posts-actions'
import { RootState } from '../reducers'
import { IdentifiedPostData, PostData } from '../types'
import PostEdit from './post-edit'

const Post = (props: IdentifiedPostData) => {
  const {
    title, body, image, id,
  } = props
  const dispatch = useDispatch()

  const modifyPostCallback = useCallback(
    (data: PostData) => dispatch(updatePost(id, data)),
    [dispatch, id],
  )

  return (
    <li className="rounded-xl border-[1px] border-gray-300 p-4 w-[350px]">
      <div
        className="aspect-square rounded bg-center bg-cover mb-3 mx-auto"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h4 className="font-black text-2xl mb-1">{title}</h4>
      <p className="text-gray-800 mb-2">{body}</p>
      {/* TODO: image */}
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-gray-400 mr-3">
          id:
          {' '}
          {id}
        </div>
        <PostEdit
          buttonText="Edit"
          onSubmit={modifyPostCallback}
          defaultValues={props}
        />
      </div>
    </li>
  )
}

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts)

  const addPostCallback = useCallback(
    (data: PostData) => dispatch(addPost(data)),
    [dispatch],
  )

  return (
    <div>
      <div>
        <h2>Posts</h2>
        <PostEdit buttonText="New Post" onSubmit={(data) => addPostCallback(data)} />
      </div>
      <ul className="flex gap-4">
        {posts.map((data) => (<Post {...data} key={data.id} />)) }
      </ul>
    </div>
  )
}

export default Posts
