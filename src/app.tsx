import React from 'react'

const swapUrl = new URL(
  './resources/swap.png?width=160',
  import.meta.url,
)

const App = () => {
  return (
    <main className="container mx-auto mt-6 px-3 mb-4">
      <img src={swapUrl} alt="swapneel my beloved" />
    </main>
  )
}

export default App
