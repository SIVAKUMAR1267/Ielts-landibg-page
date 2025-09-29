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
        bgcolor: "#212121",
        color: "white",
        textAlign: "center",
      }}
    >
       <Typography variant="h6" fontWeight="600">
        IELTSPro Institute
      </Typography>

      {/* Quote / Reward Text */}
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 500 }}>
        Where Preparation Meets Perfection.
      </Typography>

      {/* Links */}
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 6 }}
        justifyContent="center"
        flexWrap="wrap"
      >
        <Link href="#" underline="hover" color="inherit">
          About Us
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Careers
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Press
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Blog
        </Link>
        <Link href="#" underline="hover" color="inherit">
          Pricing
        </Link>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 6 }}>
        © {new Date().getFullYear()} IELTSPro. All rights reserved.
      </Typography>
    </Box>
  );
}
