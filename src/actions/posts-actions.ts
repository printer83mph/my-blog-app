import { PostData } from '../types'

export const addPost = (content: PostData) => ({
  type: 'posts/added',
  payload: { content },
})

export const removePost = (id: string) => ({
  type: 'posts/removed',
  payload: { id },
})

export const updatePost = (id: string, content: PostData) => ({
  type: 'posts/updated',
  payload: { id, content },
})
