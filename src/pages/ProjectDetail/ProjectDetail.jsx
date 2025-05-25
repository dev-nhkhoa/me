import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Box,
  Typography,
  Container,
  Button,
  Chip,
  Card,
  CardContent,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Dialog,
  DialogContent,
  IconButton,
  CardMedia
} from '@mui/material'
import {
  ArrowBack,
  Schedule,
  Person,
  Launch,
  GitHub,
  CheckCircle,
  Timeline as TimelineIcon,
  Error as ChallengeIcon,
  Close as CloseIcon,
  Image as ImageIcon,
  ZoomIn as ZoomInIcon
} from '@mui/icons-material'

import { PROFILE_CONFIG } from '~/config/profile.jsx'
import { BRANDING_CONFIG } from '~/config/branding.js'
import Background from '~/components/Background'
import ResponsiveAppBar from '~/components/ResponsiveAppBar/ResponsiveAppBar'

function ProjectDetail() {
  const { projectName } = useParams()
  const navigate = useNavigate()
  const { projects } = PROFILE_CONFIG
  const { dimensions, colors, spacing } = BRANDING_CONFIG
  const [selectedImage, setSelectedImage] = useState(null)
  const [openLightbox, setOpenLightbox] = useState(false)

  // Tìm project dựa trên slug
  const project = projects.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === projectName
  )

  if (!project) {
    return (
      <Box sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.main',
        fontFamily: 'typography.fontFamily'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" sx={{ color: 'primary.text.primary', mb: 2, fontWeight: 'normal' }}>
              Project Not Found
            </Typography>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate('/')}
              sx={{ 
                borderColor: 'primary.text.third', 
                color: 'primary.text.third',
                fontWeight: 'normal'
              }}
            >
              Back to Home
            </Button>
          </Box>
        </motion.div>
      </Box>
    )
  }

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
    setOpenLightbox(true)
  }

  const handleCloseLightbox = () => {
    setOpenLightbox(false)
    setSelectedImage(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        fontFamily: 'typography.fontFamily',
        pt: { xs: 10, md: 12 }, // Add padding top to account for fixed app bar
        pb: { xs: 2, md: 4 }
      }}>
        <Container maxWidth={false} sx={{ 
          maxWidth: dimensions.container.maxWidth,
          margin: '0 auto'
        }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Back Button - Icon only */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 4 }}>
                <IconButton
                  onClick={() => navigate('/')}
                  sx={{ 
                    color: 'primary.text.third',
                    '&:hover': { backgroundColor: 'rgba(139, 90, 43, 0.1)' }
                  }}
                >
                  <ArrowBack />
                </IconButton>
              </Box>
            </motion.div>

            {/* Image Preview Section - Moved to top */}
            {project.image && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Box 
                      sx={{ 
                        position: 'relative',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        '&:hover .image-overlay': {
                          opacity: 1
                        }
                      }}
                      onClick={() => handleImageClick(project.image)}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={`${project.name} preview`}
                        sx={{
                          width: '100%',
                          height: { xs: '300px', md: '500px' },
                          objectFit: 'cover'
                        }}
                      />
                      
                      {/* Minimal hover overlay */}
                      <Box
                        className="image-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        }}
                      >
                        <ZoomInIcon sx={{ color: 'white', fontSize: '3rem' }} />
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            )}

            {/* Image Gallery Section - Add after main image */}
            {project.images && project.images.length > 0 && (
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: 6 }}>
                  <Typography sx={{ 
                    color: 'primary.text.primary', 
                    mb: 3, 
                    fontWeight: 'medium',
                    fontSize: '1.2rem'
                  }}>
                    Project Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    {project.images.map((img, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              cursor: 'pointer',
                              overflow: 'hidden',
                              borderRadius: '8px',
                              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                              '&:hover .gallery-overlay': {
                                opacity: 1
                              }
                            }}
                            onClick={() => handleImageClick(img.src)}
                          >
                            <CardMedia
                              component="img"
                              image={img.src}
                              alt={img.alt}
                              sx={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover'
                              }}
                            />
                            
                            {/* Gallery hover overlay */}
                            <Box
                              className="gallery-overlay"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                              }}
                            >
                              <ZoomInIcon sx={{ color: 'white', fontSize: '2rem' }} />
                            </Box>
                          </Box>
                          
                          {/* Image caption */}
                          {img.caption && (
                            <Typography sx={{ 
                              color: 'primary.text.secondary', 
                              fontSize: '0.875rem',
                              mt: 1,
                              textAlign: 'center'
                            }}>
                              {img.caption}
                            </Typography>
                          )}
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            )}

            {/* Hero Section */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      color: 'primary.text.primary',
                      fontWeight: 'normal',
                      mb: 2,
                      fontSize: { xs: '2rem', md: '3rem' },
                      lineHeight: 1.2
                    }}
                  >
                    {project.name}
                  </Typography>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Typography 
                    sx={{ 
                      color: 'primary.text.secondary',
                      mb: 4,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.6,
                      fontWeight: 'normal'
                    }}
                  >
                    {project.detailedDescription}
                  </Typography>
                </motion.div>

                {/* Action Buttons - Minimalist design */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {project.liveUrl && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<Launch />}
                          onClick={() => window.open(project.liveUrl)}
                          sx={{
                            backgroundColor: 'primary.button.bg',
                            color: 'primary.button.text',
                            fontWeight: 'normal',
                            px: 3,
                            py: 1,
                            borderRadius: '8px',
                            boxShadow: 'none',
                            '&:hover': { 
                              backgroundColor: 'primary.text.third',
                              boxShadow: 'none'
                            }
                          }}
                        >
                          Live Demo
                        </Button>
                      </motion.div>
                    )}
                    {project.githubUrl && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outlined"
                          startIcon={<GitHub />}
                          onClick={() => window.open(project.githubUrl)}
                          sx={{
                            borderColor: 'primary.text.third',
                            color: 'primary.text.third',
                            fontWeight: 'normal',
                            px: 3,
                            py: 1,
                            borderRadius: '8px',
                            '&:hover': { 
                              backgroundColor: 'rgba(139, 90, 43, 0.05)',
                              borderColor: 'primary.text.third'
                            }
                          }}
                        >
                          View Code
                        </Button>
                      </motion.div>
                    )}
                  </Box>
                </motion.div>
              </Box>
            </motion.div>

            {/* Project Info Cards - Minimalist design */}
            <motion.div variants={itemVariants}>
              <Grid container spacing={3} sx={{ mb: 6 }}>
                <Grid item xs={12} md={4}>
                  <motion.div variants={cardVariants}>
                    <Card sx={{ 
                      backgroundColor: 'rgba(139, 90, 43, 0.03)',
                      border: '1px solid rgba(139, 90, 43, 0.1)',
                      borderRadius: '12px',
                      boxShadow: 'none'
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Schedule sx={{ color: 'primary.text.third', mr: 1, fontSize: '20px' }} />
                          <Typography sx={{ color: 'primary.text.primary', fontWeight: 'medium' }}>
                            Duration
                          </Typography>
                        </Box>
                        <Typography sx={{ color: 'primary.text.secondary', fontWeight: 'normal' }}>
                          {project.duration}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
                
                <Grid item xs={12} md={8}>
                  <motion.div variants={cardVariants}>
                    <Card sx={{ 
                      backgroundColor: 'rgba(139, 90, 43, 0.03)',
                      border: '1px solid rgba(139, 90, 43, 0.1)',
                      borderRadius: '12px',
                      boxShadow: 'none'
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Person sx={{ color: 'primary.text.third', mr: 1, fontSize: '20px' }} />
                          <Typography sx={{ color: 'primary.text.primary', fontWeight: 'medium' }}>
                            My Role
                          </Typography>
                        </Box>
                        <Typography sx={{ color: 'primary.text.secondary', fontWeight: 'normal' }}>
                          {project.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>

            {/* Tech Stack - Minimalist design */}
            <motion.div variants={itemVariants}>
              <Card sx={{ 
                mb: 6,
                backgroundColor: 'rgba(139, 90, 43, 0.03)',
                border: '1px solid rgba(139, 90, 43, 0.1)',
                borderRadius: '12px',
                boxShadow: 'none'
              }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ color: 'primary.text.primary', mb: 3, fontWeight: 'medium' }}>
                    Tech Stack
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Chip
                          label={tech}
                          sx={{
                            backgroundColor: 'primary.button.bg',
                            color: 'primary.button.text',
                            fontWeight: 'normal',
                            fontSize: '0.875rem'
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline */}
            {project.timeline && (
              <motion.div variants={itemVariants}>
                <Card sx={{ 
                  mb: 6,
                  backgroundColor: 'rgba(139, 90, 43, 0.03)',
                  border: '1px solid rgba(139, 90, 43, 0.1)',
                  borderRadius: '12px',
                  boxShadow: 'none'
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <TimelineIcon sx={{ color: 'primary.text.third', mr: 1, fontSize: '20px' }} />
                      <Typography sx={{ color: 'primary.text.primary', fontWeight: 'medium' }}>
                        Development Timeline
                      </Typography>
                    </Box>
                    <List sx={{ p: 0 }}>
                      {project.timeline.map((phase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                          <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', px: 0 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 1 }}>
                              <Typography sx={{ color: 'primary.text.primary', flex: 1, fontWeight: 'medium' }}>
                                {phase.phase}
                              </Typography>
                              <Chip 
                                label={phase.duration} 
                                size="small"
                                sx={{ 
                                  backgroundColor: 'primary.text.third',
                                  color: 'primary.button.text',
                                  fontWeight: 'normal'
                                }}
                              />
                            </Box>
                            <Typography sx={{ color: 'primary.text.secondary', fontWeight: 'normal' }}>
                              {phase.description}
                            </Typography>
                            {index < project.timeline.length - 1 && (
                              <Divider sx={{ width: '100%', mt: 2, borderColor: 'rgba(139, 90, 43, 0.1)' }} />
                            )}
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Challenges & Achievements */}
            <Grid container spacing={3}>
              {project.challenges && (
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <Card sx={{ 
                      height: '100%',
                      backgroundColor: 'rgba(139, 90, 43, 0.03)',
                      border: '1px solid rgba(139, 90, 43, 0.1)',
                      borderRadius: '12px',
                      boxShadow: 'none'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <ChallengeIcon sx={{ color: 'primary.text.third', mr: 1, fontSize: '20px' }} />
                          <Typography sx={{ color: 'primary.text.primary', fontWeight: 'medium' }}>
                            Challenges
                          </Typography>
                        </Box>
                        <List>
                          {project.challenges.map((challenge, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                              <ListItem>
                                <ListItemText 
                                  primary={challenge}
                                  primaryTypographyProps={{
                                    color: 'primary.text.secondary',
                                    fontSize: '14px'
                                  }}
                              />
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )}

              {project.achievements && (
                <Grid item xs={12} md={6}>
                  <motion.div variants={itemVariants}>
                    <Card sx={{ 
                      height: '100%',
                      backgroundColor: 'rgba(139, 90, 43, 0.03)',
                      border: '1px solid rgba(139, 90, 43, 0.1)',
                      borderRadius: '12px',
                      boxShadow: 'none'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <CheckCircle sx={{ color: 'primary.text.third', mr: 1, fontSize: '20px' }} />
                          <Typography sx={{ color: 'primary.text.primary', fontWeight: 'medium' }}>
                            Achievements
                          </Typography>
                        </Box>
                        <List>
                          {project.achievements.map((achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                              <ListItem>
                                <ListItemIcon>
                                  <CheckCircle sx={{ color: '#4ade80', fontSize: '16px' }} />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={achievement}
                                  primaryTypographyProps={{
                                    color: 'primary.text.secondary',
                                    fontSize: '14px'
                                  }}
                              />
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              )}
            </Grid>

            {/* Lightbox Modal */}
            <Dialog
              open={openLightbox}
              onClose={handleCloseLightbox}
              maxWidth={false}
              PaperProps={{
                sx: {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  margin: 2
                }
              }}
            >
              <DialogContent sx={{ p: 0, position: 'relative' }}>
                <IconButton
                  onClick={handleCloseLightbox}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    zIndex: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
                
                {selectedImage && (
                  <motion.img
                    src={selectedImage}
                    alt="Full size preview"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '90vh',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                )}
              </DialogContent>
            </Dialog>
          </motion.div>
        </Container>
      </Box>
    </>
  )
}

export default ProjectDetail