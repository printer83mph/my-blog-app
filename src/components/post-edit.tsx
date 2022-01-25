import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { PostData } from '../types'

interface PostEditProps {
  buttonText: string,
  submitButtonText?: string,
  title?: string,
  onSubmit: (data: PostData) => void,
  defaultValues?: PostData,
  resetValues?: boolean,
  className?: string
}

const PostEdit = ({
  buttonText, submitButtonText, title, onSubmit, className, defaultValues,
  resetValues = true,
}: PostEditProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register, reset } = useForm({ defaultValues })

  // wrapper for onSubmit
  const onFormSubmit = (data) => {
    onSubmit(data)
    setIsOpen(false)
  }

  const closeDialog = () => {
    setIsOpen(false)
    if (resetValues) reset()
  }

  return (
    <>
      <Dialog open={isOpen} onClose={() => closeDialog()}>
        <Dialog.Title>{title || 'Edit Post'}</Dialog.Title>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" {...register('title')} placeholder="Post Title" />
          <input type="text" {...register('body')} placeholder="Your post here..." />
          <input type="text" {...register('image')} placeholder="Your funny image url here!" />
          <button type="submit">
            {submitButtonText || 'Submit'}
          </button>
        </form>
      </Dialog>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`rounded bg-blue-600 text-white px-4 py-1 ${className || ''}`}
      >
        {buttonText}
      </button>
    </>
  )
}

export default PostEdit
