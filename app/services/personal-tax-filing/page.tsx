import type {Metadata} from "next";
import PersonalTaxFilingClientContent from '@/components/page-specific/PersonalTaxFilingClientContent';

// Metadata from Sample 1
export const metadata: Metadata = {
    title: "Professional Personal Tax Filing Services in Ontario | HTPA Accounting",
    description:
        "HTPA's licensed accountants provide expert personal tax filing services in Ontario. Maximize refunds, ensure compliance, and reduce stress. Book a consultation today.",
    keywords: [ // Added keywords from the plan
        "personal tax filing Ontario",
        "tax return preparation",
        "T4 tax filing",
        "self-employed tax filing",
        "investment income tax",
        "student tax filing",
        "retirement tax planning",
        "CRA tax filing",
        "accountant tax preparation"
    ],
};

// Define FAQ Schema Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Should I hire a personal accountant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiring a personal accountant provides professional financial support, ensuring accuracy and compliance in tax filing, especially when you have complex income sources, need multiple tax deductions, or plan long-term tax savings. HTPA's licensed accounting team's professional guidance not only helps you legally reduce taxes but also avoids common errors in filing, preventing unnecessary CRA inquiries or penalties."
            }
        },
        {
            "@type": "Question",
            "name": "What information do I need to provide for my first tax filing with HTPA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Please prepare the following information for a smooth first-time tax filing: Personal information (name, birthdate, gender, SIN number, marital status, spouse's name, birthdate, and gender), Contact information (phone and email), Family information (children details), Residence information (province), Address, Identity information (citizen/resident status), First-time filing status, Foreign assets (over $100k), Property changes, Previous year's T1 General (if applicable), All income documents including T4, T4A, T3, T5, etc."
            }
        },
        {
            "@type": "Question",
            "name": "After submitting my tax return, how long will it take to receive a refund?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Typically, refunds for electronically filed returns arrive within 2-3 weeks, while paper filings take about 4-6 weeks. HTPA will help you choose the appropriate refund method to ensure fast and efficient refund processing."
            }
        },
        {
            "@type": "Question",
            "name": "What expenses can be deducted or exempted from personal income tax?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "In Canada, expenses meeting the following conditions can be deducted or exempted: Medical expenses, Tuition and education expenses, Registered Retirement Savings Plan (RRSP) contributions, Self-employment related expenses (such as home office expenses, transportation costs), Relocation expenses (when meeting conditions), Charitable donations."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle self-employment income and expenses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We help self-employed individuals accurately report their business income and identify all eligible business expenses using Form T2125 (Statement of Business or Professional Activities). This includes home office expenses, vehicle costs, supplies, and more, ensuring you minimize your tax payable while staying compliant."
            }
        },
        {
            "@type": "Question",
            "name": "What's the difference between tax credits and tax deductions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tax deductions reduce your taxable income (e.g., RRSP contributions), while tax credits directly reduce the amount of tax you owe (e.g., tuition credits, charitable donations). Credits can be non-refundable (reduce tax to zero) or refundable (can result in a refund even if you owe no tax). We ensure you claim all applicable deductions and credits."
            }
        }
        // Add more questions if needed based on plan
    ]
};

// Define Service Schema Data
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Personal Tax Filing",
    "provider": { // Simplified for now, ideally link to a full LocalBusiness schema
        "@type": "AccountingService", // or ProfessionalService
        "name": "HTPA Accounting",
        "url": "https://www.htpa.ca", // Replace with actual URL
        "telephone": "+1-XXX-XXX-XXXX" // Replace with actual phone
    },
    "areaServed": {
        "@type": "Place",
        "name": "Ontario, Canada"
    },
    "description": metadata.description,
    "name": metadata.title
};

export default function PersonalTaxFilingPage() {
    return (
        <>
            {/* Inject JSON-LD schema data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />
            {/* Render the client component */}
            <PersonalTaxFilingClientContent/>
        </>
    );
}
