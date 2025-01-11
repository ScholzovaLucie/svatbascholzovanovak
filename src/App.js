import "./App.css"
import React, { useRef, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import Schedule from "./components/Schedule";
import Dresscode from "./components/Dresscode";
import ImportantPeople from "./components/ImportantPeople";
import Gallery from "./components/Gallery";
import ReservationForm from "./components/ReservationForm";
import Footer from "./components/Footer";
import GuestList from "./components/GuestList";
import TravelAndAccommodation from "./components/TravelAndAccommodation";
import GiftList from "./components/GiftList";

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const locationRef = useRef(null);
  const scheduleRef = useRef(null);
  const dresscodeRef = useRef(null);
  const importantPeopleRef = useRef(null);
  const galleryRef = useRef(null);
  const reservationRef = useRef(null);
  const guestList = useRef(null);
  const travelRef = useRef(null);
  const giftsRef = useRef(null);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0); // Výchozí neprůhlednost

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Zvýšení opacity do určité hranice
      let newOpacity = scrollPosition / windowHeight; 

      // Pokud uživatel scroluje dál, udělej pozadí méně průhledné
      if (newOpacity > 0.25) {
        newOpacity = Math.min(0.8, 0.25 + (scrollPosition - windowHeight) / windowHeight / 2);
      }

      setBackgroundOpacity(Math.min(newOpacity, 0.45)); // Maximum 0.8
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const refs = {
    hero: heroRef,
    about: aboutRef,
    location: locationRef,
    schedule: scheduleRef,
    travel: travelRef,
    dresscode: dresscodeRef,
    importantPeople: importantPeopleRef,
    gallery: galleryRef,
    reservation: reservationRef,
    guestList: guestList,
    gifts: giftsRef,
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
    <div style={{
      backgroundColor: `rgba(222, 179, 135, ${backgroundOpacity})`, // Dynamická průhlednost
      transition: "background-color 0.1s ease-in-out", 
    }}>
      <div className="background" ></div>
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
      <div ref={galleryRef}>
        <Gallery />
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
      <Footer />
      </div>
      
    </div>
  );
};

export default App;