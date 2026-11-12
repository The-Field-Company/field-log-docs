import type { ReactNode } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

function Hero(): ReactNode {
  const droneBg = useBaseUrl('img/drone-bg.webp');
  const mockup = useBaseUrl('img/hero-mockup.webp');
  return (
    <section className={styles.hero}>
      <img src={droneBg} alt="" className={styles.heroBg} />
      <div className={styles.heroOverlay} />
      <div className={styles.container}>
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroHeadline}>
              <span className={styles.headlineLight}>Field Log</span>{' '}
              <span className={styles.headlineAccent}>
                {translate({
                  id: 'homepage.hero.accent',
                  message: 'DOCUMENTATION',
                  description: 'Second half of the hero headline',
                })}
              </span>
            </h1>
            <p className={styles.heroSubheadline}>
              {translate({
                id: 'homepage.hero.subheadline',
                message:
                  'Instructions and Guides on how to use the field log application',
                description: 'Hero subheadline',
              })}
            </p>
          </div>
          <div className={styles.heroMockup}>
            <img
              src={mockup}
              alt={translate({
                id: 'homepage.hero.mockupAlt',
                message: 'FieldLog product preview',
                description: 'Alt text for the hero product image',
              })}
              className={styles.heroMockupImg}
            />
          </div>
        </div>
        <div className={styles.heroBody}>
          <p>
            {translate({
              id: 'homepage.body.explain',
              message:
                'These guides will explain how to build forms, collect observations in the field, and get your results out when the work is done.',
              description: 'First body paragraph',
            })}
          </p>
          <p>
            <span className={styles.brand}>FieldLog</span>{' '}
            {translate({
              id: 'homepage.body.built',
              message:
                "is built for places without a signal. Entries save on your phone and sync automatically once you're back online, so you can keep recording wherever the day takes you.",
              description: 'Second body paragraph, following the FieldLog brand',
            })}
          </p>
          <p>
            {translate({
              id: 'homepage.body.start',
              message:
                'Start with the tutorial to set up your first session, or jump to whichever topic you need in the sidebar.',
              description: 'Third body paragraph',
            })}
          </p>
        </div>
        <div className={styles.heroActions}>
          <Link className={styles.primaryBtn} to="/docs/getting-started">
            {translate({
              id: 'homepage.action.gettingStarted',
              message: 'Getting started',
              description: 'Primary call-to-action button label',
            })}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Documentation',
        description: 'Page title',
      })}
      description={translate({
        id: 'homepage.description',
        message:
          'Guides and instructions for using the FieldLog field data collection application.',
        description: 'Page meta description',
      })}>
      <main className={styles.landing}>
        <Hero />
      </main>
    </Layout>
  );
}
