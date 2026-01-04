export interface Project {
    id: number | string;
    name: string;
    description: string;
    url: string;
    image: string;
    tags: string[];
}

export const projects: Project[] = [
    // Team Portfolios added at the top of the grid
    {
        id: "p1",
        name: "Victorraj Portfolio",
        description: "Official signature portfolio of Victorraj.",
        url: "https://myportfoliorepo.netlify.app",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
        tags: ["Signature", "Portfolio"]
    },
    {
        id: "p2",
        name: "Kaustubh Portfolio",
        description: "Official signature portfolio of Kaustubh.",
        url: "https://kaustubh7-portfolio.netlify.app",
        image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&q=80",
        tags: ["Signature", "Portfolio"]
    },
    {
        id: "p3",
        name: "Piyush Portfolio",
        description: "Official signature portfolio of Piyush.",
        url: "https://piyushnirmalportfolio.netlify.app/",
        image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80",
        tags: ["Signature", "Portfolio"]
    },
    // Original Website Templates
    {
        id: 6,
        name: "Scrollscape – Tourism Lux",
        description: "Immersive travel guide and luxury tourism experience.",
        url: "https://scrollscape-frontend.netlify.app/",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 5,
        name: "AuraAsync – Luxury Fashion",
        description: "High-end fashion boutique with integrated e-commerce and inventory management.",
        url: "https://auraasync.in",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
        tags: ["Frontend", "Backend", "Database"]
    },
    {
        id: 8,
        name: "Real Estate – Core3 Lux",
        description: "Luxury property listings and real estate management portal.",
        url: "https://real-estate-core3.netlify.app/",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 7,
        name: "Advocate & Law Firm",
        description: "Professional medical and legal representation portal.",
        url: "https://lawfirm-advocate.netlify.app/",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 1,
        name: "CORE3 – Main Agency Site",
        description: "Official agency portal and service hub (Under Development).",
        url: "https://core123.netlify.app/",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 4,
        name: "Kavacchh Health Hub",
        description: "Secure health management and wellness platform.",
        url: "https://kavacchh.netlify.app/",
        image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80",
        tags: ["Health", "Web"]
    },
    {
        id: 9,
        name: "Streetwear & Shoe Market",
        description: "High-end e-commerce template for footwear.",
        url: "https://polite-blini-ac02ab.netlify.app/",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 2,
        name: "PC Marketplace & Setup",
        description: "Premium hardware marketplace for PC enthusiasts.",
        url: "https://pcsetup.netlify.app/",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 10,
        name: "ResuCraft Builder",
        description: "Interactive resume creation and portfolio tool.",
        url: "https://resucraft-kaustubh.netlify.app/",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
        tags: ["Frontend"]
    },
    {
        id: 3,
        name: "FRA Act Portal (SIH)",
        description: "Official government legislative portal and document management system.",
        url: "https://hackathonfra.netlify.app/",
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=800&q=80",
        tags: ["Frontend", "Backend", "Database"]
    }
];
