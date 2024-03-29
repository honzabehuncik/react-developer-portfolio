import firstProjectImage from './assets/imgs/first_project.jpg';
import secondProjectImage from './assets/imgs/second_project.png';
import thirdProjectImage from './assets/imgs/third_project.jpg';

import johnDoe from './assets/imgs/john_doe.png';


export const introdata = {
    title: "Honza Běhunčík"
};


export const focusData = [
    "Student",
    "Vývojář",
    "Grafik",
    "Kytarista"
];


export const skills = [
    { name: "HTML", value: "86%" },
    { name: "CSS", value: "82%" },
    { name: "SQL", value: "70%" },
    { name: "React", value: "74%" },
    { name: "C#", value: "58%" },
    { name: "PHP", value: "40%" },
    { name: "Premiere Pro", value: "63%" },
    { name: "Photoshop", value: "72%" },
    { name: "Next.js", value: "48%" }
].sort((a, b) => parseFloat(b.value) - parseFloat(a.value));



export const feedbacks = [
    {
        author: 'John Doe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum ligula, congue nec quam a, fermentum consectetur tortor.',
        image: johnDoe,
    },
    {
        author: 'Jane Smith',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum ligula, congue nec quam a, fermentum consectetur tortor.',
        image: johnDoe,
    }
];



export const projects = [
    {
        title: 'UX/UI design',
        description: 'Návrh UX/UI designu pro osobní portfolio',
        image: firstProjectImage,
        technologies: ['figma', 'photoshop']
    },
    {
        title: 'Vývoj webové aplikace',
        description: 'Backend a frontend vývoj webu pro kino',
        image: secondProjectImage,
        technologies: ['php', 'css', 'mysql', 'figma']
    },
    {
        title: 'Grafický design',
        description: 'Grafický design plakátu na hudební akci',
        image: thirdProjectImage,
        technologies: ['photoshop']
    },
];


export const socials = [
    {
        site: 'Email',
        link: 'honzabehuncik@gmail.com',
    },
    {
        site: 'GitHub',
        link: 'https://github.com/honzabehuncik',
    },
    {
        site: 'LinkedIn',
        link: 'https://www.linkedin.com/in/honza-behuncik',
    },
    {
        site: 'Instagram',
        link: 'https://instagram.com/honza.behuncik',
    },
    {
        site: 'Threads',
        link: 'https://www.threads.net/@honza.behuncik',
    }
];
