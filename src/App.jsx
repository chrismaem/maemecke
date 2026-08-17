
import Navbar from './components/Navbar'
// import DotNav from './components/DotNav'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InfiniteGrid from './components/InfiniteGrid'
// import BackToTop from './components/BackToTop'
import ScrollProgressRing from './components/ScrollProgressRing'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <DotNav /> */}
      <ScrollProgressRing />
      {/* Infinite grid background */}
      <InfiniteGrid />

      {/* Global gradient blobs - scattered across the full page */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-[2%] right-[10%] w-[700px] h-[700px] opacity-60 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[8%] left-[0%] w-[650px] h-[650px] opacity-55 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[22%] right-[-5%] w-[700px] h-[700px] opacity-55 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[35%] left-[5%] w-[750px] h-[750px] opacity-60 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[48%] right-[15%] w-[650px] h-[650px] opacity-55 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[60%] left-[10%] w-[700px] h-[700px] opacity-55 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, #c084fc 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[72%] right-[0%] w-[750px] h-[750px] opacity-60 dark:opacity-35"
          style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="absolute top-[85%] left-[-5%] w-[650px] h-[650px] opacity-55 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Clients />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      {/* <BackToTop /> */}
    </div>
  )
}
