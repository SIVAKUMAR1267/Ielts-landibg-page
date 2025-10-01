import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActionArea from '@mui/material/CardActionArea'
import Divider from '@mui/material/Divider'
import StarIcon from '@mui/icons-material/Star'
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar'

const testimonials = [
  {
    name: 'Ritika Mehta',
    role: 'Student @ Delhi University',
    review:
      'The vocabulary builder and speaking sessions gave me the confidence I needed. I achieved Band 7.5 on my first attempt!',
  },
  {
    name: 'Arjun Nair',
    role: 'Software Engineer @ Infosys',
    review:
      'Balancing work and IELTS prep was tough, but the flexible practice schedules and AI band score predictions kept me on track.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Marketing Specialist @ HCL',
    review:
      'I loved the personalized guidance sessions. The mentors understood my weaknesses and helped me focus on the right areas.',
  },
  {
    name: 'Karan Singh',
    role: 'Graduate @ JNU',
    review:
      'The mock tests felt exactly like the real exam. I walked into my IELTS test with full confidence and scored Band 8.0.',
  },
  {
    name: 'Fatima Rahman',
    role: 'Teacher @ DPS International',
    review:
      'The progress tracking feature was amazing. Seeing my improvements week by week kept me motivated until I cleared IELTS.',
  },
]

const FIXED_TESTIMONIAL_HEIGHT = 220

export default function Testimonials() {
  return (
    <Box
      component="section"
      id="testimonials"
      sx={{ py: 6, bgcolor: '#f9f9f9' }}
    >
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
            Student Success Stories
          </Typography>
          <Divider sx={{ width: '100px', bgcolor: '#1AA7A9' }} />
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {testimonials.slice(0, 4).map((t) => (
            <Grid item key={t.name} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: 220,
                  width: { md: 550, sm: 320, xs: 320 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'center',
                  p: 1.5,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
                elevation={3}
              >
                <CardActionArea
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardContent
                    sx={{
                      p: 1.5,
                      pt: 2,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      value={5}
                      readOnly
                      size="small"
                      sx={{ mb: 1, color: '#FFD700' }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        fontStyle: 'italic',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        mx: 'auto',
                        mb: 1,
                      }}
                    >
                      {`"${t.review}"`}
                    </Typography>
                  </CardContent>

                  <CardContent
                    sx={{ p: 1.5, pb: 2, borderTop: '1px solid #eee' }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          bgcolor: '#1AA7A9',
                          width: 40,
                          height: 40,
                          fontSize: 16,
                        }}
                      >
                        {t.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </Avatar>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'bold',
                            color: '#005086',
                            lineHeight: 1.2,
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          lineHeight={1.2}
                        >
                          {t.role}
                        </Typography>
                      </Box>
                    </Stack>
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
