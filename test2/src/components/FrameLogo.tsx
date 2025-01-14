import Tree from "./../../public/imgs/Tree.png"
import Wifi from "./../../public/imgs/Wifi.png"
import Money from "./../../public/imgs/Money.png"
import Image from "next/image"
import { Box } from "@mui/material"

const FrameLogo = () => {
  return (
    <>
      <Box >
        <Image
          alt="home about"
          src={Tree}
          quality={100}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "107px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Wifi}
          quality={100}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "107px",
            height: "157px"
          }}
        />
        <Image
          alt="home about"
          src={Money}
          quality={100}
          priority={true}
          style={{
            marginLeft: "80px",
            width: "107px",
            height: "157px"
          }}
        />
      </Box>
    </>
  )
}
export default FrameLogo
