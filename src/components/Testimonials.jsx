import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Divider from '@mui/material/Divider';
import PersonIcon from "@mui/icons-material/Person";
import Avatar from '@mui/material/Avatar';

const testimonials = [
  {
    name: "Ritika Mehta",
    role: "Student @ Delhi University",
    review:
      "The vocabulary builder and speaking sessions gave me the confidence I needed. I achieved Band 7.5 on my first attempt!",
  },
  {
    name: "Arjun Nair",
    role: "Software Engineer @ Infosys",
    review:
      "Balancing work and IELTS prep was tough, but the flexible practice schedules and AI band score predictions kept me on track.",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Specialist @ HCL",
    review:
      "I loved the personalized guidance sessions. The mentors understood my weaknesses and helped me focus on the right areas.",
  },
  {
    name: "Karan Singh",
    role: "Graduate @ JNU",
    review:
      "The mock tests felt exactly like the real exam. I walked into my IELTS test with full confidence and scored Band 8.0.",
  },
  {
    name: "Fatima Rahman",
    role: "Teacher @ DPS International",
    review:
      "The progress tracking feature was amazing. Seeing my improvements week by week kept me motivated until I cleared IELTS.",
  },
];


export default function Testimonials() {
  return (
    
      <Box component='section' id="testimonials" mt={5}>
        <Container
          sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          }}>
            <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '70%', sm: '70%' } }}
        >
            <PersonIcon sx={{ fontSize: 50 }} />
            <Typography
            variant="h3"
            sx={{
              display: 'flex',
              flexDirection: { sm: '100%', md: '70%' },
              textAlign: 'center',
             
            }}
          >
            What Our Students Say
          </Typography>
             <Divider />
         
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 3 }}>
      {testimonials.map((card) => (
        <Card key={card.name} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <div >
            <Avatar  />
          </div>  
          <Typography gutterBottom variant="h5" component="div">
             {card.name}
          </Typography>
           <Typography gutterBottom variant="h7" component="div">
             {card.role}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
           {card.review}
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
