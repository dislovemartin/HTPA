import React from 'react';
import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {ClipboardCheck, HelpCircle, Star, TrendingUp, Users, Workflow} from 'lucide-react'; // Example icons

export const metadata: Metadata = {
    title: 'Professional Payroll Services for Ontario Businesses | HTPA Accounting',
    description: 'HTPA provides comprehensive payroll services including tax withholding, reporting, compliance, and record maintenance for Ontario businesses of all sizes.',
};

// Define interface for structured data
interface PayrollServiceData {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    provider: {
        '@type': string;
        name: string;
        // Add more provider details if available
    };
    // Add other relevant service properties
}

const PayrollPage: React.FC = () => {

    // JSON-LD Structured Data for the service
    const serviceSchema: PayrollServiceData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService', // Or 'AccountingService'
        name: 'Payroll Services',
        description: 'Comprehensive payroll management, tax withholding, reporting, and compliance for Ontario businesses.',
        provider: {
            '@type': 'AccountingService', // Or 'Organization'
            name: 'HTPA Accounting',
            // url: 'Your website URL',
            // logo: 'URL to your logo',
            // address: { ... }
            // telephone: '...'
        },
        // areaServed: { ... }
    };

    const faqItems = [
        {
            id: 'faq1',
            question: 'What information is needed to set up payroll?',
            answer: 'We require employee details (SIN, address, banking info), compensation rates, benefit details, and business information (CRA Business Number).'
        },
        {
            id: 'faq2',
            question: 'How are payroll taxes calculated and remitted?',
            answer: 'We calculate CPP, EI, and income tax deductions based on CRA guidelines and remit them on your behalf by the required deadlines.'
        },
        {
            id: 'faq3',
            question: 'Do you handle T4 preparation?',
            answer: 'Yes, we prepare and file accurate T4 slips for all employees and T4 summaries for the CRA at year-end.'
        },
        {
            id: 'faq4',
            question: 'Can you integrate with our existing accounting software?',
            answer: 'We are compatible with various popular accounting software platforms. Please contact us to discuss your specific setup.'
        },
        {
            id: 'faq5',
            question: 'What happens if there is a payroll error?',
            answer: 'We prioritize accuracy, but in the rare event of an error, we work quickly to correct it and ensure compliance.'
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
                Professional Payroll Services in Ontario
            </h1>

            <p className="text-lg text-center mb-12 text-muted-foreground">
                Streamline your payroll processes, ensure compliance, and focus on your core business with HTPA's
                reliable payroll solutions.
            </p>

            {/* Section 1: Comprehensive Payroll Management Solutions */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <Users className="mr-3 h-6 w-6 text-primary"/>
                        Comprehensive Payroll Management Solutions
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Our services cover every aspect of payroll administration, ensuring accuracy and timeliness for
                        your employees.
                    </p>
                    {/* Placeholder for detailed service descriptions */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Accurate calculation of wages, salaries, and deductions.</li>
                        <li>Timely processing and direct deposit options.</li>
                        <li>Management of statutory deductions (CPP, EI, Income Tax).</li>
                        <li>Handling of employee benefits, bonuses, and commissions.</li>
                        <li>Preparation and filing of Records of Employment (ROEs).</li>
                        <li>Secure maintenance of employee payroll records.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 2: Our Payroll Process */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <Workflow className="mr-3 h-6 w-6 text-primary"/>
                        Our Payroll Process
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        We follow a structured process to ensure efficient and accurate payroll management for your
                        business.
                    </p>
                    {/* Placeholder for detailed steps */}
                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                        <li>Initial Setup & Data Collection: Gathering all necessary business and employee
                            information.
                        </li>
                        <li>Payroll Calculation & Verification: Processing payroll data and verifying accuracy.</li>
                        <li>Client Approval: Providing payroll summaries for your review and approval.</li>
                        <li>Payment Processing & Distribution: Issuing payments via direct deposit or cheque.</li>
                        <li>Tax Remittance & Filing: Remitting payroll taxes to the CRA and filing necessary reports.
                        </li>
                        <li>Record Keeping & Reporting: Maintaining records and providing customized reports.</li>
                    </ol>
                </CardContent>
            </Card>

            {/* Section 3: Benefits of Outsourcing Payroll */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <TrendingUp className="mr-3 h-6 w-6 text-primary"/>
                        Benefits of Outsourcing Payroll
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Outsourcing your payroll to HTPA frees up valuable time and resources while ensuring expert
                        handling of this critical function.
                    </p>
                    {/* Placeholder for comparison/detailed benefits */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li><strong>Time Savings:</strong> Eliminate the hours spent on manual payroll processing.</li>
                        <li><strong>Cost Reduction:</strong> Avoid costs associated with payroll software, training, and
                            potential penalties.
                        </li>
                        <li><strong>Compliance Assurance:</strong> Stay up-to-date with constantly changing regulations
                            and tax laws.
                        </li>
                        <li><strong>Enhanced Accuracy:</strong> Reduce the risk of costly errors in calculations and
                            filings.
                        </li>
                        <li><strong>Increased Security:</strong> Benefit from secure data handling and confidentiality.
                        </li>
                        <li><strong>Focus on Core Business:</strong> Redirect your team's efforts towards strategic
                            growth activities.
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 4: Payroll Compliance Requirements */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <ClipboardCheck className="mr-3 h-6 w-6 text-primary"/>
                        Payroll Compliance Requirements
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Navigating the complexities of payroll compliance is essential. We ensure your business meets
                        all federal and provincial requirements.
                    </p>
                    {/* Placeholder for compliance details */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Accurate calculation and remittance of CPP, EI, and income tax.</li>
                        <li>Adherence to Employment Standards Act (ESA) regulations (overtime, vacation pay, etc.).</li>
                        <li>Proper classification of employees vs. contractors.</li>
                        <li>Timely filing of T4s, T4 summaries, and ROEs.</li>
                        <li>Maintaining compliant payroll records.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 5: Payroll Services FAQ */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <HelpCircle className="mr-3 h-6 w-6 text-primary"/>
                        Payroll Services FAQ
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
                        Why Choose HTPA for Your Payroll Needs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground mb-4">
                        HTPA provides reliable, accurate, and confidential payroll services tailored to the unique needs
                        of Ontario businesses.
                    </p>
                    {/* Placeholder for differentiation points and testimonials */}
                    <ul className="list-disc pl-6 text-secondary-foreground space-y-2">
                        <li>Dedicated Payroll Specialists: Expertise in Canadian payroll regulations.</li>
                        <li>Reliability & Timeliness: Ensuring your employees are paid correctly and on time.</li>
                        <li>Confidentiality & Security: Protecting sensitive employee and business data.</li>
                        <li>Scalable Solutions: Services that grow with your business.</li>
                        <li>Personalized Support: Direct access to our payroll team for questions.</li>
                        {/* Add client testimonials focusing on reliability and accuracy */}
                    </ul>
                    {/* Add CTA button here */}
                </CardContent>
            </Card>

        </div>
    );
};

export default PayrollPage;
