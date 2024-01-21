import firstProjectImage from './assets/imgs/first_project.png';
import secondProjectImage from './assets/imgs/second_project.png';
import thirdProjectImage from './assets/imgs/third_project.png';

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


export const skills = {
    html: "86%",
    css: "82%",
    sql: "70%",
    react: "64%",
    csharp: "58%",
    php: "40%"
};


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
        title: 'Vývoj webové stránky',
        description: 'Vývoj webové stránky',
        image: firstProjectImage,
        technologies: ['html', 'css', 'react']
    },
    {
        title: 'Vývoj webové stránky',
        description: 'Vývoj webové stránky',
        image: secondProjectImage,
        technologies: ['html', 'css', 'node', 'redux']
    },
    {
        title: 'Vývoj webové stránky',
        description: 'Vývoj webové stránky',
        image: thirdProjectImage,
        technologies: ['react', 'html', 'css']
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
        link: 'https://www.linkedin.com/in/honza-behuncik/',
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
