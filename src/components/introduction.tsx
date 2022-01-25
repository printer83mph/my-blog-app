import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIntro } from '../actions/intro-actions'
import { RootState } from '../reducers'

const Introduction = () => {
  const dispatch = useDispatch()
  const intro = useSelector((state: RootState) => state.intro)

  return (
    <div>
      <div>
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
