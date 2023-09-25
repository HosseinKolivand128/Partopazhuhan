
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 3,
        fontFamily:"IranSans"
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} p={1}>
            <Typography variant="h6" color="text.primary" gutterBottom fontFamily="IranSans">
              درباره ما
            </Typography>
            <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
              شرکت پرتو پژوهان مستقر در پارک علمی غیاث الدین جمشید کاشانی واقع در شهر کاشان میباشد
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} p={1}>
            <Typography textAlign={"center"} variant="h6" color="text.primary" gutterBottom fontFamily="IranSans">
              تماس با ما
            </Typography>
            <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
            <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
              کاشان، بلوار نماز، میدان امیر به انتهای خیابان دانشگاه
            </Typography>
            <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
              پست الکترونیک: info@example.com
            </Typography>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
              <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
                              تلفن: 
              </Typography>
              <div style={{display:"flex",flexDirection:"column"}}>
                <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
                                0991-9302969
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily="IranSans">
                                031-55913043 
                </Typography>
              </div>
            </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} p={1}>
            <Typography textAlign={"center"} variant="h6" color="text.primary" gutterBottom fontFamily="IranSans">
              ما را دنبال کنید
            </Typography>
            <Box sx={{display:"flex",justifyContent:"space-around"}}>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
            </Box>
          </Grid>
        </Grid>
        {/* <Box mt={5} sx={{display:"flex"}}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box> */}
      </Container>
    </Box>
  );
}