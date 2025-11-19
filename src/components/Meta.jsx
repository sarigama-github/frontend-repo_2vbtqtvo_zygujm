import { Helmet } from 'react-helmet'

export default function Meta({ title = 'weblinity – Webagentur Münster', description = 'Webdesign Münster, WordPress, Framer & SEO. Professionelle Webseiten erstellen lassen in Münster. Kostenlose Website-Analyse.', path = '/' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
      <script type="application/ld+json">{`${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'weblinity',
        url: 'https://weblinity.de',
        sameAs: []
      })}`}</script>
    </Helmet>
  )
}
