import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/Layouts/Landing';

export default function How() {
  return (
    <LandingLayout>
      <Hero
        title='How'
        subtitle='This is the subheader section where you describe the basic benefits of your product'
        image='https://source.unsplash.com/collection/404339/800x600'
        ctaText='Create your account now'
        ctaLink='/signup'
      />
    </LandingLayout>
  );
}
