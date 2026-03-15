import { Fragment } from 'react';

import { FormationSection, HeroSection } from '@/components/landing';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FormationSection />
      <AgrobusinessSection/>
      <RseSection/>
      <LemaSection/>
    </Fragment>
  );
}
