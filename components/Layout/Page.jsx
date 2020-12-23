import PageContainer from './PageContainer';
import Header from './Header';
import Footer from './Footer';

const Page = ({ title, description, sticky, children}) => (
  <PageContainer title={title} description={description}>
    <Header />
    <main className="mb-auto">
      {children}
    </main>
    <Footer />
  </PageContainer>
);

export default Page;