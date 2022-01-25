import { Dialog } from '@headlessui/react'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { HiX } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { updateIntro } from '../actions/intro-actions'
import { RootState } from '../reducers'

import FloatingDialog from './floating-dialog'

const inputClassName = 'w-full p-2 rounded border-[1px] border-gray-300'

const IntroEdit = () => {
  const intro = useSelector((state: RootState) => state.intro)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const { register, handleSubmit, reset } = useForm({ defaultValues: intro })

  const updateCallback = useCallback((data) => dispatch(updateIntro(data)), [dispatch])

  const openDialog = () => {
    reset(intro)
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
    reset()
  }

  const onFormSubmit = (data) => {
    updateCallback(data)
    closeDialog()
  }

  return (
    <>
      <FloatingDialog isOpen={isOpen} onClose={closeDialog}>
        <Dialog.Title className="text-2xl font-bold mb-4">Edit Introduction</Dialog.Title>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="url" {...register('image', { required: true })} placeholder="Splash image URL here" className={`${inputClassName} mb-2`} />
          <input type="text" {...register('description', { required: true })} placeholder="Blog description..." className={`${inputClassName} mb-4`} />
          <div className="flex items-center justify-end">
            <button type="submit" className="block mr-2 rounded bg-blue-600 text-white px-4 py-1">
              Submit
            </button>
            <button type="button" className="block text-gray-500" onClick={closeDialog}>
              <HiX />
            </button>
          </div>
        </form>
      </FloatingDialog>
      <button
        type="button"
        onClick={openDialog}
        className="rounded bg-blue-600 text-white px-4 py-1"
      >
        Edit
      </button>
    </>
  )
}

export default IntroEdit
