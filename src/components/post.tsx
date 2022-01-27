import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { updatePost, removePost } from '../actions/posts-actions'
import { IdentifiedPostData, PostData } from '../types'
import PostEdit from './post-edit'

const Post = (props: IdentifiedPostData) => {
  const { title, body, image, id } = props
  const dispatch = useDispatch()

  const modifyPostCallback = useCallback(
    (data: PostData) => dispatch(updatePost(id, data)),
    [dispatch, id]
  )

  const removePostCallback = useCallback(
    () => dispatch(removePost(id)),
    [dispatch, id]
  )

  return (
    <li
      className="rounded-xl border-[1px] border-gray-300
        p-4 w-[350px] min-w-[350px] self-start"
    >
      <div
        className="aspect-square rounded bg-center bg-cover mb-3 mx-auto"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h4 className="font-black text-2xl mb-1">{title}</h4>
      <p className="text-gray-800 mb-2">{body}</p>
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-gray-400 mr-3">id: {id}</div>
        <PostEdit
          buttonText="Edit"
          onSubmit={modifyPostCallback}
          onRemove={removePostCallback}
          defaultValues={props}
        />
      </div>
    </li>
  )
}

export default Post
