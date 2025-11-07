export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    officeHours?: string;
    email?: string;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://DonSnyd.github.io/PortfolioSite',
    title: 'Donovan Snyder',
    // subtitle: 'Donovan Snyder\'s Home page',
    description: 'Everything you would want to know about Donovan Snyder',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    officeHours: 'By email appointment for Fall 2025, in Hylan 710 or on Zoom',
    email: 'dsnyd15(at)ur.rochester(dot)edu',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/PortfolioSite'
        },
        {
            text: 'About',
            href: '/PortfolioSite/about'
        },
        {
            text: 'Research',
            href: '/PortfolioSite/research'
        },
        {
            text: 'Teaching',
            href: '/PortfolioSite/teaching'
        },
        {
            text: 'Mentoring',
            href: '/PortfolioSite/mentoring'
        },
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    // socialLinks: [
    //     {
    //         text: 'Dribbble',
    //         href: 'https://dribbble.com/'
    //     },
    //     {
    //         text: 'Instagram',
    //         href: 'https://instagram.com/'
    //     },
    //     {
    //         text: 'X/Twitter',
    //         href: 'https://twitter.com/'
    //     }
    // ],
    hero: {
        // title: 'Welcome to my Site!',
        text: "Welcome! I'm currently a fifth year graduate student in the Math Department of the University of Rochester.",
        image: {
            src: '/PortfolioSite/SnyderHeadshot.JPG',
            alt: 'A person standing in front of a glass background'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/PortfolioSite/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
