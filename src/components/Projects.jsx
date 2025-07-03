import React from 'react';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Chip, 
  IconButton,
  Button
} from '@mui/material';
import { GitHub, Launch, ArrowForward } from '@mui/icons-material';
import { projects } from '../data/portfolio';

const Projects = () => {
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
              Featured Projects
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

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.paper',
                    overflow: 'hidden',
                    '&:hover': {
                      '& .project-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .project-overlay': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      className="project-image"
                      sx={{
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" color="text.primary" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.techStack.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            color: 'primary.main',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <GitHub />
                      </IconButton>
                      {project.liveUrl && (
                        <IconButton
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'text.secondary',
                            '&:hover': {
                              color: 'primary.main',
                            },
                          }}
                        >
                          <Launch />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="https://github.com/dakshjain97"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1e3a8a 30%, #5b21b6 90%)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              View More on GitHub
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;