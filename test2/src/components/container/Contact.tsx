import { Box, Button, Grid2, TextField, Typography } from "@mui/material"

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
          display: { xs: "none", md:"none" , lg: "flex" },
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
          display: { xs: "none", md:"none" , lg: "flex" },
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
            display: { sm: "none", md:"none" , lg: "flex" },
            justifyContent: "center",
            mb: 10,
            ml: 20
          }}
          container
          rowSpacing={5}
        >
          <Grid2 size={8}  sx={
          {
            display: { xs: "none", md:"none" , lg: "flex" },
          }
        }>
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
          <Grid2 size={8}  sx={
          {
            display: { xs: "none", md:"none" , lg: "flex" },
          }
        }>
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
          <Grid2 size={8}  sx={
          {
            display: { xs: "none", md:"none" , lg: "flex" },
          }
        }>
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
          <Grid2 size={8}  sx={
          {
            display: { xs: "none", md:"none" , lg: "flex" },
          }
        }>
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
                md:"none" , lg: "flex",
                
              },
              mr:20,
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
    </>
  )
}
export default Contact
