import Navbar from '@/Components/Navbar/Navbar'
import { Colorful } from '@/Components/Colourful'
import Intro from '@/Components/Intro'
import SideMail from '@/Components/SideMail'
import { Social } from '@/Components/Social'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        
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

