import Hero from "./components/Hero";
import PastorMessage from "./components/PastorMessage";
import WhatToExpect from "./components/WhatToExpect";
import LatestSermon from "./components/LatestSermon";
import PhotoGallery from "./components/PhotoGallery";
import CoreBeliefs from "./components/CoreBeliefs";
import Leadership from "./components/Leadership";
import VisitUs from "./components/VisitUs";
import Giving from "./components/Giving";
export default function Home() {
  return (
    <>
      <Hero />
      <PastorMessage />
      <WhatToExpect />
      <LatestSermon />
      <PhotoGallery />
      <CoreBeliefs />
      <Leadership />
      <VisitUs />
      <Giving />
    </>
  );
}
