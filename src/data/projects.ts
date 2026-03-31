export type ProjectStatus = 'live' | 'progress' | 'idea'

export interface Project {
    name: string
    cat: 'dev-tools' | 'consumer' | 'ai' | 'startup'
    catLabel: string
    status: ProjectStatus
    desc: string
    what: string
    stack: string
    next?: string
    link?: string
}

export const projects: Project[] = [
    {
        name: "JSON parser and developer toolkit",
        cat: "dev-tools",
        catLabel: "Developer Tools",
        status: "live",
        desc: "Started as a JSON parser, expanding into a 28-tool developer toolkit suite. Phase 2 live.",
        what: "A comprehensive toolkit for developers — JSON parsing, formatting, diffing, conversion, and more. Branded as Antigravity.",
        stack: "Astro · Tailwind · Vercel",
        next: "Expanding to 28 tools",
        link: "https://parsejsononline.com"
    },
    {
        name: "Tez Billing",
        cat: "consumer",
        catLabel: "Consumer Apps",
        status: "live",
        desc: "Invoice generator for freelancers and small businesses. Phase 1 live on tezbilling.com.",
        what: "Fast, clean invoice generation without signup friction. Built for solo operators.",
        stack: "Web · Firebase",
        link: "https://tezbilling.com"
    },

    {
        name: "Meal Recommendation Engine",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "live",
        desc: "AI-powered meal recommendation system. Phase 2 live — built for personal usage.",
        what: "Personalised meal suggestions based on preferences and dietary constraints. Personal project.",
        stack: "AI APIs · Web"
    },

    {
        name: "Resume Tailoring Bot",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "live",
        desc: "Telegram bot that tailors resumes to specific job descriptions using AI.",
        what: "Paste a JD, get a tailored resume. Built with Python, OpenAI APIs, Telegram API, Reportlab. Deployed on Fly.io.",
        stack: "Python · OpenAI · Telegram API · Fly.io",
        link: "https://t.me/ResumeFitBot"
    },
    {
        name: "NIFTY Options Trading Bot",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "progress",
        desc: "Algorithmic trading bot for NIFTY options with backtesting. Paper trading dev done, not yet validated.",
        what: "Algo-driven options strategy execution with a full backtesting suite. Deployed on DigitalOcean.",
        stack: "Python · DigitalOcean",
        next: "Validation and live testing"
    },
    {
        name: "Non-Custodial Crypto Payments",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "progress",
        desc: "UPI-style crypto payment platform. Non-custodial, privacy-first.",
        what: "Decentralised payment flows using Transak SDK and Firebase. No custody of user funds.",
        stack: "Firebase · Transak SDK",
        next: "Active development"
    },
    {
        name: "Bug Reproduction Tool",
        cat: "dev-tools",
        catLabel: "Developer Tools",
        status: "idea",
        desc: "A tool to help developers reproduce and document bugs consistently.",
        what: "Structured bug capture and reproduction steps — reduces back-and-forth between QA and devs.",
        stack: "TBD",
        next: "Figuring out scope"
    },
    {
        name: "Bachpan Radio",
        cat: "consumer",
        catLabel: "Consumer Apps",
        status: "idea",
        desc: "A nostalgic radio app concept. Still an early idea.",
        what: "Curated audio experience around nostalgia and childhood sounds. Not yet scoped.",
        stack: "TBD",
        next: "Needs more thinking"
    },
    {
        name: "Ad Marketplace",
        cat: "startup",
        catLabel: "Startup Ideas",
        status: "idea",
        desc: "An ad marketplace concept. Needs proper market sizing before committing.",
        what: "Connecting advertisers and publishers in a structured marketplace. Needs competitive research.",
        stack: "TBD",
        next: "Market research first"
    },
    {
        name: "Android Bug Automation Tool",
        cat: "startup",
        catLabel: "Startup Ideas",
        status: "idea",
        desc: "Automate Android bug reproduction — a B2B tool for QA and dev teams.",
        what: "Record, reproduce, and document Android bugs automatically. Strong B2B potential.",
        stack: "TBD",
        next: "Scoping and validation"
    }
]
