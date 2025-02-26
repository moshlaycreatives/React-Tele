import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Offer = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ textAlign: "center", mx: "auto", maxWidth: "1200px", px: 2 }}>
            <Typography
                sx={{
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontSize: { xs: "32px", sm: "36px", md: "40px" },
                    lineHeight: { xs: "40px", md: "48px" },
                    color: "#98C447",
                    mt: 6,
                    mb: 3,
                }}
            >
                What We Offer
            </Typography>

            <Typography
                sx={{
                    fontFamily: "Outfit",
                    fontWeight: 400,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    lineHeight: { xs: "24px", md: "28px" },
                    color: "#3C3C3C",
                    mb: 4,
                }}
            >
                We provide tailored solutions for residential customers in deregulated states, ensuring you get<br/>
                access to competitive pricing, flexible contracts, and top-tier customer service.<br />
                Our services include:
            </Typography>

            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <img
                        src="/image/OfferImage.png"
                       
                        style={{
                            width: isSmallScreen ? "90%" : "100%",
                            maxWidth: "1080px",
                            height: "auto",
                        }}
                        alt="Offer"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Offer;
