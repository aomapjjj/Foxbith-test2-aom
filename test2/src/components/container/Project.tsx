import { Box, Button, Grid2, Paper, Typography } from "@mui/material"
import Image from "next/image"
import Chair from "../../../public/imgs/Chair.png"
import Women from "../../../public/imgs/Women.png"
import Table from "../Table"

const Project = () => {
  return (
    <>
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={24}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          py: "250px",
          px: "250px",
          justifyContent: "center"
        }}
      >
        <Grid2 size={6}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              justifyContent: "center"
            }}
          >
            <Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                    width: "100%",
                    justifyContent: "flex-end"
                  }
                }}
              >
                <Box
                  sx={{
                    width: "500px",
                    height: "445px",
                    bgcolor: "#0E204E"
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    lg: "flex",
                    width: "100%",
                    justifyContent: "flex-end"
                  }
                }}
              >
                <Image
                  alt="home about"
                  src={Chair}
                  priority={true}
                  style={{
                    marginTop: "-650px",
                    marginRight: "100px",
                    width: "484px",
                    height: "1000px",
                    objectFit: "cover"
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={4}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                width: "100%",
                justifyContent: "center"
              }
            }}
          >
            <Box>
              <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap"
                }}
              >
                Amazing Features
              </Typography>
              <Table />
            </Box>
          </Box>
        </Grid2>
      </Grid2>

      {/* women */}
      <Grid2
        container
        columnSpacing={{ xs: 1, sm: 3, md: 3 }}
        gap={4}
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          px: "100px",
          justifyContent: "center"
        }}
      >
        <Grid2 size={4}>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                lg: "flex",
                width: "100%",
                justifyContent: "center"
              }
            }}
          >
            <Box>
              <Typography
                fontWeight={700}
                sx={{
                  mb: 3,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "wrap",
                  fontSize: "60px"
                }}
              >
                Become an
                <br /> Agent
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Manrope",
                  color: "#0E204E",
                  textDecoration: "none",
                  textWrap: "pretty",
                  justifyContent: "center",
                  fontSize: "20px"
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
                    md: "flex",
                    lg: "flex",

                    width: "239px",
                    height: "62px"
                  }
                }}
              >
                Join Now
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={6}>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" }
            }}
          >
            <Box
              sx={{
                width: "500px",
                height: "445px",
                bgcolor: "#0E204E"
              }}
            ></Box>

            <Image
              alt="home about"
              src={Women}
              priority={true}
              style={{
                marginTop: "-150px",
                marginRight: "100px",
                width: "484px",
                height: "725px",
                objectFit: "cover"
              }}
            />
          </Box>
        </Grid2>
      </Grid2>

      
    </>
  )
}
export default Project
