import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import room from "../../../public/imgs/room.png"
import garden1 from "../../../public/imgs/garden1.png"
import garden2 from "../../../public/imgs/garden2.png"
import livingroom from "../../../public/imgs/livingroom.png"
import FrameLogo from "../FrameLogo"
import FrameLogo1 from "../FrameLogo1"
import FrramLogo2 from "../FrramLogo2"

const WhatWeDo = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          width: "1920px",
          height: "708px",
          bgcolor: "#0E204E",

          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt: 30,
            p: 6,
            ml: 20,
            display: { xs: "none", md: "none", lg: "flex" },
            fontFamily: "Playfair Display",
            color: "white",
            textDecoration: "none",
            textWrap: "wrap"
          }}
        >
          Why
          <br /> Choose
          <br /> Pineapple <br />
          Island
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          ml: 70,
          mt: -75,

          position: "absolute"
        }}
      >
        <Box
          sx={{
            boxShadow: 2,
            width: "477px",
            height: "634px",
            bgcolor: "white"
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: 6,
              mt: 12,
              p: 7,
              display: { xs: "none", md: "none", lg: "flex" },
              fontFamily: "Manrope",
              color: "#0E204E",
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
        <Image
          alt="home about"
          src={room}
          quality={100}
          priority={true}
          style={{
            width: "709px",
            height: "634px"
          }}
        />
      </Box>
      <Typography
        variant="h3"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        fontWeight={700}
        sx={{
          mr: 2,
          mt: 20,
          display: { xs: "none", md: "none", lg: "flex" },
          justifyContent: "center",
          fontFamily: "Playfair Display",
          fontWeight: 700,
          color: "#0E204E",
          textDecoration: "none"
        }}
      >
        What Pineapple Land Offers
      </Typography>
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          ml: 10
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none", md: "none", lg: "flex" },
            mb: 10
          }}
        >
          <Grid2
            size={6}
            sx={{
              display: { sm: "none", md: "none", lg: "flex" },
              m: 10
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "412px",
                  height: "358px",
                  bgcolor: "#0E204E",
                  py: 10,
                  ml: 50,
                  mt: 20
                }}
              ></Box>
              <Image
                alt="home about"
                src={garden1}
                quality={100}
                priority={true}
                style={{
                  margin: 50,
                  width: "567px",
                  height: "582px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid2>
          <Grid2
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <FrameLogo />
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          ml: 10
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none", md: "none", lg: "flex" },
            mb: 10
          }}
        >
          <Grid2
            size={6}
            sx={{
              justifyContent: "end",
              alignContent: "center"
            }}
          >
            <FrameLogo1 />
          </Grid2>
          <Grid2
            size={6}
            sx={{
              display: { sm: "none", md: "none", lg: "flex" },
              m: 10
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "412px",
                  height: "358px",
                  bgcolor: "#0E204E",
                  py: 10,

                  mt: 20
                }}
              ></Box>
              <Image
                alt="home about"
                src={garden2}
                quality={100}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "567px",
                  height: "582px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Typography
          variant="h6"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 900,
            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",
            letterSpacing: 2,
            textAlign: "center"
          }}
        >
          Why Choose <br /> Pineapple Island
        </Typography>

        <Typography
          component="a"
          sx={{
            fontFamily: "Lato",
            mt: 10,
            position: "absolute",
            ml: 6,
            pr: 6,
            textWrap: "pretty",
            color: "#0E204E",
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
        <Image
          alt="home about"
          src={livingroom}
          quality={100}
          priority={true}
          style={{
            marginTop: "300px",
            paddingLeft: "40px",
            paddingRight: "40px",
            width: "100%",
            height: "80%"
          }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        {" "}
        <Typography
          variant="h6"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            position: "absolute",
            fontWeight: 900,
            textWrap: "wrap",
            color: "#0E204E",
            textDecoration: "none",
            letterSpacing: 2,
            textAlign: "center"
          }}
        >
          Pineapple Island Offers
        </Typography>
        <Image
          alt="home about"
          src={garden1}
          quality={100}
          priority={true}
          style={{
            padding: "30px",
            marginTop: 50,
            width: "100%",
            height: "387px",
            objectFit: "cover",
            position: "relative"
          }}
        />
        <Box
          bgcolor="#0E204E"
          sx={{
            position: "absolute",
            width: "320px",
            height: "247px",
            mt: 47,
            display: { xs: "flex", md: "flex", lg: "none" },
            justifyContent: "center"
          }}
        >
          <FrramLogo2 />
        </Box>
      </Box>
    </>
  )
}
export default WhatWeDo
