import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Testimonials from '../partials/Testimonials';
import FeaturesHome from '../partials/FeatureHome';
import Features from '../partials/Features';
import Features02 from '../partials/Features02';
import Integrations from '../partials/Integrations';
import Pricing from '../partials/Pricing';
import SingleTestimonial from '../partials/SingleTestimonial';
import Faqs from '../partials/Faqs';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden ">

      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <FeaturesHome />
        <Features />
        <Features02 />
        <Integrations />
        <Pricing />
        <SingleTestimonial />
        <Testimonials />
        <Faqs />
        <Cta />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
