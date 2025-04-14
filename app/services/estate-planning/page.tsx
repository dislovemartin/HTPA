import PageLayout from "@/components/layout/page-layout";
import EstatePlanningContent from "@/components/page-specific/EstatePlanningContent";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estate Planning Services in Ontario | HTPA Accounting',
  description: 'HTPA provides comprehensive estate planning services to help Ontario residents organize assets, minimize taxes, and ensure smooth wealth transfer to future generations.',
};

interface EstatePlanningServiceData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
}

const englishFaqItems = [
  {
    id: 'efaq1',
    question: 'What is involved in estate planning?',
    answer: 'It involves inventorying assets, planning for taxes, potentially setting up trusts, designating beneficiaries, and creating legal documents like wills and powers of attorney.'
  },
  {
    id: 'efaq2',
    question: 'How does estate planning differ from just having a will?',
    answer: 'A will dictates asset distribution after death, while estate planning is a broader strategy addressing lifetime asset management, incapacity planning, tax minimization, and more.'
  },
  {
    id: 'efaq3',
    question: 'What are the tax implications?',
    answer: 'Careful planning can minimize estate administration tax (probate fees) and income tax on capital gains upon death. We explore strategies like trusts and joint ownership.'
  },
  {
    id: 'efaq4',
    question: 'How does estate planning help business owners?',
    answer: 'It addresses business succession, ensuring a smooth transition of ownership and management, minimizing disruption, and potentially reducing taxes.'
  },
  {
    id: 'efaq5',
    question: 'How often should an estate plan be reviewed?',
    answer: 'We recommend reviewing your plan every 3-5 years or after significant life events (marriage, divorce, birth, death, major financial changes).'
  },
];

const serviceSchema: EstatePlanningServiceData = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Estate Planning Services',
  description: 'Comprehensive estate planning to organize assets, minimize taxes, and ensure smooth wealth transfer.',
  provider: {
    '@type': 'AccountingService',
    name: 'HTPA Accounting',
  },
};

export default function EstatePlanning() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <EstatePlanningContent />
    </PageLayout>
  );
}
