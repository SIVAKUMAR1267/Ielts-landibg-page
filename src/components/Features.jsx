import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Divider from '@mui/material/Divider'
import ChatIcon from '@mui/icons-material/Chat'
import AssignmentIcon from '@mui/icons-material/Assignment'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import PersonIcon from '@mui/icons-material/Person'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import BarChartIcon from '@mui/icons-material/BarChart'
import StarIcon from '@mui/icons-material/Star'

const features = [
  {
    title: 'Speaking Practice',
    desc: 'Daily speaking sessions with mentors to boost confidence.',
    icon: <ChatIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
  {
    title: 'Mock Tests',
    desc: 'Full-length timed practice tests with instant feedback.',
    icon: <AssignmentIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
  {
    title: 'AI Band Score',
    desc: 'Get AI-powered predictions for your IELTS band.',
    icon: <SmartToyIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
  {
    title: 'Personal Guidance',
    desc: 'One-on-one mentoring sessions with certified trainers.',
    icon: <PersonIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
  {
    title: 'Vocabulary Builder',
    desc: 'Interactive exercises to expand word power and improve IELTS vocabulary.',
    icon: <MenuBookIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
  {
    title: 'Progress Tracking',
    desc: 'Track your daily, weekly, and monthly performance with detailed reports.',
    icon: <BarChartIcon fontSize="large" sx={{ color: '#1AA7A9' }} />,
  },
]

export default function Features() {
  return (
    <Box mt={2} component="section" id="features" sx={{ py: 6 }}>
      <Container>
        <Stack spacing={2} useFlexGap sx={{ alignItems: 'center', mb: 4 }}>
          <StarIcon sx={{ fontSize: 50, color: '#1AA7A9' }} />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              color: '#005086',
            }}
          >
            Our Core Features
          </Typography>
          <Divider sx={{ width: '100px', bgcolor: '#1AA7A9' }} />
        </Stack>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {features.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: 220,
                  width: { md: 550, sm: 320, xs: 320 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
                elevation={3}
              >
                <CardActionArea sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 2 }}>
                    {card.icon}

                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: '#005086',
                        mt: 1,
                        mb: 0.5,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#005087',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        mx: 'auto',
                      }}
                    >
                      {card.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
