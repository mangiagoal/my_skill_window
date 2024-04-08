export const menuItemsData = [
    {
        title: 'Home',
        url: '/',
    },
    
    {
        title: 'Services',
        url: '/services',
        submenu: [
            {
                title: 'Web Design',
                url: 'web-design',
            },
            
            {
                title: 'Web Development',
                url: 'web-development',
                submenu: [
                    {
                        title: 'Frontend',
                        url: 'frontend',
                    },

                    {
                        title: 'Backend',
                        url: 'backend',
                        submenu: [
                            {
                                title: 'NodeJS',
                                url: "node",
                            },

                            {
                                title: 'PHP',
                                url: "php",
                            },
                        ]
                    },
                ]
            },
            
            {
                title: 'SEO',
                url: 'seo',
            },
        ],
    },
    
    {
        title: 'About',
        url: '/about',
    },
];