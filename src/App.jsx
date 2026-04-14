import { useState } from 'react'
import './App.css'
import { Share } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <button></button>
      <button>❤️</button>
      <button><Share />
</button>
    </header>
  <main>
    
  </main>
    </>
  )
}


