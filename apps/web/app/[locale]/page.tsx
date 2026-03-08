import { Fragment } from 'react';

import { FormationSection, HeroSection, AgrobusinessSection, RseSection} from '@/components/landing';

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <FormationSection />
      <AgrobusinessSection/>
      <RseSection/>
    </Fragment>
  );
}
