import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";





const Methodology = () => {
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
                    margin: "50px 15px 0px 0px"
                }}>
                    Our Methodology
                </Typography>
                <Typography
                    style={{
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#3C3C3C",
                        textAlign: "center",
                        padding: "10px"
                    }}
                >
                    At Moshlay Creatives, we provide personalized energy services through a strategic approach, combining <br></br>proactive outreach, customer support, and targeted lead generation. Here’s how we work:
                </Typography>

            </Box>



            <Box>
                <Grid
                    container

                    mt={4}
                    mb={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: "center",


                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Box sx={{
                            backgroundColor: "#000000",
                            padding: "30px",
                            height: '200px',
                            width: "303px",
                        }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 600,
                                fontSize: "25px",
                                lineHeight: "35px",
                                color: "#FFFFFF",

                            }}>
                                Outbound
                            </Typography>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 300,
                                fontSize: "16px",
                                lineHeight: "22px",
                                color: "#FFFFFF",
                                margin: "10px 0px 0px 0px"
                            }}>
                                Our outbound team connects directly <br /> with you, offering tailored energy <br /> solutions that help lower your costs and <br /> maximize your savings. We ensure you <br /> never miss out on competitive rates and <br /> trusted energy suppliers.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >

                        <Box sx={{
                            backgroundColor: "#98C447",
                            padding: "30px",
                            height: '200px',
                            width: "303px",
                        }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 600,
                                fontSize: "25px",
                                lineHeight: "35px",
                                color: "#FFFFFF",

                            }}>
                                Inbound
                            </Typography>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 300,
                                fontSize: "16px",
                                lineHeight: "22px",
                                color: "#FFFFFF",
                                margin: "10px 0px 0px 0px"
                            }}>
                                Whether you’re considering a switch or <br />simply have questions, our inbound <br /> sales team is here to assist. We provide <br />expert advice and smooth transitions to<br /> the right energy provider for your <br /> home’s unique needs.
                            </Typography>
                        </Box>


                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >

                        <Box sx={{
                            backgroundColor: "#000000",
                            padding: "30px",
                            height: '100%',
                            width: "303px",
                        }}>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 600,
                                fontSize: "25px",
                                lineHeight: "35px",
                                color: "#FFFFFF",

                            }}>
                                Lead Generation
                            </Typography>
                            <Typography style={{
                                fontFamily: "Outfit",
                                fontWeight: 300,
                                fontSize: "16px",
                                lineHeight: "22px",
                                color: "#FFFFFF",
                                margin: "10px 0px 0px 0px"
                            }}>
                                We specialize in generating high- <br />quality leads, targeting households<br /> looking for affordable, reliable energy <br />options. Our process connects you with <br /> suppliers that offer the best possible <br /> deals, ensuring you get the most value <br />for your energy needs.
                            </Typography>
                        </Box>



                    </Grid>



                </Grid>
            </Box>


        </>
    )
}



export default Methodology;