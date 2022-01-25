import React from 'react'
import Introduction from './components/introduction'
import Posts from './components/posts'

const swapUrl = new URL(
  './resources/swap.png?width=160',
  import.meta.url,
)

const App = () => (
  <main className="container mx-auto mt-6 px-3 mb-4">
    {/* @ts-ignore */}
    <img src={swapUrl} alt="swapneel my beloved" />
    <Introduction />
    <Posts />
  </main>
)

export default App
