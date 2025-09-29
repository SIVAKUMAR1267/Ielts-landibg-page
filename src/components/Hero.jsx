
import { Typography, Button, Box } from "@mui/material";

export default function HeroPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: {xs:'75vh', sm:"125vh"},
          px: 3,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Master IELTS with Ease
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Speaking practice, mock tests, and AI feedback—all in one place.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 5, py: 1.5 }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}
