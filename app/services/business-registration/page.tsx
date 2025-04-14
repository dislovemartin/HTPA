import type {Metadata} from "next";
import BusinessRegistrationClientContent from "@/components/page-specific/BusinessRegistrationClientContent";

// Metadata from Plan
export const metadata: Metadata = {
    title: "Business Registration Services in Ontario | HTPA Accounting",
    description:
        "HTPA Accounting provides expert business registration services in Ontario. Choose the right structure, complete required documentation, and start your business with confidence.",
    keywords: [
        "Ontario business registration",
        "company registration service",
        "incorporate in Ontario",
        "sole proprietorship registration",
        "partnership registration Ontario",
        "federal vs provincial registration",
        "named vs numbered company",
        "business startup services",
        "small business setup Ontario"
    ],
};

// Define FAQ Schema Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between a sole proprietorship, partnership, and corporation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A sole proprietorship is owned by one person with no legal distinction between owner and business. A partnership involves two or more owners sharing profits and liabilities. A corporation is a separate legal entity, offering liability protection but involving more complex setup and compliance."
            }
        },
        {
            "@type": "Question",
            "name": "Should I register federally or provincially?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Provincial registration allows you to operate only within Ontario under your registered name. Federal incorporation allows operation across Canada under one name and offers stronger name protection but involves more complex filing requirements."
            }
        },
        {
            "@type": "Question",
            "name": "How long does the business registration process take?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines vary. Provincial registration (sole proprietorship/partnership) can often be done online within a few days. Incorporation (provincial or federal) typically takes longer, potentially 1-2 weeks or more, depending on name search requirements and processing times."
            }
        },
        {
            "@type": "Question",
            "name": "What are the typical business registration fees?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fees depend on the structure and jurisdiction. Provincial registration for sole proprietorships/partnerships is generally the least expensive. Incorporation involves higher government fees, name search costs, and potentially legal/accounting fees for setup. HTPA can provide a detailed quote."
            }
        },
        {
            "@type": "Question",
            "name": "What do I need to do after registering my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Post-registration steps often include obtaining a business number (BN) from the CRA, registering for specific CRA program accounts like GST/HST and Payroll, registering with WSIB if you have employees, obtaining municipal licenses/permits, and setting up a business bank account."
            }
        }
    ]
};

// Define Service Schema Data
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Registration Service",
    "provider": {
        "@type": "ProfessionalService",
        "name": "HTPA Accounting",
        "address": { // Assuming a primary address, adjust if needed
            "@type": "PostalAddress",
            "streetAddress": "20 Bamburgh Circle",
            "addressLocality": "Scarborough",
            "addressRegion": "ON",
            "postalCode": "M1W 3Y5",
            "addressCountry": "CA"
        },
        "telephone": "+1-YOUR-PHONE-NUMBER", // Replace with actual number
        "url": "https://htpa.ca" // Replace with actual domain if different
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
    },
    "description": "Expert business registration services in Ontario, including structure selection, federal/provincial registration, and post-registration guidance.",
    "keywords": ["Ontario business registration", "company registration", "incorporation", "sole proprietorship", "partnership", "business setup"]
};

export default function BusinessRegistrationPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />

            <BusinessRegistrationClientContent faqSchema={faqSchema}/>
        </>
    );
}