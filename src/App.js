import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./secens/Navbar";
import DotGroup from "./secens/DotGroup";
import Landing from "./secens/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./secens/MySkills";
import Projects from "./secens/Projects";
// import Testimonials from "./secens/Testimonials";
import Contact from "./secens/Contact";
import Footer from "./secens/Footer";
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div className="w-5/6 mx-auto py-6 md:py-8 ">
        <LineGradient />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <div className="w-5/6 mx-auto py-6 md:py-8">
        <div className="md:hidden xl:block">
          <LineGradient />
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto py-6 md:py-8 ">
        <LineGradient />
      </div>
      {/* <div className="w-5/6 mx-auto">
        <Testimonials />
      </div> */}
      {/* <div className="w-5/6 mx-auto py-6 md:py-8 ">
        <LineGradient />
      </div> */}
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
