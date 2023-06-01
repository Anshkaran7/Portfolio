import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/Components/Navbar/Navbar'
import { Colorful } from '@/Components/Colourful'


export default function App() {
  return (
   <>
   <Navbar/>
   <main>

   </main>
   <div className='blurred'></div>
   <Colorful/>
   </>
  )
}
