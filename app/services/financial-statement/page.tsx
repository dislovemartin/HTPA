import React from 'react';
import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {BarChartBig, CheckSquare, FileText, HelpCircle, Lightbulb, Star} from 'lucide-react'; // Example icons

export const metadata: Metadata = {
    title: 'Financial Statement Preparation & Analysis | HTPA Accounting Ontario',
    description: 'HTPA\'s licensed accountants provide expert financial statement services for Ontario businesses. Accurate reporting, insightful analysis, and regulatory compliance.',
};

// Define interface for structured data (reuse or create a generic one if applicable)
interface FinancialServiceData {
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

const FinancialStatementPage: React.FC = () => {

    // JSON-LD Structured Data for the service
    const serviceSchema: FinancialServiceData = {
        '@context': 'https://schema.org',
        '@type': 'FinancialService', // Or a more specific type like 'AccountingService'
        name: 'Financial Statement Services',
        description: 'Expert financial statement preparation, analysis, and reporting for Ontario businesses.',
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
            question: 'How often should financial statements be prepared?',
            answer: 'Frequency depends on business needs and reporting requirements. Monthly or quarterly is common for internal management, while annually is standard for external reporting.'
        },
        {
            id: 'faq2',
            question: 'What information is needed to prepare financial statements?',
            answer: 'Accurate bookkeeping records are essential, including income/expense details, asset/liability schedules, and cash flow information. We provide guidance on necessary documentation.'
        },
        {
            id: 'faq3',
            question: 'What are the key financial statements?',
            answer: 'The primary statements are the Income Statement (Profit & Loss), Balance Sheet, and Cash Flow Statement. Each provides a different perspective on financial health.'
        },
        {
            id: 'faq4',
            question: 'How can financial statements help my business decisions?',
            answer: 'They provide crucial insights into profitability, liquidity, solvency, and operational efficiency, informing strategic decisions about budgeting, investment, and growth.'
        },
        {
            id: 'faq5',
            question: 'Are these statements compliant with accounting standards?',
            answer: 'Yes, we prepare financial statements in accordance with relevant accounting standards (e.g., ASPE or IFRS) based on your business requirements.'
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
                Financial Statement Services for Ontario Businesses
            </h1>

            <p className="text-lg text-center mb-12 text-muted-foreground">
                Ensure accurate reporting, gain insightful analysis, and maintain regulatory compliance with HTPA's
                expert financial statement services.
            </p>

            {/* Section 1: Types of Financial Statements */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <FileText className="mr-3 h-6 w-6 text-primary"/>
                        Types of Financial Statements We Prepare
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        We prepare a comprehensive suite of financial statements to provide a clear picture of your
                        company's financial position and performance.
                    </p>
                    {/* Placeholder for detailed explanations */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li><strong>Income Statement (Profit & Loss):</strong> Shows revenues, expenses, and
                            profitability over a specific period.
                        </li>
                        <li><strong>Balance Sheet:</strong> Presents assets, liabilities, and equity at a specific point
                            in time.
                        </li>
                        <li><strong>Cash Flow Statement:</strong> Tracks the movement of cash in and out of the
                            business.
                        </li>
                        <li><strong>Statement of Retained Earnings:</strong> Details changes in retained earnings over a
                            period.
                        </li>
                        <li>Notes to Financial Statements: Provides additional context and detail.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 2: When Your Business Needs Financial Statements */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <CheckSquare className="mr-3 h-6 w-6 text-primary"/>
                        When Your Business Needs Financial Statements
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Financial statements are crucial for various purposes, both internal and external, throughout
                        the lifecycle of your business.
                    </p>
                    {/* Placeholder for industry/scenario considerations */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Securing loans or investment capital.</li>
                        <li>Making informed internal management decisions.</li>
                        <li>Meeting regulatory or compliance requirements.</li>
                        <li>Reporting to shareholders or partners.</li>
                        <li>Planning for business sale or succession.</li>
                        <li>Tax planning and preparation.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 3: Our Financial Statement Process */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <BarChartBig className="mr-3 h-6 w-6 text-primary"/>
                        Our Financial Statement Process
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Our streamlined process ensures accuracy, compliance, and timely delivery of your financial
                        statements.
                    </p>
                    {/* Placeholder for detailed steps */}
                    <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                        <li>Data Collection & Verification: Gathering and confirming the accuracy of your financial
                            data.
                        </li>
                        <li>Statement Preparation: Compiling the Income Statement, Balance Sheet, and Cash Flow
                            Statement.
                        </li>
                        <li>Analysis & Review: Analyzing trends, ratios, and performing internal reviews for accuracy.
                        </li>
                        <li>Client Discussion: Presenting the draft statements and discussing key findings.</li>
                        <li>Finalization & Delivery: Issuing the final financial statements and accompanying notes.</li>
                    </ol>
                </CardContent>
            </Card>

            {/* Section 4: How Financial Statements Benefit Your Business */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <Lightbulb className="mr-3 h-6 w-6 text-primary"/>
                        How Financial Statements Benefit Your Business
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        Beyond compliance, well-prepared financial statements are powerful tools for strategic
                        decision-making and business growth.
                    </p>
                    {/* Placeholder for detailed benefits/insights */}
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                        <li>Measure Performance: Track profitability and operational efficiency over time.</li>
                        <li>Identify Trends: Spot opportunities and potential issues early.</li>
                        <li>Improve Decision-Making: Support budgeting, forecasting, and investment choices.</li>
                        <li>Enhance Credibility: Build trust with lenders, investors, and suppliers.</li>
                        <li>Benchmark Performance: Compare your results against industry standards.</li>
                    </ul>
                </CardContent>
            </Card>

            {/* Section 5: Financial Statement FAQ */}
            <Card className="mb-12 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-secondary-foreground">
                        <HelpCircle className="mr-3 h-6 w-6 text-primary"/>
                        Financial Statement FAQ
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
                        Why Choose HTPA for Financial Reporting
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-secondary-foreground mb-4">
                        HTPA delivers accurate, compliant, and insightful financial reporting tailored to your business
                        needs.
                    </p>
                    {/* Placeholder for differentiation points and testimonials */}
                    <ul className="list-disc pl-6 text-secondary-foreground space-y-2">
                        <li>Accuracy & Compliance: Ensuring adherence to accounting standards.</li>
                        <li>Timely Reporting: Delivering statements when you need them.</li>
                        <li>Actionable Insights: Providing analysis beyond just the numbers.</li>
                        <li>Experienced Professionals: Leveraging the expertise of licensed accountants.</li>
                        <li>Personalized Service: Tailoring our approach to your specific industry and goals.</li>
                        {/* Add client testimonials focusing on reporting quality and insights */}
                    </ul>
                    {/* Add CTA button here */}
                </CardContent>
            </Card>

        </div>
    );
};

export default FinancialStatementPage;
