import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EngeryHome from "./EngeryHome";
import Methodology from "./Methodology";
import Perfect from "./Perfect";
import Form from "./Form";
import Footer from "./Footer";
import Offer from "./Offer";

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url('/image/BackgroundHeader.png')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    // height: 'auto',
                    // height: "750px",
                    height: isMobile ? "450px" : "750px",
                    width: '100%',
                }}
            >
                <Box>
                    <img
                        src="/image/logo.png"
                        style={{
                            width: isMobile ? '120px' : '190px',
                            margin: isMobile ? '20px 0' : '54px 0px 20px 249px',
                        }}
                        alt="Logo"
                    />
                </Box>

                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            fontSize: isMobile ? "36px" : isTablet ? "48px" : "60px",
                            lineHeight: isMobile ? "48px" : isTablet ? "64px" : "80px",
                            color: "white",
                            // marginTop: isMobile ? "20px" : "54px",
                            textAlign: isMobile ? "center" : "left",
                            margin: isMobile ? '40px 0' : '54px 0px 20px 250px',
                        }}
                    >
                        We Connect <br /> Energy Suppliers <br />To Their <br /> Customers.
                    </Typography>
                </Box>
            </Box>




            <Box>
                <Grid
                    container
                    spacing={2}
                    mt={5}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",


                    }}
                >

                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <img
                            src="/image/About.png"
                            style={{
                                width: "100%",
                                // maxWidth: "350px",
                                height: "auto"
                            }}
                            alt="About"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <Box
                            sx={{
                                boxShadow: "0px 4px 24px 0px #00000026",
                                padding: "30px",
                                borderRadius: "15px",
                                backgroundColor: "white",
                                margin: isMobile ? "0" : "0px 0px 0px -50px"
                            }}
                        >
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 600,
                                    fontSize: "30px",
                                    lineHeight: "36px",
                                    color: "#98C447",
                                }}
                                sx={{ textAlign: isMobile ? "center" : "" }}
                            >
                                About Company
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "Outfit",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "30px",
                                    color: "#3C3C3C",
                                    margin: "10px 0px 0px 0px",
                                }}
                                sx={{

                                    whiteSpace: { xs: "pre-line", md: "pre-line" }
                                }}
                            >


                                {isMobile ? " At Moshlay Creatives, we pride ourselves on being a leading energy broker in the deregulated markets of the United States. With years of experience and an extensive network of trusted electricity and natural gas suppliers, we help residential customers find the best energy deals across the nation. Whether you're looking to lower your monthly utility bills or switch to more sustainable energy sources, we have the expertise to guide you every step of the way. "
                                    : " At Moshlay Creatives, we pride ourselves on being a leading energy\n broker in the deregulated markets of the United States. With years of\n experience and an extensive network of trusted electricity and natural\n gas suppliers, we help residential customers find the best energy deals \n across the nation. Whether you're looking to lower your monthly utility\n bills or switch to more sustainable energy sources, we have the\n expertise to guide you every step of the way."}


                                {/* 
                                
                                At Moshlay Creatives, we pride ourselves on being a leading energy <br />
                                broker in the deregulated markets of the United States. With years of<br />
                                experience and an extensive network of trusted electricity and natural <br />
                                gas suppliers, we help residential customers find the best energy deals <br />
                                across the nation. Whether you're looking to lower your monthly utility <br />
                                bills or switch to more sustainable energy sources, we have the <br />
                                expertise to guide you every step of the way. */}
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>


            </Box >

            <Box>
                <Offer />
                <EngeryHome />
                <Methodology />
                <Perfect />
                <Form />
                <Footer />
            </Box>



        </>
    );
};

export default LandingPage;
