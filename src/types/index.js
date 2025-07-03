// Type definitions for portfolio data structures
export const ProjectType = {
  id: '',
  title: '',
  description: '',
  techStack: [],
  githubUrl: '',
  liveUrl: '',
  image: ''
};

export const ExperienceType = {
  id: '',
  title: '',
  company: '',
  duration: '',
  description: '',
  type: '' // 'work' | 'education'
};

export const SkillType = {
  name: '',
  icon: '',
  category: '' // 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills'
};

export const ContactFormType = {
  name: '',
  email: '',
  message: ''
};