import About from "@/components/container/About"
import Navbar from "@/components/Navbar"
import WhatWeDo from "@/components/container/WhatWeDo"
import Galleries from "@/components/container/Galleries"
import Project from "@/components/container/Project"
import Contact from "@/components/container/Contact"
import Footer from "@/components/container/Footer"

const index = () => {
  return (
    <>
      <Navbar />
      <About />
      <WhatWeDo />
      <Galleries />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}
export default index
