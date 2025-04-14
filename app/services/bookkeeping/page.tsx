import type {Metadata} from 'next';
import PageLayout from '@/components/layout/page-layout';
import BookkeepingClientContent from '@/components/page-specific/BookkeepingClientContent';

export const metadata: Metadata = {
    title: 'Professional Bookkeeping Services for Ontario Businesses | HTPA Accounting',
    description: 'HTPA provides expert bookkeeping services that ensure accurate financial records, streamlined operations, and regulatory compliance for Ontario businesses of all sizes.',
    keywords: ['professional bookkeeping services Ontario', 'business financial record management', 'accounts receivable management', 'accounts payable service', 'bank reconciliation service', 'small business bookkeeping', 'HTPA Accounting'],
};

// Define FAQ Schema Data
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What bookkeeping software do you use?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are proficient in various industry-standard bookkeeping software, including QuickBooks Online, QuickBooks Desktop, Xero, and Sage. We can work with your existing software or help you choose and implement the best solution for your business."
            }
        },
        {
            "@type": "Question",
            "name": "How often will I receive financial reports?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The frequency of reporting is tailored to your needs. Typically, we provide monthly reports, but we can arrange for quarterly or even weekly reporting if required for your business management."
            }
        },
        {
            "@type": "Question",
            "name": "Is my financial data secure with HTPA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We prioritize data security and confidentiality. We utilize secure systems for data transfer and storage, and adhere to strict professional standards and privacy regulations."
            }
        },
        {
            "@type": "Question",
            "name": "Can bookkeeping services help with tax preparation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, accurate bookkeeping is essential for efficient tax preparation. Our bookkeeping services ensure your financial records are organized and ready for tax filing, often integrating seamlessly with our corporate or personal tax services, saving you time and potentially reducing tax preparation fees."
            }
        },
        {
            "@type": "Question",
            "name": "What's the difference between an accountant and a bookkeeper?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bookkeeping focuses on recording daily financial transactions. Accounting involves analyzing and interpreting that financial data, preparing financial statements, tax planning, and providing strategic financial advice. HTPA offers both services, often integrated for comprehensive financial management."
            }
        }
    ]
};

// Define Service Schema Data
const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Bookkeeping Services",
    "provider": {
        "@type": "Organization",
        "name": "HTPA Accounting"
    },
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Ontario"
    },
    "description": "HTPA provides expert bookkeeping services that ensure accurate financial records, streamlined operations, and regulatory compliance for Ontario businesses of all sizes.",
    "name": "Professional Bookkeeping Services for Ontario Businesses"
};

export default function BookkeepingPage() {
    return (
        <PageLayout>
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />

            {/* Render the client component containing the main content */}
            <BookkeepingClientContent/>
        </PageLayout>
    );
}
