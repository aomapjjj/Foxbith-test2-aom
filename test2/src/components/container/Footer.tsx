import { Box, Button, TextField, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import Group from "../../../public/imgs/FrameLogo/Group.svg"
import Image from "next/image"
const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg: "flex" },
          width: "100%",
          height: "396px",
          bgcolor: "#0E204E",
          mt: 10,
          clipPath:
            "polygon(100% 42%, 100% 100%, 96% 100%, 84% 100%, 0 100%, 0 32%, 11% 12%)"
        }}
      >
        <Box
          sx={{
            ml: 70,
            mt: 15,
            width: "270px"
          }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              mb: 2,
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none"
            }}
          >
            Banana <br />
            Island
          </Typography>
          <Typography
            component="a"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty"
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Box>
        <Box
          sx={{
            ml: 20,
            mt: 20,
            width: "270px"
          }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            fontWeight={500}
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              mb: 2,
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none"
            }}
          >
            Follow up
          </Typography>
          <Typography
            component="a"
            sx={{
              fontFamily: "Manrope",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty"
            }}
          >
            Keep up with our newsletter to get updates about projects and offers
          </Typography>
          <TextField
            name="Email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              mt: 2,
              bgcolor: "white",
              width: "419px",
              position: "relative",
              [`& fieldset`]: {
                borderRadius: 0
              },

              [`& label`]: {
                fontFamily: "Manrope"
              }
            }}
          />
          <Button
            variant="text"
            sx={{
              mt: -6,
              ml: 39,
              position: "absolute",
              fontFamily: "Manrope",
              textTransform: "none",
              borderRadius: 0,
              color: "grey"
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          width: "100%",
          height: "100px",
          bgcolor: "#0E204E",
          mt: 5
        }}
      >
        <Box sx={{
          mt:2
        }} >
          <Typography
            variant="h6"
            component="a"
            sx={{
              
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              textAlign: "center"
            }}
          >
            Pineapple Island
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          mt: -6
        }}
      >
        <Box>
          <Image
            alt="copy rigth"
            src={Group}
            priority={true}
            style={{
              marginLeft: 35,
              
              width: "16px",
              height: "16px"
            }}
          />
          <Typography
            component="a"
            sx={{
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",
              textWrap: "pretty",
              textAlign: "center",
              ml: 1,
              mt: 1
            }}
          >
            Copyright 2021 Glowdsgn All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </>
  )
}
export default Footer
