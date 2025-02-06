import Image from "next/image"
import home1 from "../../../public/imgs/home1.png"
import home2 from "../../../public/imgs/home2.png"
import homecrop from "../../../public/imgs/homecrop.png"
import { Box, Button, Grid2, Typography } from "@mui/material"
import left from "../../../public/imgs/left.png"
import rigth from "../../../public/imgs/rigth.png"
import homes from "../../../public/imgs/homes.png"

const About = () => {
  return (
    <>
      <Grid2 container columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        <Grid2 size={12}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "flex-end",
              pl: "500px"
            }}
          >
            <Image
              alt="home about"
              src={home1}
              priority={true}
              style={{
                width: "100%",
                height: "720px",
                objectFit: "cover",
               
              }}
            />
          </Box>
        </Grid2>
        <Grid2 size={12}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              pl: "100px",
              mt: -74
            }}
          >
            <Box
              sx={{
                width: "786px",
                height: "496px",
                bgcolor: "#0E204E",
                py: 10
              }}
            >
              <Typography
                variant="h2"
                noWrap
                fontWeight={700}
                sx={{
                  display: { xs: "none", md: "flex", lg: "flex" },
                  pl: 10,
                  fontFamily: "Playfair Display",
                  color: "white",
                  textDecoration: "none",
                  letterSpacing: 2
                }}
              >
                Pineapple Island: <br /> GenZ and Millenial <br /> Abode
              </Typography>
              <Typography
                variant="h6"
                noWrap
                fontWeight={200}
                sx={{
                  mt: 2,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Manrope",
                  color: "white",
                  textDecoration: "none",
                  justifyContent: "center"
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to <br />
                live and an opportunity to build a home.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          justifyContent: "center",
          mb: 12
        }}
      >
        <Box>
          <Typography
            variant="h2"
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
        </Box>

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

      {/* ส่วน mobile */}
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
            position: "relative",
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
          mt: 25,
          mb: 4
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",

            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",
            textAlign: "center"
          }}
        >
          About <br /> Pineapple Island
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",

          mb: 4
        }}
      >
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
