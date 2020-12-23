import { WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_DESCRIPTION, WEBSITE_URL } from '@/lib/constants';
import Page from '@/components/Layout/Page'
import Team from '@/components/Team';
import SocialMeta from '@/components/SocialMeta';

const Index = () => {
  return (
    <Page>
      <SocialMeta 
        image="/static/twitter-cards/hero-image.webp"
        title={`${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <Team />
    </Page>
  )
}

export default Index;
