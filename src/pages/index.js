import React from 'react';
import CustomLayout from '@site/src/components/CustomLayout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Mission from '@site/src/components/Aboutpage/Mission';
import Reach from '@site/src/components/Aboutpage/Reach';
import Founder from '@site/src/components/Aboutpage/Founder';
import LiveWorkshop from '@site/src/components/liveworkshop/LiveWorkshop';
import Benifits from '@site/src/components/ambassadors/Benifits';
import Criteria from '@site/src/components/ambassadors/Criteria';
import Hero from '@site/src/components/ambassadors/Hero';
import FAQs from '@site/src/components/ambassadors/FAQs';
import Team from '@site/src/components/team/Team';
import Sidebar from '../theme/Sidebar';

export default function Home() {
  return (
    <CustomLayout>
      <section id="Sidebar"><Sidebar/></section>
      <section id="features"><HomepageFeatures /></section>
      <section id="mission"><Mission /></section>
      <section id="reach"><Reach /></section>
      <section id="reach"><Reach /></section>
      <section id="founder"><Founder /></section>
      <section id="workshops"><LiveWorkshop /></section>
      <section id="hero"><Hero /></section>
      <section id="criteria"><Criteria /></section>
      <section id="benefits"><Benifits /></section>
      <section id="team"><Team heading={"Current Ambassadors"} slider={false} /></section>
      <section id="faqs"><FAQs /></section>
    </CustomLayout>
  );
}