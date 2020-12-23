import Head from 'next/head';
import Router from 'next/router';
import { WEBSITE_NAME, WEBSITE_DESCRIPTION, WEBSITE_TITLE } from '@/lib/constants';

const PageContainer = ({ title, description, children, shouldIndex = true }) => (
  <div className="flex flex-col h-screen">
    <Head>
      <title>{title || `${WEBSITE_TITLE} | ${WEBSITE_NAME}`}</title>
      {description !== false && (
        <meta
          name="description"
          content={description || {WEBSITE_DESCRIPTION}}
        />
      )}
      {!shouldIndex && <meta name="robots" content="noindex" />}
    </Head>
    {children}
  </div>
);

export default PageContainer;