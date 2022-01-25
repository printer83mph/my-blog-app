import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIntro } from '../actions/intro-actions'
import { RootState } from '../reducers'

const Introduction = () => {
  const dispatch = useDispatch()
  const intro = useSelector((state: RootState) => state.intro)

  // TODO: edit form

  return (
    <div className="mb-12">
      <div className="flex items-center">
        <h2 className="text-4xl font-black mr-4">Introduction</h2>
        <button type="button" className="rounded bg-blue-600 text-white px-4 py-1">Edit</button>
        {/* TODO: modal (refactor the bit from post-edit) */}
      </div>
      <div className="">
        Description:
        {' '}
        {intro.description}
      </div>
      <button type="button" onClick={() => dispatch(updateIntro('https://google.com/', 'Hello!'))}>
        Set to &quot;funny&quot;
      </button>
    </div>
  )
}

export default Introduction
