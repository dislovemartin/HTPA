import type {Metadata} from "next";
import PageLayout from "@/components/layout/page-layout";
import CorporateTaxClientContent from "@/components/page-specific/CorporateTaxClientContent";

// Metadata from Optimization Plan (Section 2)
export const metadata: Metadata = {
    title: 'Ontario Corporate Tax Filing & Planning Services | HTPA Accounting',
    description: 'HTPA Accounting delivers expert corporate tax filing and planning services for Ontario businesses. Maximize deductions, ensure compliance, and optimize your tax strategy.',
    keywords: ['corporate tax filing Ontario', 'business tax services', 'corporate tax planning', 'tax savings for businesses', 'Ontario business tax compliance', 'HTPA Accounting', 'T2 filing'], // Added T2 filing
};

// FAQ Schema Structure (Based on Section 2 Plan)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "When is the corporate tax filing deadline in Ontario?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Corporations must file their T2 return within six months of their fiscal year-end. However, tax payments are generally due within two or three months (for most CCPCs) of the year-end to avoid interest charges."
            }
        },
        {
            "@type": "Question",
            "name": "What are the common corporate tax deductions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Businesses can deduct legitimate expenses incurred to earn income, such as salaries, rent, utilities, office supplies, professional fees, advertising, and Capital Cost Allowance (CCA) on assets. Specific rules apply."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need professional help for corporate tax filing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "While not legally required, professional help is highly recommended due to the complexity of corporate tax law. Accountants ensure accuracy, compliance, maximize deductions, and offer strategic planning."
            }
        },
        {
            "@type": "Question",
            "name": "What happens if my business is selected for a CRA audit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If selected for an audit, the CRA will review your financial records to verify compliance. Professional representation is crucial to navigate the process, respond to inquiries, and ensure a fair outcome."
            }
        },
        {
            "@type": "Question",
            "name": "What financial documents are required for T2 filing?", // Added based on H2
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Key documents include the General Index of Financial Information (GIFI), income statement, balance sheet, supporting schedules for deductions claimed, shareholder loan accounts, and potentially payroll summaries (T4s)."
            }
        }
        // Add more FAQs as needed
    ]
};

// Service Schema Structure
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Tax Filing & Planning",
    "provider": {
        "@type": "AccountingService",
        "name": "HTPA Accounting"
    },
    "areaServed": {
        "@type": "Place",
        "name": "Ontario, Canada"
    },
    "description": "Comprehensive corporate tax services including T2 filing, strategic tax planning, compliance assurance, and audit support for Ontario businesses.",
    "name": "Ontario Corporate Tax Services",
    "potentialAction": {
        "@type": "ReserveAction",
        "name": "Book a consultation"
    }
    // Add more service details if necessary
};

/**
 * @returns {JSX.Element} The rendered corporate tax page.
 */
const CorporateTaxPage = () => {
    return (
        <PageLayout>
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />

            {/* Render the client component containing the main content */}
            <CorporateTaxClientContent/>
        </PageLayout>
    );
};

export default CorporateTaxPage;
