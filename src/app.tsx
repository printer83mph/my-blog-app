import React from 'react'
import Introduction from './components/intro-section'
import Posts from './components/posts-section'

const App = () => (
  <main className="container mx-auto mt-6 px-3 mb-4">
    {/* @ts-ignore */}
    <Introduction />
    <Posts />
  </main>
)

export default App
