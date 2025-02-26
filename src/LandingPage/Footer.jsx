import React from "react";
import { Box, Typography } from "@mui/material";


const Footer = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img
                    src="/image/Footerimage.png"
                    style={{
                        width: "100%",
                        maxWidth: "750px",
                        height: "auto"
                    }}
                />
            </Box>

            <Box
                sx={{

                }}
            >
                <Typography
                    style={{
                        textAlign: "center",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "22px",
                        backgroundColor: "#98C447",
                        padding: "20px",
                        color: "#FFFFFF"

                    }}
                >
                    Copyright © 2025 Moshlay Creatives All Rights Reserved.
                </Typography>
            </Box>

        </>
    )
}


export default Footer;