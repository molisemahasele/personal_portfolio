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
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "AI Developer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "AI and Web Developer",
      company_name: "Robsol",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2021",
      points: [
        "During my tenure at RobSol, I worked as a programmer specializing in AI and web development. I played a pivotal role in implementing cutting-edge AI solutions, including natural language processing and computer vision applications, while also enhancing web applications for a seamless user experience. My responsibilities spanned data preprocessing, model training, and optimizing AI algorithms, as well as designing responsive and intuitive web interfaces, ensuring cross-browser compatibility, and integrating AI components to enhance functionality. Collaborating with cross-functional teams, I ensured that projects met technical and business requirements, staying up-to-date with the latest AI and web development trends to deliver innovative solutions to our clients.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "The Plug",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "2022",
      points: [
        "At The Plug, I worked as a fullstack developer, crafting user-friendly interfaces and ensuring a robust, secure e-commerce platform. My responsibilities ranged from front-end design to back-end architecture, encompassing key features like user authentication, payment processing, and inventory management. My efforts were instrumental in delivering a seamless online shopping experience to our customers.",
      ],
    },
    {
      title: "Back-end Developer",
      company_name: "LesBeats",
      icon: shopify,
      iconBg: "#383E56",
      date: "2023",
      points: [
        "As a backend developer at LesBeats, I used a tech stack centered on MongoDB, RESTful APIs, and Node.js. MongoDB efficiently managed data, while Node.js enabled smooth communication through RESTful APIs. This tech stack allowed me to optimize performance and authentication, contributing to LesBeats' success as a music platform.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Giant Technologies",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "During my time as a fullstack developer at Giant Technologies, my role was dynamic and challenging. I was regularly assigned to different projects, which provided a diverse range of experiences and opportunities for growth. As a result, I honed my skills in both front-end and back-end development, adapting to various project requirements and technologies. This experience allowed me to work on a wide array of projects, from web applications to mobile apps, each with its unique set of challenges and goals. It was an exciting and valuable period of my career that significantly expanded my skill set and problem-solving abilities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Amos proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Amos does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Amos optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Krypt",
      description:
        "Krypt is a cutting-edge project using blockchain and web3 technology to enable fast, cost-effective global money transfers. It eliminates intermediaries, ensuring secure and transparent transactions for users worldwide, making international money transfers easier and more accessible.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "VidChat",
      description:
        "VidChat is a user-friendly video chat platform that facilitates effortless online conversations. It enables people to connect face-to-face from anywhere, fostering real-time connections in the virtual world. Whether for personal or professional use, VidChat enhances communication and brings people together with ease.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
        {
          name: "webrtc",
          color: "yellow-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Instagram Clone",
      description:
        "I improved my skills by creating an Instagram clone, including both front-end and back-end development. This project involved replicating core Instagram features like user profiles, photo uploads, and interactions. It deepened my knowledge in database management, user authentication, and responsive design, serving as a practical showcase of my abilities.",
      tags: [
        {
          name: "Laravel 7",
          color: "blue-text-gradient",
        },
        {
          name: "Vue js",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap 5",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "white",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  