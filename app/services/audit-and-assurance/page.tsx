import React from 'react';
import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {BarChart, Building, CheckCircle, HelpCircle, ShieldCheck, Star} from 'lucide-react'; // Example icons

export const metadata: Metadata = {
    title: 'Professional Audit & Assurance Services in Ontario | HTPA Accounting',
    description: 'HTPA provides comprehensive audit and assurance services to help Ontario businesses verify financial accuracy, ensure compliance, and build stakeholder confidence.',
};

// Define interface for structured data (reuse or create a generic one if applicable)
interface ServiceData {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    provider: {
        '@type': string;
        name: string;
        // Add more provider details if available (address, telephone etc.)
    };
    // Add other relevant service properties
}

const AuditAndAssurancePage: React.FC = () => {

    // JSON-LD Structured Data for the service
    const serviceSchema: ServiceData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService', // Or a more specific type like 'AccountingService'
        name: 'Audit & Assurance Services',
        description: 'Comprehensive audit and assurance services for Ontario businesses.',
        provider: {
            '@type': 'AccountingService', // Or 'Organization'
            name: 'HTPA Accounting',
            // url: 'Your website URL',
            // logo: 'URL to your logo',
            // address: { ... }
            // telephone: '...'
        },
        // areaServed: { ... } // Define service area if applicable
        // Add more properties as needed
    };

    const faqItems = [
        {
            id: 'faq1',
            question: 'How often do businesses need an audit?',
            answer: 'The frequency depends on factors like regulatory requirements, loan covenants, and stakeholder demands. We can help determine the appropriate frequency for your business.'
        },
        {
            id: 'faq2',
            question: 'How should we prepare for an audit?',
            answer: 'Preparation involves organizing financial records, ensuring documentation is complete, and making key personnel available. We provide a detailed checklist beforehand.'
        },
        {
            id: 'faq3',
            question: 'What are the potential outcomes of an audit?',
            answer: 'Outcomes range from an unqualified (clean) opinion to qualified, adverse, or disclaimer opinions, depending on the findings. We discuss all findings and recommendations thoroughly.'
        },
        {
            id: 'faq4',
            question: 'What is the difference between an audit and a review?',
            answer: 'An audit provides the highest level of assurance through extensive testing, while a review offers limited assurance based primarily on inquiry and analytical procedures.'
        },
        {
            id: 'faq5',
            question: 'How long does an audit typically take?',
            answer: 'The duration varies based on the size and complexity of the business, the quality of records, and the scope of the audit. We provide an estimated timeline during the planning phase.'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Inject JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
            />

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
                Audit & Assurance Services for Ontario Businesses
            </h1>

            <p className="text-lg text-center mb-12 text-muted-foreground">
                Verify financial accuracy, ensure compliance, and build stakeholder confidence with HTPA's expert audit
                and assurance services.
            </p>

            {/* Section 1: Types of Audit Services */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <ShieldCheck className="mr-3 h-6 w-6 text-primary"/>
                        Types of Audit Services We Provide
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        We offer a range of audit and assurance services tailored to your specific needs, including
                        financial statement audits, compliance audits, operational audits, and internal control reviews.
                        Each service provides a different level of assurance and focus.
                    </p>
                    {/* Placeholder for detailed explanations */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Financial Statement Audits: Providing the highest level of assurance on your financial
                            statements.
                        </li>
                        <li>Compliance Audits: Ensuring adherence to specific regulations, policies, or contractual
                            agreements.
                        </li>
                        <li>Operational Audits: Evaluating the efficiency and effectiveness of your business
                            operations.
                        </li>
                        <li>Internal Control Reviews: Assessing the design and effectiveness of your internal control
                            systems.
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 2: The HTPA Audit Process */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <BarChart className="mr-3 h-6 w-6 text-primary"/>
                        The HTPA Audit Process
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Our audit process is designed to be thorough, efficient, and minimally disruptive to your
                        operations. We prioritize clear communication and collaboration throughout the engagement.
                    </p>
                    {/* Placeholder for visual representation or steps */}
                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                        <li>Planning & Risk Assessment: Understanding your business and identifying key risk areas.</li>
                        <li>Fieldwork & Testing: Executing audit procedures and gathering evidence.</li>
                        <li>Analysis & Evaluation: Assessing findings and formulating conclusions.</li>
                        <li>Reporting & Communication: Delivering the audit report and discussing findings and
                            recommendations.
                        </li>
                        <li>Follow-up: Assisting with the implementation of recommendations if needed.</li>
                    </ol>
                </CardContent>
            </Card>

            {/* Section 3: Benefits of Professional Audit Services */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <CheckCircle className="mr-3 h-6 w-6 text-primary"/>
                        Benefits of Professional Audit Services
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Engaging professional audit services offers significant advantages beyond mere compliance,
                        enhancing credibility and providing valuable business insights.
                    </p>
                    {/* Placeholder for detailed benefits */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Enhanced Credibility: Increase confidence among lenders, investors, and stakeholders.</li>
                        <li>Improved Internal Controls: Identify weaknesses and opportunities for strengthening
                            controls.
                        </li>
                        <li>Risk Mitigation: Detect potential fraud and errors early.</li>
                        <li>Operational Efficiency: Gain insights into operational effectiveness and potential
                            improvements.
                        </li>
                        <li>Regulatory Compliance: Ensure adherence to required accounting standards and regulations.
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 4: Industries We Serve */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <Building className="mr-3 h-6 w-6 text-primary"/>
                        Industries We Serve
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Our team possesses experience across a diverse range of industries, allowing us to understand
                        the unique challenges and requirements of your specific sector.
                    </p>
                    {/* Placeholder for industry list or specific considerations */}
                    <p className="text-muted-foreground">We provide audit and assurance services to various sectors
                        including (but not limited to): Manufacturing, Retail, Technology, Non-profit Organizations,
                        Real Estate, Construction, Professional Services, and more. We tailor our approach based on
                        industry-specific risks and regulations.</p>
                </CardContent>
            </Card>

            {/* Section 5: Audit & Assurance FAQ */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <HelpCircle className="mr-3 h-6 w-6 text-primary"/>
                        Audit & Assurance FAQ
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item) => (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger className="text-left hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

            {/* Section 6: Why Choose HTPA */}
            <Card className="mb-12 shadow-lg bg-secondary">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <Star className="mr-3 h-6 w-6 text-primary"/>
                        Why Choose HTPA for Your Audit Needs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground mb-4">
                        Choosing the right audit partner is crucial. HTPA offers a combination of expertise, experience,
                        and a client-focused approach.
                    </p>
                    {/* Placeholder for differentiation points and testimonials */}
                    <ul className="list-disc pl-6 text-secondary-foreground space-y-2">
                        <li>Experienced Professionals: Our team comprises licensed accountants with deep audit
                            expertise.
                        </li>
                        <li>Industry Knowledge: We understand the nuances of various sectors in Ontario.</li>
                        <li>Client-Centric Approach: We prioritize clear communication and building long-term
                            relationships.
                        </li>
                        <li>Value-Added Insights: We go beyond compliance to provide actionable business
                            recommendations.
                        </li>
                        <li>Commitment to Quality: Adherence to the highest professional standards.</li>
                        {/* Add client testimonials focusing on audit quality here */}
                    </ul>
                    {/* Add CTA button here */}
                </CardContent>
            </Card>

        </div>
    );
};

export default AuditAndAssurancePage;
