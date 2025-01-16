import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import one from "../../../public/imgs/galleries1/1.svg"
import two from "../../../public/imgs/galleries1/2.svg"
import three from "../../../public/imgs/galleries1/3.svg"
import four from "../../../public/imgs/galleries1/4.svg"
import five from "../../../public/imgs/galleries1/5.svg"
import six from "../../../public/imgs/galleries1/6.svg"
import seven from "../../../public/imgs/galleries1/7.svg"
import eight from "../../../public/imgs/galleries1/8.svg"
import nine from "../../../public/imgs/galleries1/9.svg"
import ten from "../../../public/imgs/galleries1/10.svg"
import ele from "../../../public/imgs/galleries1/11.svg"
import twe from "../../../public/imgs/galleries1/12.svg"
import third from "../../../public/imgs/galleries1/13.svg"

const Galleries1 = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          ml: 10,
          mt: 30
        }}
      >
        <Typography
          variant="h4"
          component="a"
          fontWeight={700}
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: 700,
            color: "#0E206E"
          }}
        >
          Available Homes
        </Typography>
        <Typography
          component="a"
          fontWeight={300}
          sx={{
            fontFamily: "Lato",
            mt: 6,
            position: "absolute",
            pr: 3,
            mr: 6,
            color: "#0E206E",
            textDecoration: "none",
            textAlign: "center"
          }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an opportunity to build a home.
        </Typography>
      </Box>
      <Grid2
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          mt: 15,

          pl: 5.2,
          pr: 5
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={one}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={two}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={three}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={four}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        flexWrap={"wrap"}
        direction={"column"}
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          mt: 2,
          pl: 5.2,
          height: 350,
          pr: 5
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={five}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
       
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={seven}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={six}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "308px"
            }}
          />
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={2}
        flexWrap={"wrap"}
        direction={"column"}
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          mt:-2,
          pl: 5.2,
          height: 350,
          pr: 5
        }}
      >
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={eight}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "308px"
            }}
          />
        </Grid2>
       
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={twe}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={nine}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "flex", lg: "none" },
          mt: -2,

          pl: 5.2,
          pr: 5
        }}
      >
      
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={ten}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={6}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={ele}
            quality={100}
            priority={true}
            style={{
              width: "163px",
              height: "150px"
            }}
          />
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
          }}
        >
          <Image
            alt="home about"
            src={third}
            quality={100}
            priority={true}
            style={{
              width: "350px",
              height: "150px"
            }}
          />
        </Grid2>
      </Grid2>
    </>
  )
}
export default Galleries1
