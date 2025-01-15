import { Box, Button, Grid2, Paper, Typography } from "@mui/material"
import Image from "next/image"
import Chair from "../../../public/imgs/Chair.png"
import Women from "../../../public/imgs/Women.png"
import Table from "../Table"

const Project = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none",  md:"none" , lg: "flex" },
          ml: 10
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none",  md:"none" , lg: "flex" },
            mb: 10
          }}
        >
          <Grid2
            size={6}
            sx={{
              display: { sm: "none",  md:"none" , lg: "flex" },
              mt: 20
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
                src={Chair}
                quality={100}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "484px",
                  height: "725px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
            <Grid2 size={6}>
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  mb: 3,
                  ml: 20,
                  display: { xs: "none",  md:"none" , lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
                
              >
                Amazing Features
              </Typography>
              <Table />
            </Grid2>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          display: { xs: "none",  md:"none" , lg: "flex" },
          ml: 10,
          mb:30
        }}
      >
        <Grid2
          sx={{
            display: { sm: "none",  md:"none" , lg: "flex" },
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
            <Box
              sx={{
                
                ml: 20,
                width: "512px",
                height: "258px"
              }}
            >
              <Typography
                variant="h2"
                noWrap
                component="a"
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none",  md:"none" , lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                noWrap
                component="a"
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center"
                }}
              >
                a community that gives you a taste of <br /> happiness, a place
                you’ll love to live and an
                <br /> opportunity to build a home.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  fontSize: "17px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E",
                  mt: 4,
                  display: {
                    xs: "none",
                     md:"none" , lg: "flex",

                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
          </Grid2>
          <Grid2
            size={6}
            sx={{
              display: { sm: "none",  md:"none" , lg: "flex" },
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
                src={Women}
                quality={100}
                priority={true}
                style={{
                  margin: 50,
                  marginLeft: "200px",
                  width: "552px",
                  height: "725px",
                  marginTop: "-500px",
                  position: "absolute"
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}
export default Project
