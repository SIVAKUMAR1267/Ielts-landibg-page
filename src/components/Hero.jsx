import { Typography, Button, Box } from '@mui/material'

export default function HeroPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa', color: 'white' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: { xs: '75vh', sm: '125vh' },
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 'bold', mb: 2, color: '#005086' }}
        >
          Master IELTS with Ease
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#005086' }}>
          Speaking practice, mock tests, and AI feedback—all in one place.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#FF8C42',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#E67A3B',
            },
            padding: '12px 30px',
            boxShadow: '0 4px 12px rgba(255, 140, 66, 0.4)',
          }}
        >
          Start Learning
        </Button>
      </Box>
    </Box>
  )
}
