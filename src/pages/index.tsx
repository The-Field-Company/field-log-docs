import type { ReactNode } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const REQUEST_ACCESS = 'https://fieldlog.thefieldco.com/request-access';

type Step = { title: string; description: string; image: string };
type Feature = { title: string; description: string; image: string };

const steps: Step[] = [
  {
    title: 'Create Session',
    description: 'Build your form. Drag fields. Publish.',
    image: 'img/step1.webp',
  },
  {
    title: 'Deploy to Field',
    description: 'Share a link or QR code. Your team opens it on any phone.',
    image: 'img/step2.webp',
  },
  {
    title: 'Collect Data',
    description:
      'Submissions arrive with GPS, photos, and timestamps. Watch the dashboard update.',
    image: 'img/step3.webp',
  },
];

const features: Feature[] = [
  {
    title: 'Build Forms',
    description: 'Drag fields onto your canvas. Add conditions, split into steps. Ship it.',
    image: 'img/feature-form.webp',
  },
  {
    title: 'Go Offline',
    description:
      'No signal at the site? The form still works. Entries save locally and sync later.',
    image: 'img/feature-offline.webp',
  },
  {
    title: 'Pin Locations',
    description: 'GPS coordinates tag every record. Your phone does the work.',
    image: 'img/feature-gps.webp',
  },
  {
    title: 'Watch Live',
    description:
      'Open the dashboard. Watch submissions roll in as your team finishes each plot.',
    image: 'img/feature-dashboard.webp',
  },
  {
    title: 'Open It Up',
    description:
      'Invite the public to submit observations. Review and approve what comes in.',
    image: 'img/feature-public.webp',
  },
  {
    title: 'Get Your Data',
    description: 'Download everything as CSV, KML, or JSON. All standard formats.',
    image: 'img/feature-export.webp',
  },
];

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
              <span className={styles.headlineAccent}>DOCUMENTATION</span>
            </h1>
            <p className={styles.heroSubheadline}>
              Instructions and Guides on how to use the field log application
            </p>
          </div>
          <div className={styles.heroMockup}>
            <img src={mockup} alt="FieldLog product preview" className={styles.heroMockupImg} />
          </div>
        </div>
        <div className={styles.heroBody}>
          <p>
            These guides will explain how to build forms, collect observations in
            the field, and get your results out when the work is done.
          </p>
          <p>
            <span className={styles.brand}>FieldLog</span> is built for places
            without a signal. Entries save on your phone and sync automatically
            once you're back online, so you can keep recording wherever the day
            takes you.
          </p>
          <p>
            Start with the tutorial to set up your first session, or jump to
            whichever topic you need in the sidebar.
          </p>
        </div>
        <div className={styles.heroActions}>
          <Link className={styles.primaryBtn} to="/docs/intro">
            Getting started
          </Link>
        </div>
      </div>
    </section>
  );
}
export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Guides and instructions for using the FieldLog field data collection application.">
      <main className={styles.landing}>
        <Hero />
      </main>
    </Layout>
  );
}
