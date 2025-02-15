import Header from "./components/Header"
import Home from "./components/Home"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import CustomCursor from "./components/CustomCursor"

export default function Page() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Home />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  )
}

