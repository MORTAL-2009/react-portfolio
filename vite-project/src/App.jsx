import MainLayout from './layouts/MainLayout.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import WorkProcess from './components/WorkProcess.jsx'
import QuoteSection from './components/QuoteSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <MainLayout>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <WorkProcess />
        <QuoteSection />
      </main>
      <Footer />
    </MainLayout>
  )
}

export default App