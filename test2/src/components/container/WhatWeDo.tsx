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
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "1920px",
          height: "708px",
          bgcolor: "#0E204E",

          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
        }}
      >
        <Typography
          variant="h3"
          noWrap
          component="a"
          fontWeight={700}
          sx={{
            mt: 30,
            p: 6,
            ml: 20,
            display: { xs: "none", md: "flex", lg: "flex" },
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
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 70,
          mt: -75,
          position: "absolute"
        }}
      >
        <Box
          sx={{
            boxShadow: 2,
            width: "477px",
            bgcolor: "white",
            display: { xs: "none", md: "flex", lg: "flex" },
            alignItems: "center",
            px: 10
          }}
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                fontFamily: "Manrope",
                color: "#0E204E",
                textDecoration: "none",
                textWrap: "wrap"
              }}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Box>
        </Box>
        <Image
          alt="home about"
          src={room}
          priority={true}
          style={{
            width: "80%",
            height: "634px"
          }}
        />
      </Box>
      <Typography
        variant="h3"
        noWrap
        component="a"
        fontWeight={700}
        sx={{
          mr: 2,
          mt: 20,
          display: { xs: "none", md: "flex", lg: "flex" },
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
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 10
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            mb: 10
          }}
        >
          <Grid2
            size={6}
            sx={{
              display: { sm: "none", md: "flex", lg: "flex" },
              m: 10
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "412px",
                  height: "358px",
                  bgcolor: "#0E204E",
                  position: "relative",
                  py: 10,
                  ml: 50,
                  mt: 20
                }}
              ></Box>
              <Image
                alt="home about"
                src={garden1}
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
          display: { xs: "none", md: "flex", lg: "flex" },
          ml: 10
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
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
              display: { sm: "none", md: "flex", lg: "flex" },
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
                  position: "relative",
                  mt: 20
                }}
              ></Box>
              <Image
                alt="home about"
                src={garden2}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "568px",
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
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              letterSpacing: 2,
              textAlign: "center"
            }}
          >
            Why Choose <br /> Pineapple Island
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Lato",
              ml: 6,
              pr: 6,
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              textAlign: "center",
              pb: 3
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
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          
        }}
      >
        <Box>
          <Image
            alt="home about"
            src={livingroom}
            priority={true}
            style={{
              width: "100%"
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: 5
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              fontFamily: "Playfair Display",
              textWrap: "wrap",
              color: "#0E204E",
              textDecoration: "none",
              textAlign: "center",
              mb: 4
            }}
          >
            Pineapple Island Offers
          </Typography>
          <Image
            alt="home about"
            src={garden1}
            priority={true}
            style={{
              width: "100%",
              height: "387px"
            }}
          />

          <Box
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              justifyContent: "center",
              mt: -4,
              mb: 4
            }}
          >
            <Box
              bgcolor="#0E204E"
              sx={{
                width: "320px",
                height: "247px"
              }}
            >
              <FrramLogo2 />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default WhatWeDo
