import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Perfect = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    {
      title: "Satisfied Electricity Customers",
      description:
        "Thousands of satisfied customers have trusted us to find \n the best electricity plans, saving them money while \n delivering reliable service.",
    },
    {
      title: "Satisfied Natural Gas Customers",
      description:
        "We’ve helped thousands of households find cost- \n effective natural gas plans that keep their homes warm \n and their bills low.",
    },
    {
      title: "Wide Coverage",
      description:
        "We proudly serve customers across deregulated states, \n including New York, California, Texas, Ohio, Pennsylvania, \n and many more.",
    },
    {
      title: "Expert Sales Team",
      description:
        "Our dedicated sales representatives are highly trained to \n guide you through your energy choices and make the \n switching process smooth.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We’re proud of our customer service, reflected in our \n high satisfaction rate. Our goal is to exceed your \n expectations every time.",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 4, md: 6 } }}>
      <Typography
        sx={{
          fontFamily: "Outfit",
          fontWeight: 700,
          fontSize: { xs: "28px", md: "40px" },
          lineHeight: { xs: "36px", md: "48px" },
          color: "#98C447",
          textAlign: "center",
          mb: 2,
        }}
      >
        What Makes Us Perfect
      </Typography>
      <Typography
        sx={{
          fontFamily: "Outfit",
          fontWeight: 400,
          fontSize: { xs: "16px", md: "20px" },
          lineHeight: { xs: "24px", md: "28px" },
          color: "#3C3C3C",
          textAlign: "center",
          px: { xs: "", md: 6 },
        }}
      >
        At Moshlay Creatives, we’re committed to providing exceptional energy
        solutions that meet your needs.
        <br />
        Our track record of satisfied customers, experienced team, and
        personalized service make <br/> us the ideal choice for your energy needs.
        
        Here’s why you can trust us:
      </Typography>

      <Grid
        container
        spacing={4}
        mt={4}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <img
            src="/image/Perfe.png"
            style={{
              width: "100%",
              maxWidth: "560px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
            alt="About"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          {data.map((item, index) => (
            <Box key={index} sx={{ mb: isMobile ? 3 : 2 }}>
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 600,
                  fontSize: { xs: "22px", md: "30px" },
                  lineHeight: "36px",
                  color: "#3C3C3C",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontWeight: 400,
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: "25px",
                  color: "#3C3C3C",
                }}
              >
                {item.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Perfect;



