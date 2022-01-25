import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiX } from 'react-icons/hi'

import { PostData } from '../types'

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
      {/* TODO: refactor dialog to its own component baby */}
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        {/* container */}
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          {/* actual dialog */}
          <div className="relative bg-white rounded-xl max-w-sm mx-auto p-5 shadow-md">
            <div className="flex items-start mb-4">
              <Dialog.Title className="text-2xl font-bold">{title || 'Edit Post'}</Dialog.Title>
            </div>
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
          </div>
        </div>
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
