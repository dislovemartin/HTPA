import React from 'react';
import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {FileText, Globe, HelpCircle, Landmark, ShieldCheck, Users} from 'lucide-react';

export const metadata: Metadata = {
    title: 'International Tax Services for Ontario Residents & Businesses | HTPA Accounting',
    description: 'HTPA specializes in international tax services, helping Ontario residents and businesses with foreign income reporting, asset disclosure, and cross-border tax optimization.',
};

// Define interface for structured data
interface InternationalTaxServiceData {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    provider: {
        '@type': string;
        name: string;
    };
    serviceArea: {
        '@type': string;
        name: string;
    };
    potentialAction: {
        '@type': string;
        name: string;
    };
}

// JSON-LD structured data
const internationalTaxServiceJsonLd: InternationalTaxServiceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'International Tax Services',
    description: 'Comprehensive international tax services including foreign income reporting, asset disclosure (T1135), cross-border tax optimization, and tax treaty applications for Ontario residents and businesses.',
    provider: {
        '@type': 'AccountingService',
        name: 'HTPA Accounting',
    },
    serviceArea: {
        '@type': 'Place',
        name: 'Ontario, Canada',
    },
    potentialAction: {
        '@type': 'ReserveAction',
        name: 'Book a consultation',
    },
};

const InternationalTaxPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            {/* Add JSON-LD structured data script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(internationalTaxServiceJsonLd)}}
            />

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">International Tax Services in Ontario</h1>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl"><Globe className="mr-2"/> Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                        Navigating the complexities of international taxation requires specialized knowledge. HTPA
                        Accounting provides expert international tax services for Ontario residents and businesses
                        dealing with cross-border financial activities. We help you manage foreign income reporting,
                        asset disclosures like the T1135 form, tax treaty applications, and ensure compliance with
                        evolving international regulations, ultimately optimizing your global tax position.
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><Users className="mr-2"/> Cross-Border Tax
                            Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>We offer tailored tax solutions for individuals and businesses operating across borders,
                            including strategies for minimizing double taxation and structuring international operations
                            tax-efficiently. We address scenarios like working abroad, owning foreign property, or
                            expanding your business internationally.</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><FileText className="mr-2"/> Foreign Income & Asset
                            Reporting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Accurate reporting of foreign income and assets is crucial. We assist with all necessary
                            filings, including the detailed T1135 Foreign Income Verification Statement, ensuring you
                            meet Canadian reporting requirements and avoid penalties associated with non-disclosure.</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><Landmark className="mr-2"/> Tax Treaty
                            Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Canada has tax treaties with many countries to prevent double taxation. We analyze your
                            situation to determine applicable treaty benefits and assist with the necessary applications
                            to reduce your overall tax burden on cross-border income.</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><ShieldCheck className="mr-2"/> Compliance with
                            International Tax Regulations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>International tax laws are complex and constantly changing. Our team stays updated on global
                            tax regulations to ensure your compliance with reporting standards, transfer pricing rules,
                            and other international tax obligations, mitigating risks associated with cross-border
                            activities.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl"><HelpCircle className="mr-2"/> International Tax
                        FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is the T1135 form?</AccordionTrigger>
                            <AccordionContent>
                                The T1135, Foreign Income Verification Statement, is a form required by the Canada
                                Revenue Agency (CRA) for Canadian residents who own specified foreign property with a
                                total cost exceeding CAD $100,000 at any time during the year.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How can tax treaties help me?</AccordionTrigger>
                            <AccordionContent>
                                Tax treaties are agreements between countries designed to prevent double taxation and
                                fiscal evasion. They can provide benefits such as reduced withholding taxes on
                                cross-border income or determine which country has the primary right to tax certain
                                types of income.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>I work remotely for a foreign company. What are my tax
                                obligations?</AccordionTrigger>
                            <AccordionContent>
                                As a Canadian resident, you are generally taxed on your worldwide income. Your tax
                                obligations depend on factors like your residency status, the tax treaty between Canada
                                and the employer's country, and where the services are performed. We can help assess
                                your specific situation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>What happens if I don't report my foreign income or
                                assets?</AccordionTrigger>
                            <AccordionContent>
                                Failure to report foreign income or file required forms like the T1135 can result in
                                significant penalties, interest charges, and potential audits by the CRA. Compliance is
                                essential to avoid these issues.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl">Why Choose HTPA for International Tax
                        Matters?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Specialized Expertise:</strong> Deep understanding of complex international tax laws
                            and treaties.
                        </li>
                        <li><strong>Proactive Planning:</strong> Strategies to optimize your global tax position and
                            minimize liabilities.
                        </li>
                        <li><strong>Compliance Focused:</strong> Ensuring adherence to all Canadian and international
                            reporting requirements.
                        </li>
                        <li><strong>Personalized Service:</strong> Tailored advice based on your unique cross-border
                            circumstances.
                        </li>
                        <li><strong>Risk Mitigation:</strong> Helping you navigate potential pitfalls and avoid costly
                            penalties.
                        </li>
                    </ul>
                    <p className="mt-4 font-semibold">
                        Contact HTPA Accounting today for expert guidance on your international tax needs.
                    </p>
                </CardContent>
            </Card>

        </div>
    );
};

export default InternationalTaxPage;
