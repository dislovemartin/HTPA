import type {Metadata} from "next";
import {TaxPlanningClientContent} from "@/components/page-specific/TaxPlanningClientContent";

// Metadata from Optimization Plan
export const metadata: Metadata = {
    title: "Comprehensive Tax Planning Services in Ontario | HTPA Accounting",
    description:
        "HTPA Accounting provides strategic tax planning services for individuals and businesses in Ontario. Minimize liabilities, maximize savings, and achieve financial goals.",
    keywords: [
        "tax planning services Ontario",
        "strategic tax planning",
        "individual tax planning",
        "business tax planning",
        "RRSP contribution planning",
        "TFSA optimization",
        "income splitting strategies",
        "corporate tax planning",
        "personal tax advisor"
    ],
};

// Define FAQ Schema Data for Tax Planning
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is tax planning and why is it important?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tax planning is the analysis of a financial situation or plan to ensure that all elements work together to allow you to pay the lowest taxes possible. It's important because it helps minimize tax liabilities, maximize savings, free up cash flow for investment or spending, and achieve long-term financial goals legally and efficiently."
            }
        },
        {
            "@type": "Question",
            "name": "When is the best time to start tax planning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best time for tax planning is year-round, not just during tax season. Proactive planning allows for strategic decisions throughout the year regarding income, investments, and expenses to optimize your tax position before the year ends. Starting early provides more opportunities to implement effective strategies."
            }
        },
        {
            "@type": "Question",
            "name": "Can tax planning help both individuals and businesses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Individuals can benefit through strategies like RRSP and TFSA maximization, income splitting opportunities, investment tax planning, retirement planning, and claiming all eligible deductions and credits to reduce your annual tax burden. Businesses can leverage planning for corporate structure optimization, owner compensation strategies (salary vs. dividends), capital cost allowance claims, expense management, succession planning, and navigating complex compliance requirements."
            }
        },
        {
            "@type": "Question",
            "name": "What are some common tax planning strategies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common strategies include maximizing RRSP contributions, utilizing TFSAs effectively, income splitting with family members (where permissible), timing income and deductions, claiming all eligible tax credits and deductions, choosing the right business structure, and planning for capital gains or losses."
            }
        },
        {
            "@type": "Question",
            "name": "How does HTPA develop a personalized tax plan?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We start with a thorough understanding of your financial situation, goals, and risk tolerance. We analyze your income sources, investments, business structure (if applicable), and family situation. Based on this, we identify relevant strategies, quantify potential savings, and create a clear, actionable plan tailored to your unique circumstances."
            }
        }
    ]
};

// Refactored Server Component
function TaxPlanningPage() {
    return (
        <>
            {/* JSON-LD Script for FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            {/* Render the Client Component with FAQ data */}
            <TaxPlanningClientContent faqSchema={faqSchema}/>
        </>
    );
}

export default TaxPlanningPage;