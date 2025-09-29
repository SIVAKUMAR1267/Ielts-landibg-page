import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';
import ChatIcon from "@mui/icons-material/Chat";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BarChartIcon from "@mui/icons-material/BarChart";
import StarIcon from '@mui/icons-material/Star';

const features = [
  {
    title: "Speaking Practice",
    desc: "Daily speaking sessions with mentors to boost confidence.",
    icon: <ChatIcon fontSize="large" />,
  },
  {
    title: "Mock Tests",
    desc: "Full-length timed practice tests with instant feedback.",
    icon: <AssignmentIcon fontSize="large" />,
  },
  {
    title: "AI Band Score",
    desc: "Get AI-powered predictions for your IELTS band.",
    icon: <SmartToyIcon fontSize="large" />,
  },
  {
    title: "Personal Guidance",
    desc: "One-on-one mentoring sessions with certified trainers.",
    icon: <PersonIcon fontSize="large" />,
  },
  {
    title: "Vocabulary Builder",
    desc: "Interactive exercises to expand word power and improve IELTS vocabulary.",
    icon: <MenuBookIcon fontSize="large" />,
  },
  {
    title: "Progress Tracking",
    desc: "Track your daily, weekly, and monthly performance with detailed reports.",
    icon: <BarChartIcon fontSize="large" />,
  },
];

export default function Features() {
  return (
     <Box mt={5} component='section' id="features">
      <Container
        mt={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '70%', sm: '70%' } }}
        >
          <StarIcon sx={{ fontSize: 50 }} />
          <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { sm: '100%', md: '70%' },
              textAlign: 'center',
             
            }}
          >
            Our Features
          </Typography>

          <Divider />
         
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 3 }}>
      {features.map((card) => (
        <Card key={card.title} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <div >
            {card.icon}
          </div>  
          <Typography gutterBottom variant="h5" component="div">
             {card.title}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
           {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      ))}
        </Grid>
        </Stack>
      </Container>
    </Box>
  );
}