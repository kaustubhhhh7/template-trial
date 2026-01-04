export interface TeamMember {
    id: number;
    name: string;
    description: string;
    portfolioUrl: string;
    image: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Victorraj",
        description: "Frontend-focused developer & UI designer.",
        portfolioUrl: "https://myportfoliorepo.netlify.app",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=80"
    },
    {
        id: 2,
        name: "Kaustubh",
        description: "Full-stack developer & UI architect.",
        portfolioUrl: "https://kaustubh7-portfolio.netlify.app",
        image: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&q=80"
    },
    {
        id: 3,
        name: "Piyush",
        description: "Developer with strong analytical and backend skills.",
        portfolioUrl: "https://piyushnirmalportfolio.netlify.app/",
        image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&q=80"
    }
];
