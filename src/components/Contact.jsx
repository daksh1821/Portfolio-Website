import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import {
  Send,
  Email,
  GitHub,
  LinkedIn,
  Code,
  Download,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'daksh.jain@example.com',
      color: '#1e40af',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/dakshjain97',
      color: '#7c3aed',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/dakshjain97',
      color: '#059669',
    },
    {
      icon: <Code />,
      title: 'LeetCode',
      value: 'leetcode.com/dakshjain97',
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
              Let's Connect
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

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ backgroundColor: 'background.paper' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" color="text.primary" gutterBottom>
                    Send me a message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      sx={{
                        background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1e3a8a 30%, #5b21b6 90%)',
                          transform: 'scale(1.02)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" color="text.primary" gutterBottom>
                  Get in touch
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  I'm always open to discussing new opportunities, exciting projects, 
                  or just having a friendly chat about technology and innovation.
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        p: 2,
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'action.hover',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: `${info.color}20`,
                          borderRadius: 2,
                          mr: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {React.cloneElement(info.icon, {
                          sx: { color: info.color, fontSize: '24px' }
                        })}
                      </Box>
                      <Box>
                        <Typography variant="h6" color="text.primary">
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                startIcon={<Download />}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.04)',
                    borderColor: 'primary.dark',
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;