import type {Metadata} from "next";
import {RealEstateTaxClientContent} from "@/components/page-specific/RealEstateTaxClientContent";

// Metadata from Optimization Plan (Section 11)
export const metadata: Metadata = {
    title: 'Real Estate Tax Services in Ontario | HTPA Accounting',
    description: 'HTPA provides specialized real estate tax services for Ontario property owners, investors, and landlords. Expert guidance on property transfers, rental income, and deductions.',
};

// FAQ Schema Structure
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the Principal Residence Exemption (PRE)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Principal Residence Exemption allows Canadian homeowners to potentially eliminate capital gains tax when they sell the property designated as their principal residence. Specific rules apply regarding eligibility and the number of years designated."
            }
        },
        {
            "@type": "Question",
            "name": "What expenses can I deduct for my rental property?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common deductible expenses include mortgage interest (but not principal), property taxes, insurance, utilities (if paid by owner), maintenance and repairs, advertising, property management fees, and Capital Cost Allowance (CCA) on the building itself."
            }
        },
        {
            "@type": "Question",
            "name": "Do I pay HST when buying a resale home?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Generally, HST does not apply to the purchase of a resale residential property. However, HST usually applies to newly constructed homes or substantially renovated homes purchased from a builder."
            }
        },
        {
            "@type": "Question",
            "name": "What is a Section 116 Clearance Certificate?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When a non-resident sells taxable Canadian property (like real estate), the buyer is required to withhold a portion of the purchase price unless the non-resident seller obtains a clearance certificate from the CRA confirming appropriate tax arrangements have been made."
            }
        },
        {
            "@type": "Question",
            "name": "How does changing property use affect taxes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Changing the use of a property (e.g., from principal residence to rental or vice-versa) can trigger a 'deemed disposition' for tax purposes, potentially resulting in capital gains tax. Specific rules and elections apply, making professional advice crucial."
            }
        }
        // Add more FAQs as needed
    ]
};

// Service Schema Structure
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Tax Services",
    "provider": {
        "@type": "AccountingService",
        "name": "HTPA Accounting"
    },
    "areaServed": {
        "@type": "Place",
        "name": "Ontario, Canada"
    },
    "description": "Specialized tax services for Ontario real estate transactions and ownership, including property purchase/sale planning, rental income management, principal residence exemption, property use changes, and non-resident tax issues.",
    "name": "Ontario Real Estate Tax Services",
    "potentialAction": {
        "@type": "ReserveAction",
        "name": "Book a consultation"
    }
    // Add more service details if necessary
};

// Refactored Server Component
function RealEstateTaxPage() {
    return (
        <>
            {/* JSON-LD Script for FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            {/* JSON-LD Script for Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />
            {/* Render the Client Component with FAQ data */}
            <RealEstateTaxClientContent faqSchema={faqSchema}/>
        </>
    );
}

export default RealEstateTaxPage;
