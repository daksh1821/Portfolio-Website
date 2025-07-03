import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowUp, LightMode, DarkMode } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../theme/ThemeProvider';
 // ✅ instead of hooks/useTheme


const Footer = () => {
  const theme = useTheme();
  const { theme: customTheme, toggleTheme } = useCustomTheme(); // ✅ synced with MUI + Tailwind

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? '#1e293b' : '#020617',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="h4"
              sx={{
                background: 'linear-gradient(45deg, #60a5fa 30%, #a78bfa 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              Daksh Jain
            </Typography>
            <Typography variant="body1" sx={{ color: '#94a3b8' }}>
              © 2024 Daksh Jain. All rights reserved.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                p: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: customTheme === 'light' ? '#94a3b8' : '#fbbf24',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
              aria-label="Toggle theme"
            >
              {customTheme === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                onClick={scrollToTop}
                sx={{
                  p: 2,
                  background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1e3a8a 30%, #5b21b6 90%)',
                  },
                }}
                aria-label="Scroll to top"
              >
                <KeyboardArrowUp />
              </IconButton>
            </motion.div>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
            Built with React, Material-UI, and Framer Motion
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;