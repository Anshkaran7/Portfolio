import Navbar from '@/Components/Navbar/Navbar'
import { Colorful } from '@/Components/Colourful'
import Intro from '@/Components/Intro'
import SideMail from '@/Components/SideMail'
import { Social } from '@/Components/Social'
import About from '@/Components/About/About'
import Contact from '@/Components/Contact/Contact'
import Experience from '@/Components/Experience/Experience'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App() {
  return (
    <>
    <Analytics/>
    <SpeedInsights/>
      <Navbar />
      <main>
        <div className=' mx-8 md:mx-44 mb-20'>
          <Intro />
          <About />
          <Experience/>
          <Contact />

        </div>

      </main>
      <div>
        <Social />
        <SideMail />
      </div>

      <div className='blurred'></div>
      <Colorful />
    </>
  )
}

