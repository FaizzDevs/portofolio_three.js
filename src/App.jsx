import Logosection from "./components/Logosection"
import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import Featurecard from "./sections/Featurecard"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import Techstack from "./sections/Techstack"

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
    </>
  )
}

export default App
