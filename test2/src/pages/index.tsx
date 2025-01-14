import About from "@/components/container/About"
import Navbar from "../components/Navbar"
import WhatWeDo from "@/components/container/WhatWeDo"
import Galleries from "@/components/container/Galleries"

const index = () => {
  return (
    <div>
      <Navbar />
      <About />
      <WhatWeDo />
      <Galleries />
    </div>
  )
}
export default index
