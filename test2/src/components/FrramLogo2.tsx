import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import Light from "../../public/imgs/FrameLogo/Light.svg"
import Lock from "../../public/imgs/FrameLogo/Lock.svg"
import Money from "../../public/imgs/FrameLogo/Money.svg"
import System from "../../public/imgs/FrameLogo/System.svg"
import Tree from "../../public/imgs/FrameLogo/Tree.svg"
import Network from "../../public/imgs/FrameLogo/Network.svg"

const FrramLogo2 = () => {
  return (
    <>
      <Grid2
        container
        spacing={{ xs: 3, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{
          mt: 3,
          ml: 4,
          justifyContent: "center"
        }}
      >
        <Grid2 size={4}>
          <Image
            alt="home about"
            src={Tree}
            priority={true}
            style={{
              marginLeft: 4,
              width: "32px",
              height: "32px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
              pl: 2,
               textAlign:"center"
            }}
          >
            Eco Friendly
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Image
            alt="home about"
            src={Network}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
               textAlign:"center"
            }}
          >
            Smart Homes
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Image
            alt="home about"
            src={Money}
            priority={true}
            style={{
              width: "32px",
              height: "32px",
              marginLeft: 4,
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
               textAlign:"center"
            }}
          >
            Good Rates
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Image
            alt="home about"
            src={System}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
               textAlign:"center"
            }}
          >
            Serviced Apartment
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Image
            alt="home about"
            src={Lock}
            priority={true}
            style={{
              width: "32px",
              height: "32px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
               textAlign:"center"

            }}
          >
            Private Security
          </Typography>
        </Grid2>

        <Grid2 size={4} sx={{
            pr:2
        }}>
          <Image
            alt="home about"
            src={Light}
            priority={true}
            style={{
              marginLeft: 4,
              width: "32px",
              height: "32px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Poppins",
              color: "white",
              textAlign:"center",
            }}
          >
            24/7 Electricity
          </Typography>
        </Grid2>
      </Grid2>
    </>
  )
}
export default FrramLogo2
