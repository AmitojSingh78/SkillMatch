import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create Users
  console.log('Seeding database...')
  const user1 = await prisma.users.create({
    data: {
      username: 'johndoe',
      email: 'john@example.com',
      password: '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', // hashed 'password123'
      profile_photo_url: 'https://randomuser.me/api/portraits/men/1.jpg',
      is_verified: true,
    },
  })

  const user2 = await prisma.users.create({
    data: {
      username: 'janedoe',
      email: 'jane@example.com',
      password: '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG', // hashed 'password123'
      profile_photo_url: 'https://randomuser.me/api/portraits/women/1.jpg',
      is_verified: true,
    },
  })

  // Create UserDetails
  await prisma.userDetails.create({
    data: {
      user_id: user1.id,
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '555-123-4567',
      address: '123 Main St',
      city: 'Boston',
      state: 'MA',
      country: 'USA',
      zip_code: '02108',
    },
  })

  await prisma.userDetails.create({
    data: {
      user_id: user2.id,
      first_name: 'Jane',
      last_name: 'Doe',
      phone_number: '555-987-6543',
      address: '456 Oak Ave',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      zip_code: '94107',
    },
  })

  // Create Resumes
  const resume1 = await prisma.resumes.create({
    data: {
      user_id: user1.id,
      file_path: '/uploads/resumes/john_resume.pdf',
      file_name: 'john_resume.pdf',
      parsed_data: JSON.stringify({
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: '5 years',
        education: 'Bachelor in Computer Science',
      }),
    },
  })

  const resume2 = await prisma.resumes.create({
    data: {
      user_id: user2.id,
      file_path: '/uploads/resumes/jane_resume.pdf',
      file_name: 'jane_resume.pdf',
      parsed_data: JSON.stringify({
        skills: ['Python', 'Django', 'SQL'],
        experience: '3 years',
        education: 'Master in Information Technology',
      }),
    },
  })

  // Create SkillGaps
  await prisma.skillGaps.create({
    data: {
      resume_id: resume1.id,
      skill_keywords: 'React, JavaScript, Node.js',
      skill_gap: 'TypeScript, AWS',
      skill_gap_description: 'Missing TypeScript and AWS knowledge for senior positions',
      skill_gap_level: 'Intermediate',
      recommended_skills: 'TypeScript, AWS Lambda, DynamoDB',
    },
  })

  await prisma.skillGaps.create({
    data: {
      resume_id: resume2.id,
      skill_keywords: 'Python, Django, SQL',
      skill_gap: 'Docker, Kubernetes',
      skill_gap_description: 'Missing containerization skills for DevOps roles',
      skill_gap_level: 'Advanced',
      recommended_skills: 'Docker, Kubernetes, CI/CD pipelines',
    },
  })

  // Create Roadmaps
  await prisma.roadmaps.create({
    data: {
      title: 'Frontend Developer Roadmap',
      description: 'Complete guide to becoming a frontend developer in 2025',
      pdf_link: '/resources/roadmaps/frontend_roadmap.pdf',
    },
  })

  await prisma.roadmaps.create({
    data: {
      title: 'Backend Developer Roadmap',
      description: 'Complete guide to becoming a backend developer in 2025',
      pdf_link: '/resources/roadmaps/backend_roadmap.pdf',
    },
  })

  // Create Jobs
  const job1 = await prisma.jobs.create({
    data: {
      user_id: user1.id,
      title: 'Senior Frontend Developer',
      description: 'Looking for a skilled frontend developer with React experience',
      company_name: 'Tech Solutions Inc',
      location: 'Boston, MA',
      salary: '$120,000 - $150,000',
      job_type: 'Full-time',
    },
  })

  const job2 = await prisma.jobs.create({
    data: {
      user_id: user2.id,
      title: 'Python Backend Engineer',
      description: 'Seeking a Python expert for our backend team',
      company_name: 'Data Dynamics',
      location: 'San Francisco, CA',
      salary: '$130,000 - $160,000',
      job_type: 'Full-time',
    },
  })

  // Create JobApplications
  await prisma.jobApplications.create({
    data: {
      user_id: user2.id,
      resume_id: resume2.id,
      job_id: job1.id,
      job_title: 'Senior Frontend Developer',
      company_name: 'Tech Solutions Inc',
      location: 'Boston, MA',
      status: 'Applied',
    },
  })

  await prisma.jobApplications.create({
    data: {
      user_id: user1.id,
      resume_id: resume1.id,
      job_id: job2.id,
      job_title: 'Python Backend Engineer',
      company_name: 'Data Dynamics',
      location: 'San Francisco, CA',
      status: 'In Review',
    },
  })

  // Create Certifications
  await prisma.certifications.create({
    data: {
      user_id: user1.id,
      title: 'AWS Certified Solutions Architect',
      description: 'Professional certification for AWS architecture design',
      issued_by: 'Amazon Web Services',
      issue_date: new Date('2024-01-15'),
      expiry_date: new Date('2027-01-15'),
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    },
  })

  await prisma.certifications.create({
    data: {
      user_id: user2.id,
      title: 'Google Professional Data Engineer',
      description: 'Professional certification for data engineering on Google Cloud',
      issued_by: 'Google Cloud',
      issue_date: new Date('2023-11-10'),
      expiry_date: new Date('2026-11-10'),
      link: 'https://cloud.google.com/certification/data-engineer',
    },
  })

  // Create InterviewsSessions
  await prisma.interviewsSessions.create({
    data: {
      user_id: user1.id,
      date: new Date('2025-04-20'),
      time: '14:00',
      duration: '45 minutes',
      transcript: 'Q: Tell me about yourself?\nA: I am a senior developer with 5 years of experience in web development...',
      score: '85/100',
      feedback: 'Strong technical answers but could improve on communication clarity.',
    },
  })

  await prisma.interviewsSessions.create({
    data: {
      user_id: user2.id,
      date: new Date('2025-04-22'),
      time: '10:30',
      duration: '60 minutes',
      transcript: 'Q: Describe your experience with Python?\nA: I have been working with Python for 3 years, primarily with Django...',
      score: '92/100',
      feedback: 'Excellent technical knowledge and communication skills. Consider providing more specific examples.',
    },
  })

  console.log('Database has been seeded with test data')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })