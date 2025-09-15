import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import Schedule from "./pages/Schedule";
import Dresscode from "./pages/Dresscode";
import ImportantPeople from "./pages/ImportantPeople";
import UsGallery from "./pages/UsGallery";
import WeddGalery from "./pages/WeddGalery";
import ReservationForm from "./pages/ReservationForm";
import Footer from "./pages/Footer";
import GuestList from "./pages/GuestList";
import TravelAndAccommodation from "./pages/TravelAndAccommodation";
import GiftList from "./pages/GiftList";
import { use } from "react";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const scheduleRef = useRef(null);
  const dresscodeRef = useRef(null);
  const importantPeopleRef = useRef(null);
  const usGalleryRef = useRef(null);
  const weddGalleryRef = useRef(null);
  const reservationRef = useRef(null);
  const guestList = useRef(null);
  const travelRef = useRef(null);
  const giftsRef = useRef(null);

  const refs = {
    hero: heroRef,
    about: aboutRef,
    location: locationRef,
    schedule: scheduleRef,
    travel: travelRef,
    dresscode: dresscodeRef,
    importantPeople: importantPeopleRef,
    usgallery: usGalleryRef,
    reservation: reservationRef,
    guestList: guestList,
    gifts: giftsRef,
    weddgallery: weddGalleryRef,
  };

  const slowScrollTo = (ref) => {
    const start = window.scrollY;
    const end = ref.current.getBoundingClientRect().top + window.scrollY;
    const duration = 1000;
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const scrollPosition = start + (end - start) * easeInOutCubic;

      window.scrollTo(0, scrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollToSection = (section) => {
    if (refs[section]) {
      slowScrollTo(refs[section]);
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="content">
        <Navigation scrollToSection={scrollToSection} />
        <div ref={heroRef}>
          <Hero scrollToReservation={() => scrollToSection("reservation")} />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
        </div>
        <div ref={locationRef}>
          <Location />
        </div>
        <div ref={scheduleRef}>
          <Schedule />
        </div>
        <div ref={travelRef}>
          <TravelAndAccommodation />
        </div>
        <div ref={dresscodeRef}>
          <Dresscode />
        </div>
        <div ref={importantPeopleRef}>
          <ImportantPeople />
        </div>
        <div ref={usGalleryRef}>
          <UsGallery />
        </div>
        <div ref={giftsRef}>
          <GiftList />
        </div>
        <div ref={guestList}>
          <GuestList />
        </div>
        <div ref={reservationRef}>
          <ReservationForm />
        </div>
        <div ref={weddGalleryRef}>
          <WeddGalery />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
