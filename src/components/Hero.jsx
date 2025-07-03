import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Button, IconButton, useTheme } from '@mui/material';
import {
  Download,
  ArrowForward,
  GitHub,
  LinkedIn,
  Email,
  Code,
  Language,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)'
          : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Animated Background Blobs */}
      <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            width: '288px',
            height: '288px',
            background: 'rgba(59, 130, 246, 0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            width: '384px',
            height: '384px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ zIndex: 10 }}>
        <Box textAlign="center">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #1e40af 30%, #7c3aed 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Daksh Jain
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ mb: 4, fontWeight: 400 }}
            >
              Full-Stack Developer | DSA Enthusiast | UI/UX Passionate
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
                mb: 6,
              }}
            >
              <Button
  variant="contained"
  size="large"
  startIcon={<Download />}
  href="Resume_daksh.pdf" // Must be inside /public
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
  View Resume
</Button>
            </Box>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              {[
                { icon: <GitHub />, href: 'https://github.com/daksh1821' },
                { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/daksh-jain-5620b5251/' },
                { icon: <Email />, href: 'mailto:daksh2872004@gmail.com' },
                { icon: <Code />, href: 'https://leetcode.com/Java_king_/' },
                { icon: <Language />, href: 'https://expense-tracker-frontend-hw82.onrender.com' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 2,
                    backgroundColor:
                      theme.palette.mode === 'light'
                        ? 'rgba(255, 255, 255, 0.5)'
                        : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor:
                        theme.palette.mode === 'light'
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(255, 255, 255, 0.2)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Box
          sx={{
            width: '24px',
            height: '40px',
            border: `2px solid ${theme.palette.text.secondary}`,
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            '&::before': {
              content: '""',
              width: '4px',
              height: '12px',
              backgroundColor: theme.palette.text.secondary,
              borderRadius: '2px',
              marginTop: '8px',
            },
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
