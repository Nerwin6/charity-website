import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/Aboutus";
import SientificArticles from "./components/SientificArticles/SientificArticles";
import ParentsAdvice from "./components/parentAdvices/ParentAdvice";
import HelpRequest from "./components/helpRequest/HelpRequest";
import ContactUs from "./components/contactUs/ContactUs";
import ChildHomes from "./components/childHome/ChildHome";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Introduction from "./components/aboutUs/Introduction";
import Sidebar from "./components/navbar/Sidebar";
import { useStateContext } from "./context/ContextProvider";

const App = () => {
  const { isActiveMenu, setisActiveMenu } = useStateContext();
  return (
    <>
      <Navbar />

      {isActiveMenu ? (
        <div className="w-72  h-max fixed right-0 top-16 bg-slate-50">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 "></div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* About Mahak Route  */}
        <Route path="/Aboutus" element={<AboutUs />}>
          <Route path={"introduction"} element={<Introduction />} />
          <Route path={`/Aboutus/Supporters`} />
          <Route path={`/Aboutus/ViewSight`} />
          <Route path={`/Aboutus/Reports`} />
          <Route path={`/Aboutus/Address`} />
          <Route path={`/Aboutus/OrgnzChart`} />
          <Route path={`/Aboutus/AccountNumbers`} />
        </Route>
        <Route path="/SientificArticles" element={<SientificArticles />}>
          <Route path={`/SientificArticles/Fundamentals`} />
          <Route path={`/SientificArticles/Convulsion`} />
          <Route path={`/SientificArticles/EpilepticSyndrome`} />
          <Route path={`/SientificArticles/CureConvulsionEpileptic`} />
          <Route path={`/SientificArticles/ConvulsionMotives`} />
          <Route path={`/SientificArticles/diagnosis`} />
        </Route>
        <Route path="/Parents" element={<ParentsAdvice />} />
        <Route path="/HelpReq" element={<HelpRequest />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ChildHomes" element={<ChildHomes />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
