import Navbar from '@/Components/Navbar/Navbar'
import { Colorful } from '@/Components/Colourful'
import Intro from '@/Components/Intro'
import SideMail from '@/Components/SideMail'
import { Social } from '@/Components/Social'
import About from '@/Components/About/About'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className=' mx-8 md:mx-44'>
        <Intro />
        <About/>

        </div>
        
      </main>
      <div>
        <Social/>
        <SideMail/>
      </div>
      
      <div className='blurred'></div>
      <Colorful />
    </>
  )
}

