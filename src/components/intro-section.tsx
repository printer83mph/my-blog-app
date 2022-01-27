import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'
import IntroEdit from './intro-edit'

const swapUrl = new URL('../resources/swap.png?width=160', import.meta.url)

const Introduction = () => {
  const intro = useSelector((state: RootState) => state.intro)

  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <h2 className="text-4xl font-black mr-4">Introduction</h2>
        <IntroEdit />
      </div>
      <div className="flex items-center">
        <div
          className="aspect-square w-40 bg-cover bg-center rounded relative mr-3"
          style={{ backgroundImage: `url(${intro.image || swapUrl})` }}
        >
          {intro.image ? null : (
            <div
              className="absolute inset-0 bg-white/80 tracking-wide flex
                justify-center items-center text-gray-500"
            >
              (placeholder swap)
            </div>
          )}
        </div>
        <div>{intro.description || 'No description found!'}</div>
      </div>
    </div>
  )
}

export default Introduction
