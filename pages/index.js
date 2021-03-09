import {
  WEBSITE_NAME,
  WEBSITE_TITLE,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
} from "@/lib/constants";
import Page from "@/components/Layout/Page";
import Team from "@/components/Home/Team";
import Hero from "@/components/Home/Hero";
import SocialMeta from "@/components/SocialMeta";
import PropertyListing from "@/components/PropertyListing";
import PropertyCard from "@/components/PropertyCard";

const Index = () => {
  return (
    <Page>
      <SocialMeta
        image="/static/twitter-cards/hero-image.webp"
        title={`${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <Hero />
      <Team />
    </Page>
  );
};

export default Index;
