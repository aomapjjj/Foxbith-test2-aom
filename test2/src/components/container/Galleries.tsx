import {
  Box,
  Grid2,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography
} from "@mui/material"
import one from "../../../public/imgs/galleries/1.png"
import two from "../../../public/imgs/galleries/2.png"
import three from "../../../public/imgs/galleries/3.png"
import four from "../../../public/imgs/galleries/4.png"
import five from "../../../public/imgs/galleries/5.png"
import six from "../../../public/imgs/galleries/6.png"
import seven from "../../../public/imgs/galleries/7.png"
import eight from "../../../public/imgs/galleries/8.png"
import nine from "../../../public/imgs/galleries/9.png"
import Image from "next/image"
import Galleries1 from "./Galleries1"

const Galleries = () => {
  return (
    <>

      <Typography
        variant="h3"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
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
        Galleries
      </Typography>
      <Typography
        noWrap
        component="a"
        sx={{
          ml: 6,
          mt: 4,
          display: { xs: "none", md: "flex", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "stable",
          justifyContent: "center"
        }}
      >
        a community that gives you a taste of happiness, a place you’ll love to
        live and
      </Typography>
      <Typography
        noWrap
        component="a"
        sx={{
          ml: 6,
          display: { xs: "none", md: "flex", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "stable",
          justifyContent: "center"
        }}
      >
        an opportunity to build a home.
      </Typography>

      <Grid2
        sx={{
          display: { sm: "none", md: "flex", lg: "flex", gap: 30 },
          justifyContent: "center",
          mt: 4
        }}
      >
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={one}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={two}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={three}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          display: { sm: "none", md: "flex", lg: "flex", gap: 30 },
          justifyContent: "center",
          mt: 4
        }}
      >
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={four}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={five}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={six}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
      </Grid2>
      <Grid2
        sx={{
          display: { sm: "none", md: "flex", lg: "flex", gap: 30 },
          justifyContent: "center",
          mt: 4
        }}
      >
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={seven}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={eight}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
        <Grid2
          size={4}
          sx={{
            display: { xs: "none", md: "flex", lg: "flex" }
          }}
        >
          <Image
            alt="home about"
            src={nine}
            priority={true}
            style={{
              width: "553px",
              height: "469px"
            }}
          />
        </Grid2>
      </Grid2>

  
    </>
  )
}
export default Galleries
