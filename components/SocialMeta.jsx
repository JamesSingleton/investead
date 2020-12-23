import Head from 'next/head';
import { TWITTER_USER_NAME } from '@/lib/constants'

const SocialMeta = ({ title, description, image, url, keywords }) => (
  <Head>
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
    <meta property="og:type" content="website" />
    {title && <meta property="og:title" content={title} />}
    {url && <meta property="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={`https://investead.jamessingleton.me${image}`} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Head>
)

export default SocialMeta