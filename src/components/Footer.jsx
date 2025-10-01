import { Box, Typography, Stack, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      mt={3}
      component='section'
      id="contact"
      sx={{
        px: { xs: 6, md: 20 },
        py: 8,
        bgcolor: "#005086",
        color: "white",
        textAlign: "center",
      }}
    >
       <Typography variant="h6" fontWeight="600">
        IELTSPro Institute
      </Typography>

      
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 500 }}>
        Where Preparation Meets Perfection.
      </Typography>

  
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 6 }}
        justifyContent="center"
        flexWrap="wrap"
      >
        <Link href="#" underline="hover" color="#fafafa">
          About Us
        </Link>
        <Link href="#" underline="hover" color="#fafafa">
          Careers
        </Link>
        <Link href="#" underline="hover" color="#fafafa">
          Press
        </Link>
        <Link href="#" underline="hover" color="#fafafa">
          Blog
        </Link>
        <Link href="#" underline="hover" color="#fafafa">
          Pricing
        </Link>
      </Stack>


      <Typography variant="body2" sx={{ mt: 6 }}>
        © {new Date().getFullYear()} IELTSPro. All rights reserved.
      </Typography>
    </Box>
  );
}
