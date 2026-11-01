export type ProjectStatus = 'live' | 'progress' | 'experiment' | 'idea'

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
        name: "Mood Reactions",
        cat: "consumer",
        catLabel: "Consumer Apps",
        status: "live",
        desc: "Chrome extension that pops up a reaction GIF when a payment goes through, a login fails, or a site breaks.",
        what: "Detects moments like payment success, login failures and error pages from what the page says, entirely in the browser. Paid product with yearly licenses.",
        stack: "Chrome Extension · Dodo Payments",
        link: "/mood-reactions"
    },
    {
        name: "Meal Recommendation Engine",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "experiment",
        desc: "AI-powered meal recommendation system, built for personal use.",
        what: "Personalised meal suggestions based on preferences and dietary constraints. Personal project.",
        stack: "AI APIs · Web"
    },
    {
        name: "Resume Tailoring Bot",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "experiment",
        desc: "Telegram bot that tailors resumes to specific job descriptions using AI.",
        what: "Paste a JD, get a tailored resume. Built with Python, OpenAI APIs, Telegram API, Reportlab. Deployed on Fly.io.",
        stack: "Python · OpenAI · Telegram API · Fly.io"
    },
    {
        name: "NIFTY Options Trading Bot",
        cat: "ai",
        catLabel: "AI + Automation",
        status: "idea",
        desc: "Algorithmic trading bot for NIFTY options with backtesting. Paper trading dev done, not yet validated.",
        what: "Algo-driven options strategy execution with a full backtesting suite. Deployed on DigitalOcean.",
        stack: "Python · DigitalOcean",
        next: "Validation and live testing"
    },
    {
        name: "Non-Custodial Crypto Payments",
        cat: "startup",
        catLabel: "Startup Ideas",
        status: "idea",
        desc: "UPI-style crypto payment platform. Non-custodial, privacy-first.",
        what: "Decentralised payment flows using Transak SDK and Firebase. No custody of user funds.",
        stack: "Firebase · Transak SDK",
        next: "On hold"
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
        name: "Android Bug Reproduction Tool",
        cat: "dev-tools",
        catLabel: "Developer Tools",
        status: "idea",
        desc: "Record, reproduce and document Android bugs automatically. A B2B tool for QA and dev teams.",
        what: "Structured bug capture with automatic reproduction steps, cutting the back-and-forth between QA and developers.",
        stack: "TBD",
        next: "Scoping and validation"
    }
]
