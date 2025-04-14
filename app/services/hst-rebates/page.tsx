import React from 'react';
import {Metadata} from 'next';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Briefcase, CheckSquare, HelpCircle, Home, Percent, TrendingUp} from 'lucide-react';

export const metadata: Metadata = {
    title: 'HST Rebate Services in Ontario | Maximize Your Returns | HTPA Accounting',
    description: 'HTPA helps Ontario businesses and individuals maximize HST rebates and refunds. Expert guidance for new home rebates, business input tax credits, and specialized claims.',
};

// Define interface for structured data
interface HstRebateServiceData {
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
const hstRebateServiceJsonLd: HstRebateServiceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HST Rebate Services',
    description: 'Comprehensive HST rebate services including new home rebates, business input tax credits (ITCs), and other specialized HST refund claims for Ontario residents and businesses.',
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

const HstRebatesPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            {/* Add JSON-LD structured data script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(hstRebateServiceJsonLd)}}
            />

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Professional HST Rebate Services in
                Ontario</h1>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl"><Percent className="mr-2"/> Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">
                        The Harmonized Sales Tax (HST) system in Ontario offers various rebate opportunities that can
                        significantly impact your finances. HTPA Accounting provides specialized HST rebate services to
                        help individuals and businesses identify eligible claims and maximize their returns. From new
                        housing rebates to business input tax credits, we navigate the complexities to ensure you
                        receive the full amount you're entitled to.
                    </p>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><Home className="mr-2"/> Types of HST Rebates We Handle</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>New Housing Rebates (Owner-built, substantial renovation, purchased from builder)</li>
                            <li>New Residential Rental Property Rebates</li>
                            <li>Business Input Tax Credits (ITCs)</li>
                            <li>Public Service Body Rebates</li>
                            <li>Rebates for Foreign Visitors and Diplomats</li>
                            <li>Other specialized HST claims</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><CheckSquare className="mr-2"/> Eligibility
                            Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Eligibility criteria vary significantly depending on the type of HST rebate. We provide
                            detailed assessments based on your specific situation, whether it's purchasing a new home,
                            operating a business, or belonging to a specific group entitled to rebates. We'll help you
                            understand the documentation and conditions required for a successful claim.</p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><Briefcase className="mr-2"/> Our HST Rebate
                            Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Our streamlined process involves:
                            <ol className="list-decimal pl-5 mt-2 space-y-1">
                                <li>Initial consultation to assess eligibility.</li>
                                <li>Gathering necessary documentation (receipts, agreements, etc.).</li>
                                <li>Accurate calculation of the potential rebate amount.</li>
                                <li>Preparation and filing of the appropriate rebate application forms.</li>
                                <li>Liaison with the CRA if required.</li>
                            </ol>
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center"><TrendingUp className="mr-2"/> Maximizing Your HST
                            Recovery</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>We go beyond simple form filling. Our experts identify all potential HST recovery
                            opportunities, including often-overlooked Input Tax Credits for businesses. We ensure claims
                            are correctly calculated and submitted with proper documentation to maximize your refund and
                            minimize delays or rejections.</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl"><HelpCircle className="mr-2"/> HST Rebate
                        FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is the deadline for filing an HST new housing
                                rebate?</AccordionTrigger>
                            <AccordionContent>
                                Generally, you must file the HST new housing rebate application within two years after
                                the date you take possession of the new home or complete the substantial renovation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What are Input Tax Credits (ITCs)?</AccordionTrigger>
                            <AccordionContent>
                                Input Tax Credits (ITCs) allow HST-registered businesses to recover the HST paid or
                                payable on purchases and expenses related to their commercial activities. Claiming all
                                eligible ITCs reduces your net tax owing.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can I claim an HST rebate if I rent out my new
                                property?</AccordionTrigger>
                            <AccordionContent>
                                Yes, you may be eligible for the New Residential Rental Property (NRRP) Rebate if you
                                purchase a new residential unit and lease it to tenants. Specific conditions apply.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>What documents are needed for an HST rebate claim?</AccordionTrigger>
                            <AccordionContent>
                                Required documents vary by rebate type but often include purchase agreements, invoices,
                                proof of payment, lease agreements (for rental rebates), and floor plans. We provide a
                                specific list based on your claim.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center text-2xl">Why Choose HTPA for HST Rebate Claims?</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Specialized Knowledge:</strong> Expertise in various HST rebate programs and
                            eligibility rules.
                        </li>
                        <li><strong>Maximum Recovery:</strong> Diligent identification of all eligible rebate amounts
                            and ITCs.
                        </li>
                        <li><strong>Accuracy Assured:</strong> Precise calculations and correctly completed applications
                            to avoid errors.
                        </li>
                        <li><strong>Efficient Processing:</strong> Streamlined process for timely submission and
                            follow-up.
                        </li>
                        <li><strong>Reduced Hassle:</strong> We handle the paperwork and complexities, saving you time
                            and effort.
                        </li>
                    </ul>
                    <p className="mt-4 font-semibold">
                        Ensure you're getting back all the HST you're entitled to. Contact HTPA Accounting today!
                    </p>
                </CardContent>
            </Card>

        </div>
    );
};

export default HstRebatesPage;
