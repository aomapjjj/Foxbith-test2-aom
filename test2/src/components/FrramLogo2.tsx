import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import Light from "../../public/imgs/FrameLogo/Light.svg"
import Lock from "../../public/imgs/FrameLogo/Lock.svg"
import Money from "../../public/imgs/FrameLogo/Money.svg"
import System from "../../public/imgs/FrameLogo/System.svg"
import Tree from "../../public/imgs/FrameLogo/Tree.svg"
import Network from "../../public/imgs/FrameLogo/Network.svg"

const FrramLogo2 = () => {
  return (
    <>
      <Grid2
        container
        columns={4}
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          mt: 5,
          px: 3,
          
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "center"
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 2,
                
              }}
            >
              <Image
                alt="Tree"
                src={Tree}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Eco Friendly
              </Typography>
            </Box>
          </Grid2>
        </Box>
        <Box
          sx={{
            ml:2
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 3
              }}
            >
              <Image
                alt="Network"
                src={Network}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Smart Homes
              </Typography>
            </Box>
          </Grid2>
        </Box>
        <Box
          sx={{
            pl: 3
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 2
              }}
            >
              <Image
                alt="Money"
                src={Money}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white"
                }}
              >
                Good Rates
              </Typography>
            </Box>
          </Grid2>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 2
              }}
            >
              <Image
                alt="System"
                src={System}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center"
                }}
              >
                Serviced <br />
                Apartment
              </Typography>
            </Box>
          </Grid2>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 5.5
              }}
            >
              <Image
                alt="Lock"
                src={Lock}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px"
                }}
              />
            </Box>

            <Box sx={{}}>
              <Typography
                sx={{
                  ml: 5,
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center"
                }}
              >
                Private
                <br />
                Security
              </Typography>
            </Box>
          </Grid2>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Grid2 size={4}>
            <Box
              sx={{
                ml: 6
              }}
            >
              <Image
                alt="Light"
                src={Light}
                priority={true}
                style={{
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  marginLeft:10
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "white",
                  textAlign: "center",
                  ml: 6
                }}
              >
                24/7
                <br />
                Electricity
              </Typography>
            </Box>
          </Grid2>
        </Box>
      </Grid2>
      
    </>
  )
}
export default FrramLogo2
