import { Fragment } from 'react';

import { FormationSection, HeroSection, AgrobusinessSection } from '@/components/landing';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FormationSection />
      <AgrobusinessSection/>
    </Fragment>
  );
}
