import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Work, School, CalendarToday } from '@mui/icons-material';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <Box component="section" sx={{ py: 10, backgroundColor: 'background.paper' }}>
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
              Experience & Education
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

        <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
          <Box sx={{ position: 'relative' }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: '32px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, #1e40af, #7c3aed)',
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    mb: 6,
                    flexDirection: { xs: 'row', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  }}
                >
                  {/* Timeline Node */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '24px',
                      width: '16px',
                      height: '16px',
                      background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                      borderRadius: '50%',
                      zIndex: 10,
                    }}
                  />

                  {/* Content Card */}
                  <Box
                    sx={{
                      width: '100%',
                      ml: { xs: 8, md: index % 2 === 0 ? 8 : 0 },
                      mr: { xs: 0, md: index % 2 === 0 ? 0 : 8 },
                      maxWidth: { md: '50%' },
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: 'background.default',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box
                            sx={{
                              p: 1,
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              borderRadius: 2,
                              mr: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {exp.type === 'work' ? (
                              <Work sx={{ color: 'primary.main', fontSize: '24px' }} />
                            ) : (
                              <School sx={{ color: 'primary.main', fontSize: '24px' }} />
                            )}
                          </Box>
                          <Box>
                            <Typography variant="h5" color="text.primary">
                              {exp.title}
                            </Typography>
                            <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                              {exp.company}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CalendarToday sx={{ fontSize: '16px', mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {exp.duration}
                          </Typography>
                        </Box>

                        <Typography variant="body1" color="text.secondary">
                          {exp.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;