import Image from "next/image"
import home1 from "../../../public/imgs/home1.png"
import home2 from "../../../public/imgs/home2.png"
import homecrop from "../../../public/imgs/homecrop.png"
import { Box, Button, Typography } from "@mui/material"
import left from "../../../public/imgs/left.png"
import rigth from "../../../public/imgs/rigth.png"
import homes from "../../../public/imgs/homes.png"

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "flex-end",

          mb: 12
        }}
      >
        <Image
          alt="home about"
          src={home1}
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
            ml: 50,
            mt: 20,
            mr: 125
          }}
        >
          <Typography
            variant="h3"
            noWrap
            component="a"
            fontWeight={700}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", lg: "flex" },
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
            sx={{
              ml: 6,
              mt: 2,
              display: { xs: "none", md: "flex", lg: "flex" },
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
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "center",
          mb: 12
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt: 15,
            p: 5,
            display: { xs: "none", md: "flex", lg: "flex" },
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
            priority={true}
            style={{
              width: "728px",
              height: "620px"
            }}
          />
          <Image
            alt="home about"
            src={rigth}
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
            sx={{
              ml: 6,
              mt: 8,
              p: 5,
              display: { xs: "none", md: "flex", lg: "flex" },
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

      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" }
        }}
      >
        <Image
          alt="home about"
          src={homecrop}
          priority={true}
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            position: "static",
            width: "100%",
            height: "50%",
            filter: "brightness(0.60)"
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: -55
        }}
      >
        <Typography
          variant="h5"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          Pineapple Island:
        </Typography>
        <Typography
          variant="h5"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            mt: 4,
            position: "absolute",
            fontWeight: 700,
            textWrap: "wrap",
            color: "white",
            textDecoration: "none"
          }}
        >
          GenZ and Millenial Abode
        </Typography>

        <Typography
          component="a"
          sx={{
            fontFamily: "Manrope",
            mt: 10,
            position: "absolute",
            ml: 6,
            pr: 5,
            textWrap: "pretty",
            color: "white",
            textDecoration: "none",

            textAlign: "center"
          }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Manrope",
            textTransform: "none",
            color: "black",
            bgcolor: "white",
            mt: 25
          }}
        >
          Get in Touch
        </Button>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 30
        }}
      >
        <Typography
          variant="h4"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 900,
            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",

            textAlign: "center"
          }}
        >
          About <br /> Pineapple Island
        </Typography>
        <Image
          alt="home about"
          src={homes}
          priority={true}
          style={{
            marginTop: "100px",
            paddingLeft: "40px",
            paddingRight: "40px",
            width: "100%",
            height: "80%",
            filter: "brightness(0.60)"
          }}
        />
        <Typography
          component="a"
          sx={{
            fontFamily: "Lato",
            mt: 17,
            position: "absolute",
            ml: 12,
            pr: 10,
            textWrap: "pretty",
            color: "white",
            textDecoration: "none",

            textAlign: "center"
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
    </>
  )
}
export default About
