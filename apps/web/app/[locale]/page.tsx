import { Fragment } from 'react';

import { FormationSection, HeroSection, AgrobusinessSection, LemaSection } from '@/components/landing';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FormationSection />
      <AgrobusinessSection/>
      <LemaSection/>
    </Fragment>
  );
}
