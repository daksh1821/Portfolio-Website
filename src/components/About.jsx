import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Code, Storage, Palette, Psychology } from '@mui/icons-material';

const About = () => {
  const features = [
    {
      icon: <Code />,
      title: 'Full-Stack Dev',
      subtitle: 'MERN Stack',
      color: '#1e40af',
    },
    {
      icon: <Storage />,
      title: 'Database Expert',
      subtitle: 'SQL & NoSQL',
      color: '#7c3aed',
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      subtitle: 'User-Centered',
      color: '#059669',
    },
    {
      icon: <Psychology />,
      title: 'DSA Enthusiast',
      subtitle: 'Problem Solving',
      color: '#ea580c',
    },
  ];

  return (
    <Box component="section" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: '96px',
                height: '4px',
                background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                mx: 'auto',
                borderRadius: '2px',
              }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <Box
                  sx={{
                    width: '320px',
                    height: '320px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '288px',
                      height: '288px',
                      backgroundColor: 'background.default',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Code sx={{ fontSize: '120px', color: 'primary.main' }} />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" color="text.primary" gutterBottom>
                  Passionate Developer & Problem Solver
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  I'm a final-year B.Tech CSE student at Bennett University, deeply passionate about 
                  full-stack development, artificial intelligence, and solving real-world problems 
                  through innovative technology solutions.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  With experience in modern web technologies and a strong foundation in data structures 
                  and algorithms, I love creating efficient, scalable applications that make a difference. 
                  I'm particularly interested in the intersection of AI and web development.
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {features.map((feature, index) => (
                  <Grid item xs={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          p: 2,
                          backgroundColor: 'background.paper',
                          '&:hover': {
                            backgroundColor: 'action.hover',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardContent sx={{ p: '16px !important' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                              sx={{
                                p: 1,
                                backgroundColor: `${feature.color}20`,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              {React.cloneElement(feature.icon, {
                                sx: { color: feature.color, fontSize: '24px' }
                              })}
                            </Box>
                            <Box>
                              <Typography variant="h6" color="text.primary">
                                {feature.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {feature.subtitle}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;