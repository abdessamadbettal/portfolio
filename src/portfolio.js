/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdessamad Bettal",
  title: "Hi all, I'm Abdessamad",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having experience of building Web and Mobile applications with Laravel, JavaScript / React, Vue / Nodejs / Next.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ROhMlA_BPoNFQ8XDcgXHcQ1wo_0e01H8/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdessamadbettal",
  linkedin: "https://www.linkedin.com/in/abdessamadbettal/",
  gmail: "abdessamadbattal@gmail.com",
  // gitlab: "https://gitlab.com/abdessamadbettal",
  facebook: "https://www.facebook.com/abdessamadbettal",
  medium: "https://medium.com/@abdessamadbettal",
  instagram: "https://www.instagram.com/abdessamadbettal/",
  twitter: "https://twitter.com/abdessamadbetal",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop and maintain web applications using PHP and the Laravel framework."
    ),
    emoji("⚡ Integration of third party services such as Cpanel/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fa fa-bolt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fa fa-forward"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Cpanel",
      fontAwesomeClassname: "fab fa-cpanel"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "YouCode - UM6P University",
      logo: require("./assets/images/youcode.jpg"),
      subHeader: "Web and Mobile Development",
      duration: "September 2021 - April 2023",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Cadi Ayyad University",
      logo: require("./assets/images/uca.jpg"),
      subHeader: "Bachelor of Life Science",
      duration: "September 2017 - April 2021",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Devops",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Groove Digital",
      companylogo: require("./assets/images/groove.png"),
      date: "September 2023 – Present",
      desc: "Responsible for developing and maintaining for Groove Blog and Groove Mail.",
      descBullets: [
        "Refactored the codebase to be more modular and maintainable.",
        "Implemented new features and bug fixes, upgrade for existing applications.",
        "Optimized the performance of the application.",
        "Make the application more secure by implementing security measures and wrote clean, maintainable code.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "MyRestAi",
      companylogo: require("./assets/images/rest.jpg"),
      date: "mars 2023 – September 2023",
      desc: "Developed a new version of a real estate management application, from conception to production.",
      descBullets: [
        "Migrated the codebase from Vue.js 2 and Carbon to Vue.js 3 and Tailwind CSS.",
        "Implemented and maintained a fully tested RESTful API using Laravel.",
        "Implemented real estate maps using Leaflet.js.",
        "Refactored legacy code by creating reusable components",
        "Optimized rest endpoint from 1000ms to 500ms response time"
      ]
    },
    {
      role: "FreeLancer Full-Stack Developer",
      company: "LinkedIn Services",
      companylogo: require("./assets/images/linkedin.jpg"),
      date: "may 2021 – present",
      desc: "Developed and maintained web applications for clients.",
      descBullets: [
        "understand and translate business goals and requirements from cross-functional directors into strategic technical plans and projects",
        "Design, code, test, debug, maintain web applications using PHP, Javascript, Laravel, Tailwind CSS, React.js, Node.js, and Express.",
        "new features and bug fixes, upgrade for existing applications",
        "Implement security measures and wrote clean, maintainable code",
        "Worked in a continuous delivery environment using GitHub Flow, CI/CD, and Jira."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showOpenSource: false, // Set true or false to show Contact profile using Github, defaults to true
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/groove.png"),
      projectName: "Groove Digital",
      projectDesc:
        "The Better Way To Build Funnels And Sell Digital Products",
      footerLink: [
        {
          name: "Visit In LinkedIn",
          url: "https://www.linkedin.com/company/Groovecm/"
        },
        {
          name: "Visit Website",
          url: "https://groove.cm/"
        }
      ]
    },
    {
      image: require("./assets/images/5g.png"),
      projectName: "5GWorldPro",
      projectDesc:
        "5GWorldPro.com provides 5G training and consulting services to many telcos and institutions, and gives last 5G news and 5G knowledge.",
      footerLink: [
        {
          name: "Visit In LinkedIn",
          url: "https://www.linkedin.com/company/5gworldpro/"
        },
        {
          name: "Visit Website",
          url: "https://www.5gworldpro.com/"
        }
      ]
    },
    {
      image: require("./assets/images/rest.jpg"),
      projectName: "MyRestAi",
      projectDesc:
        "Utilize all available new technologies and data to optimize your business and increase your revenue.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://myrestai.com/"
        },
        {
          name: "Visit In LinkedIn",
          url: "https://www.linkedin.com/company/myrestai/about/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Laravel skills",
      subtitle:
        "Craft elegant, secure, scalable web apps with Laravel, a PHP MVC framework. Develop full-stack projects in this fast-paced course.",
      image: require("./assets/images/laravel.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/3752d01a2db85ecc20047583180f8403c61423497f2e186948df0cd9989e5182"
        }
      ]
    },
    {
      title: "Development with Mern Stack",
      subtitle:
        "Course of 27.5 hours to learn Mern Stack with React, Next js, Redux, Nodejs, Expressjs and MongoDB",
      image: require("./assets/images/mern.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/57977df148b3189f1ebf5b1cd337c1e1ccd3e6a346459b59dd438ccc9a923c0d"
        },
        {
          name: "Course",
          url: "https://www.linkedin.com/learning/paths/explore-app-development-with-the-mern-stack"
        }
      ]
    },

    {
      title: "Postman API Student Expert",
      subtitle:
        "Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.",
      image: require("./assets/images/postman.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/97GMffoyS1CGPcuF40YHwg?identity__email=abdessamadbattal@gmail.com"
        },
        {
          name: "Final Project",
          url: "https://www.postman.com/crimson-crater-867589/workspace/api-fundamentals-student-expert/overview"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212-633477807",
  email_address: "abdessamadbattal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
