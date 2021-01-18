import { WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_DESCRIPTION, WEBSITE_URL } from '@/lib/constants';
import Page from '@/components/Layout/Page'
import Team from '@/components/Team';
import SocialMeta from '@/components/SocialMeta';
import PropertyListing from '@/components/PropertyListing'


const Index = (props) => {

  return (
    <Page>
      <SocialMeta 
        image="/static/twitter-cards/hero-image.webp"
        title={`${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
        url={WEBSITE_URL}
        description={WEBSITE_DESCRIPTION}
      />
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="relative mt-32">
              <h2 className="text-3xl font-bold leading-tight mb-2">Hot This Week</h2>
              <p className="leading-tight mb-6 text-base">Some text here</p>
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View All
              </button>
            </div>
            <PropertyListing />
            <PropertyListing />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Index;
