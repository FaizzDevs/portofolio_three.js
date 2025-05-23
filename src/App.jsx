import Logosection from "./components/Logosection"
import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import Featurecard from "./sections/Featurecard"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"

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
    </>
  )
}

export default App
