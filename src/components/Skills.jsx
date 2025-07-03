import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { skills } from '../data/portfolio';

const Skills = () => {
  const categories = ['Frontend','Programming Languages', 'Backend', 'Tools','Design & UI Tools','Soft Skills'];

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName] || Icons.Code;
    return <IconComponent />;
  };

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
              Skills & Technologies
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

        <Grid container spacing={4}>
          {categories.map((category, categoryIndex) => (
            <Grid item xs={12} sm={6} md={4} lg={4.0} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'background.default',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      color="text.primary"
                      textAlign="center"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                      {skills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                p: 2,
                                mb: 1,
                                backgroundColor: 'background.paper',
                                borderRadius: 2,
                                '&:hover': {
                                  backgroundColor: 'action.hover',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <Box
                                sx={{
                                  p: 1,
                                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                  borderRadius: 2,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {React.cloneElement(getIcon(skill.icon), {
                                  sx: { color: 'primary.main', fontSize: '20px' }
                                })}
                              </Box>
                              <Typography
                                variant="body1"
                                color="text.primary"
                                sx={{ fontWeight: 500 }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;