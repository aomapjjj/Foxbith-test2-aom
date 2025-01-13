import Image from "next/image"
import home1 from "../../../public/imgs/home1.png"
import home2 from "../../../public/imgs/home2.png"
import { Box, Typography } from "@mui/material"
import left from "../../../public/imgs/left.png"
import rigth from "../../../public/imgs/rigth.png"

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          ml: 4,
          mb: 12
        }}
      >
        <Image
          alt="home about"
          src={home1}
          quality={100}
          priority={true}
          style={{
            position: "relative",
            width: "1368px",
            height: "717px"
          }}
        />
        <Box
          sx={{
            width: "650px",
            height: "400px",
            bgcolor: "#0E204E",
            py: 10,
            position: "absolute",
            ml: 4,
            mt: 20,
            mr: 125
          }}
        >
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 700,
              color: "white",
              textDecoration: "none",
              justifyContent: "center",
              alignContent: "center",
              letterSpacing: 2
            }}
          >
            Pineapple Island: <br /> GenZ and Millenial <br /> Abode
          </Typography>
          <Typography
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 6,
              mt: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              justifyContent: "center"
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to <br />
            live and an opportunity to build a home.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",

          mb: 12
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mt: 15,
            p: 5,
            display: { xs: "none", md: "flex" },
            fontFamily: "Playfair Display",
            color: "#0E204E",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          About
          <br /> Pineapple <br />
          Island
        </Typography>
        <Box>
          <Image
            alt="home about"
            src={left}
            quality={100}
            priority={true}
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              marginTop: "300px"
            }}
          />
          <Image
            alt="home about"
            src={home2}
            quality={100}
            priority={true}
            style={{
              width: "728px",
              height: "620px"
            }}
          />
          <Image
            alt="home about"
            src={rigth}
            quality={100}
            priority={true}
            style={{
              width: "40px",
              height: "40px",
              marginTop: "300px",
              marginLeft: "-40px",
              position: "absolute"
            }}
          />
        </Box>

        <Box
          sx={{
            width: "433px",
            height: "620px",
            bgcolor: "#0E204E"
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 6,
              mt: 8,
              p: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "wrap"
            }}
          >
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default About
