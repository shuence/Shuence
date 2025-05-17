import React from 'react';
import Layout from '@/components/shuence/Layout';
import { WorkHistory } from '@/components/shuence/WorkHistory';
import PageTitle from '@/components/shuence/PageTitle';
import PageBreadcrumb from '@/components/shuence/PageBreadcrumb';

export default function ExperiencePage() {
  React.useEffect(() => {
    document.title = 'Experience | Shuence';
  }, []);

  return (
    <Layout>
      <PageBreadcrumb />

      <PageTitle
        title="Work Experience"
        description="My professional journey building software that solves real problems."
        hidden={true}
      />

      <WorkHistory />
    </Layout>
  );
}
