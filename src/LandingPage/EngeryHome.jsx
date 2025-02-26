import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";





const EngeryHome = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Box>
                <Typography style={{
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "48px",
                    color: "#98C447",
                    textAlign: "center",
                    margin: "50px 0px 10px 0px"
                }}>
                    Expert Energy Solutions for Every Home
                </Typography>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#3C3C3C",
                        textAlign: "center",
                        margin:"0px 0px 40px 0px",
                        
                    }}
                    sx={{
                        px: { xs: 4, md: "" },
                    }}
                >
                    With years of experience in the energy industry, Moshlay Creatives has developed strong partnerships <br /> with some of the most reliable energy suppliers in the market. Our team has worked with <br /> many leading suppliers, giving us a deep understanding of the energy landscape <br />and allowing us to offer our customers the best options.
                </Typography>
            </Box>



            <Box sx={{ width: "100%", }}>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/NewYork.png"
                                alt="New York"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Michi.png"
                                alt="Michi"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ width: "100%",  }}>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Pennsy.png"
                                alt="New York"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/llin.png"
                                alt="Michi"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: "100%",  }}>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Texas.png"
                                alt="New York"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Mary.png"
                                alt="Michi"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: "100%",  }}>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Massa.png"
                                alt="New York"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Hampshire.png"
                                alt="Michi"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: "100%",  }}>
                <Grid
                    container
                    spacing={2}
                    mt={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/Jersey.png"
                                alt="New York"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{ textAlign: "center" }}>
                            <img
                                src="/image/ohio.png"
                                alt="Michi"
                                style={{
                                    width: isSmallScreen ? "90%" : "100%",
                                    maxWidth: "550px",
                                    height: "auto",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>



        </>
    )
}

export default EngeryHome;