import {
  Box,
  Button,
  FormLabel,
  Grid2,
  TextField,
  Typography
} from "@mui/material"

const Contact = () => {
  return (
    <>

      <Box>
        <Grid2
          sx={{
            display: { sm: "none", md: "flex", lg: "flex" },
            justifyContent: "center",
            mt: 5,
            ml: 20
          }}
          container
        >
          <Box>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#0E204E",
                  textDecoration: "none"
                }}
              >
                Stay In Touch
              </Typography>
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                justifyContent: "center"
              }}
            >
              <Typography
                fontWeight={300}
                sx={{
                  my: 3,
                  fontFamily: "Lato",
                  color: "#0E204E",
                  
                  textDecoration: "none",
                  textAlign: "center"
                }}
              >
                If you are interested in finding out more about The Discovery
                Village, leave a message
              </Typography>
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                mb: 3
              }}
            >
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                mb: 3
              }}
            >
              <TextField
                name="Phone No"
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                mb: 3
              }}
            >
              <TextField
                name="Email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "900px",
                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                mb: 3
              }}
            >
              <TextField
                name="Message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                inputProps={{
                  style: {
                    height: "300px"
                  }
                }}
                sx={{
                  width: "900px",

                  [`& fieldset`]: {
                    borderRadius: 0
                  }
                }}
              />
            </Grid2>
            <Grid2
              size={8}
              sx={{
                display: {
                  xs: "none",
                  md: "flex ",
                  lg: "flex"
                },
                mr: 20,
                justifyContent: "center"
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Manrope",
                  textTransform: "none",
                  width: "120px",
                  borderRadius: 0,
                  backgroundColor: "#0E204E"
                }}
              >
                Send
              </Button>
            </Grid2>
          </Box>
        </Grid2>
      </Box>
      <Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            width: "100%",
            height: "262px",
            bgcolor: "#0E204E",
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mt: 4,
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none"
            }}
          >
            Become an Agent
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            fontWeight={300}
            sx={{
              mt: -22,
              fontFamily: "Lato",
              color: "white",
              textDecoration: "none",

              textAlign: "center",
              ml: 10,
              pr: 8
            }}
          >
            A community that gives you a taste of happiness, a place you’ll love
            to <br />
            live and an opportunity to build a home.
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontFamily: "Lato",
              textTransform: "none",
              width: "103px",
              height: "40px",
              mt: -10,
              backgroundColor: "white",
              color: "#0E204E"
            }}
          >
            Join Now
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mt: 6,
              fontFamily: "Playfair Display",
              color: "#0E204E",
              textDecoration: "none"
            }}
          >
            Stay In Touch
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Typography
            fontWeight={300}
            sx={{
              mt: 3,
              fontFamily: "Lato",
              color: "#0E204E",
              px: 2,
              textDecoration: "none",
              textAlign: "center"
            }}
          >
            If you are interested in finding out more about The Discovery
            Village, leave a message
          </Typography>
        </Box>
        <Box>
          <Grid2
            container
            sx={{
              display: { sm: "flex", md: "none", lg: "none" },
              justifyContent: "center",
              mt: 5
            }}
            rowSpacing={2}
          >
            <Box>
              <Grid2 size={12} sx={{}}>
                <TextField
                  label="Name"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Phone No"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Email"
                  variant="standard"
                  sx={{
                    width: "275px"
                  }}
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Lato",
                      fontSize: "17px"
                    }
                  }}
                />
              </Grid2>
              <Grid2
                size={12}
                sx={{
                  my: 2
                }}
              >
                <FormLabel
                  style={{
                    fontFamily: "Lato"
                  }}
                >
                  Message
                </FormLabel>
              </Grid2>
              <Grid2 size={12} sx={{}}>
                <TextField
                  name="Message"
                  id="outlined-basic"
                  variant="outlined"
                  inputProps={{
                    style: {
                      fontFamily: "Lato",
                      height: "83px"
                    }
                  }}
                  sx={{
                    width: "275px",
                    [`& fieldset`]: {
                      borderRadius: 0
                    }
                  }}
                />
              </Grid2>
              <Grid2
                size={12}
                sx={{
                  mt: 2
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "Lato",
                    textTransform: "none",
                    width: "82px",
                    height: "40px",
                    ml: 10,
                    backgroundColor: "#0E204E",
                    color: "white"
                  }}
                >
                  Send
                </Button>
              </Grid2>
            </Box>
          </Grid2>
        </Box>
      </Box>
    </>
  )
}
export default Contact
