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
      <Typography
        variant="h2"
        noWrap
        component="a"
        fontWeight={700}
        sx={{
          mb: 3,
          display: { xs: "none", md: "none", lg: "flex" },
          fontFamily: "Playfair Display",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "wrap",
          justifyContent: "center"
        }}
      >
        Stay In Touch
      </Typography>

      <Typography
        noWrap
        component="a"
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          fontFamily: "Manrope",
          color: "#0E204E",
          textDecoration: "none",
          textWrap: "pretty",
          justifyContent: "center",
          mb: 6
        }}
      >
        Are you curious about Pineapple Island? Send a message
      </Typography>
      <Box>
        <Grid2
          sx={{
            display: { sm: "none", md: "none", lg: "flex" },
            justifyContent: "center",
            mb: 10,
            ml: 20
          }}
          container
          rowSpacing={5}
        >
          <Grid2
            size={8}
            sx={{
              display: { xs: "none", md: "none", lg: "flex" }
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
              display: { xs: "none", md: "none", lg: "flex" }
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
              display: { xs: "none", md: "none", lg: "flex" }
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
              display: { xs: "none", md: "none", lg: "flex" }
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
                md: "none",
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
        </Grid2>
      </Box>
      <Box>
        <Box
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" },
            width: "100%",
            height: "262px",
            bgcolor: "#0E204E"
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mt: 4,
              fontFamily: "Playfair Display",
              color: "white",
              textDecoration: "none",
              ml: 15
            }}
          >
            Become an Agent
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "flex", lg: "none" }
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
            display: { xs: "flex", md: "flex", lg: "none" },
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
            display: { xs: "flex", md: "flex", lg: "none" },
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
            display: { xs: "flex", md: "flex", lg: "none" },
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
        <Grid2
          sx={{
            display: { sm: "flex", md: "flex", lg: "none" },
            ml: 12,
            mt: 5
          }}
          container
          rowSpacing={2}
        >
          <Grid2 size={12}>
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
              mt: 2
            }}
          >
            <FormLabel
              style={{
                fontFamily: "Lato"
              }}
            >
              Message
            </FormLabel>
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
                mt: 1,
                [`& fieldset`]: {
                  borderRadius: 0
                }
              }}
            />
          </Grid2>
          <Grid2
            size={12}
            sx={{
              mt: 2,
              
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontFamily: "Lato",
                textTransform: "none",
                width: "82px",
                height: "40px",
                ml:12,
                backgroundColor: "#0E204E",
                color: "white"
              }}
            >
              Send
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  )
}
export default Contact
