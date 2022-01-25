import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiX } from 'react-icons/hi'

import { PostData } from '../types'
import FloatingDialog from './floating-dialog'

interface PostEditProps {
  buttonText: string,
  submitButtonText?: string,
  title?: string,
  onSubmit: (data: PostData) => void,
  onRemove?: () => void,
  defaultValues?: PostData,
  resetValues?: boolean,
  className?: string
}

const inputClassName = 'w-full p-2 rounded border-[1px] border-gray-300'

const PostEdit = ({
  buttonText, submitButtonText, title, onSubmit, onRemove, className, defaultValues,
  resetValues = true,
}: PostEditProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register, reset } = useForm({ defaultValues })

  // reset values (maybe) on close
  const closeDialog = () => {
    setIsOpen(false)
    if (resetValues) reset()
  }

  // wrapper for onSubmit
  const onFormSubmit = (data) => {
    onSubmit(data)
    closeDialog()
  }

  return (
    <>
      <FloatingDialog
        isOpen={isOpen}
        onClose={closeDialog}
      >
        <Dialog.Title className="text-2xl font-bold mb-4">{title || 'Edit Post'}</Dialog.Title>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            type="text"
            {...register('title', { required: true })}
            placeholder="Post Title"
            className={`${inputClassName} mb-2`}
          />
          <textarea
            rows={3}
            {...register('body', { required: true })}
            placeholder="Your post here..."
            className={`${inputClassName} mb-1`}
          />
          <input
            type="url"
            {...register('image', { required: true })}
            placeholder="Your funny image url here!"
            className={`${inputClassName} mb-4`}
          />
          <div className="flex justify-between">
            {onRemove ? (
              <button
                type="button"
                className="block mr-5 rounded border-red-600 border-[1px]
                    hover:bg-red-600 text-red-600 hover:text-white px-4 py-1"
                onClick={onRemove}
              >
                Remove
              </button>
            ) : <div />}
            <div className="flex items-center">
              <button type="submit" className="block mr-2 rounded bg-blue-600 text-white px-4 py-1">
                {submitButtonText || 'Submit'}
              </button>
              <button type="button" className="block text-gray-500" onClick={closeDialog}>
                <HiX />
              </button>
            </div>
          </div>
        </form>
      </FloatingDialog>
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
