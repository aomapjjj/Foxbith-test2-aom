import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import room from "../../../public/imgs/room.png"
import garden1 from "../../../public/imgs/garden1.png"

const WhatWeDo = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "1920px",
          height: "708px",
          bgcolor: "#0E204E",
          position: "relative",

          clipPath:
            "polygon(50% 0%, 100% 0, 100% 100%, 84% 93%, 60% 80%, 0 100%, 0 0)"
        }}
      >
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          fontWeight={700}
          sx={{
            mt: 15,
            p: 6,
            display: { xs: "none", md: "flex" },
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
          display: { xs: "none", md: "flex" },
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
              display: { xs: "none", md: "flex" },
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

      <Box
        sx={{
          mt: 30,
          mb: 5,
          display: { xs: "none", md: "flex" },
          justifyContent: "center"
        }}
      >
        <Grid2 >
          <Grid2 size={{ xs: 6, md: 8 }}>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              fontWeight={700}
              sx={{
                mr: 2,
                mb:4,
                display: { xs: "flex", md: "flex" },
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "#0E204E",
                textDecoration: "none"
              }}
            >
              What Pineapple Land Offers
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
          <Box
            sx={{
            
              justifyContent: "start"
            }}
          >
            <Image
              alt="home about"
              src={garden1}
              quality={100}
              priority={true}
              style={{
                width: "567px",
                height: "582px"
              }}
            />
          </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}
export default WhatWeDo
