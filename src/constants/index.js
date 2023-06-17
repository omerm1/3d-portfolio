import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  sveltejs,
  vuejs,
  freelancer,
  spartaglobal
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: tailwind,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: 'vuejs',
    icon: vuejs,
  },
  {
    name: 'svelte',
    icon: sveltejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: 'java',
    icon: java
  }
];

const experiences = [
  {
    title: "Shopify/Web Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#FFFFFF",
    date: "2019-2020",
    points: [
      "Developed and optimized Shopify sites for clients, resulting in improved user experience and increased conversions.",
      "Collaborated closely with clients to understand their specific business needs and designed and implemented custom websites tailored to their requirements.",
      "Utilized Python and JavaScript programming languages to create dynamic and responsive web pages with interactive features.",
      "Successfully delivered projects on time and within budget, receiving positive feedback from clients for the quality of work and attention to detail.",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "Sparta Global",
    icon: spartaglobal,
    iconBg: "#FFFFFF",
    date: "2022-2023",
    points: [
      "Successfully completed intensive training in SDET-Java fundamentals and applications, acquiring a solid foundation in software development and testing practices.",
      "Developed a strong understanding of React, smart contracts, and Tricentis Tosca, gaining expertise in modern web development technologies and automated testing frameworks.",
      "Applied programming fundamentals on a daily basis while working on various projects, effectively solving complex technical challenges and delivering high-quality solutions.",
      "Demonstrated a strong commitment to continuous learning, staying updated with the latest industry trends and best practices to drive innovation and deliver cutting-edge solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Mock for a Web-based platform that allows users to search, book, and manage car rentals from various providers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/omerm1/car-showcase",
    source_link: "https://car-showcase-ten-sepia.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };