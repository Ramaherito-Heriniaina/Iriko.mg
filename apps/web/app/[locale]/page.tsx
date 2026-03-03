import { Fragment } from 'react';

import { FormationSection, HeroSection } from '@/components/landing';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FormationSection />
    </Fragment>
  );
}
