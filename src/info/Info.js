import sinxia from "../img/sinxia.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255, 0, 170)", "rgb(166,104,255)" ,"rgb(255, 210, 104)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Phakkhanan",
    lastName: "Nakkoed",
    initials: "Sin", // the example uses first and last, but feel free to use three or more if you like.
    position: "a student",
    selfPortrait: sinxia, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji:"☕",
            text: 'fueled by tea'
        },
        {
            emoji:"🌏",
            text:'based in the thailand'
        },
        {
            emoji:"🎓",
            text:'Studying at KMUTNB '
        },
        {
            emoji:"💻",
            text:' ​Department ​Electronics Computer '
        },
        {
            emoji:"📧",
            text:'phakkhanan.nak@gmail.com'
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/Phakkhanan.nak",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/__sinxia/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link:"",
            icon: 'fa fa-github',
            label: 'github'
        }
    ],
    bio:"Hello! I'm Phakkhanan. I'm a student at KMUTNB in Electronics Computer, I enjoy exercising, and I believe that one day, AI will take over all of us. You should hire me, I will try my best!",
    skills:
        {
            elementaryWith: ['java', 'javascript', 'react', 'github', 'bootstrap', 'html5', 'css', 'flutter', 'php'],
            exposedTo: ['nodejs', 'python','dart']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji:  '📖'
        },
        {
            label: 'gym',
            emoji: '🏋️‍♀️'
        },
        {
            label: 'movies',
            emoji: '🎬'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}