import Image from 'next/image'
import Home from './home/page'
import About from './about/page'
import Work from './work/page'
import Navbar from '@/components/navbar/page'

export default function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
    </main>
  )
}
