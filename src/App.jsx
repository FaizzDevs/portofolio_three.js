import Logosection from "./components/Logosection"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Featurecard from "./sections/Featurecard"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Techstack from "./sections/Techstack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (

    // ALL CSS in index.css
    <>
        <Navbar />
        <Hero />
        <Showcase />
        <Logosection />
        <Featurecard />
        <Experience />
        <Techstack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App
