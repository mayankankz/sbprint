import logo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/Header";
import Index from "./Pages/index";
import Index2 from "./Pages/index2/index2";
import Index3 from "./Pages/index3/index3";
import Footer from "./Components/footer/Footer";
import About_us_1 from "./Pages/about-us/About_us_1";
import About_us_2 from "./Pages/about-us/About_us_2";
import Team from "./Pages/team-page/TeamPage";
import PricingPage from "./Pages/pricing-page/PricingPage";
import FaqPage from "./Pages/faq-page/FaqPage";
import TeamSingle from "./Pages/team-single/TeamSingle";
import SignIn from "./Pages/sign-in/SignIn";
import SignUp from "./Pages/sign-up/SignUp";
import Maintenance from "./Pages/maintenance/Maintenance";
import ComingSoon from "./Pages/coming-soon/ComingSoon";
import ProductGrid from "./Pages/product-grid/ProductGrid";
import ProductList from "./Pages/product-list/ProductList";
import ProductSingle from "./Pages/product-single/ProductSingle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCart from "./Pages/cart/ProductCart";
import CheckOut from "./Pages/checkout/CheckOut";
import OrderComplete from "./Pages/order-complete/OrderComplete";
import ForgetPassword from "./Pages/forget-password/ForgetPassword";
import PortFolioCard from "./Pages/portfolio/PortFolioCard";
import PortFolioSingle from "./Pages/portfolio/PortFolioSingle";
import AccordionPage from "./Pages/accordion/AccordionPage";
import BlogPage from "./Pages/blog-page/BlogPage";
import BlogSingle from "./Components/blog/BlogSingle";
import CounterPage from "./Pages/counter-page/CounterPage";
import FeatureBox from "./Pages/feature-box/FeatureBox";
import HeroBannerPage from "./Pages/hero-banner-page/HeroBannerPage";
import PriceTablePage from "./Pages/price-table-page/PriceTablePage";
import TestiMonialPage from "./Pages/testimonial-page/TestiMonialPage";
import BlogCard from "./Pages/blog-card/BlogCard";
import BlogList1 from "./Pages/blog-list-1/BlogList1";
import BlogList2 from "./Pages/blog-list-1/BlogList2";
import BackToTop from "./Components/BackToTop";
import Contact from "./Pages/contact/Contatct";
import ContatcUs2 from "./Pages/contact/ContatcUs2";
import ErrorPage from "./Pages/error-page/ErrorPage";
import TAndC from "./Pages/term-And-Condition/tAndC";
import Privacy from "./Pages/term-And-Condition/privacy";
import { useEffect, useState } from "react";
import Editor from "./Pages/adminDashboard/Editor/Editor";
import DashBoard from "./Pages/adminDashboard/Dashbaord/DashBoard";
import AdminLayout from "./Pages/adminDashboard/Layout";
import Portfolio from "./Components/portfolio/Protfolio";
function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); // Change the delay as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const isSpecialRoute =
    location.pathname.includes("maintenance") ||
    location.pathname.includes("coming-soon") ||
    location.pathname.includes("error-404");
  // console.log(isSpecialRoute);

  useEffect(() => {
    const handlePopstate = () => {
      window.location.reload(); // Refresh the page on popstate event (back button)
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, [location.pathname]);

  const isAdminRoute = location.pathname.includes("admin");

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading ? (
        <div id="ht-preloader">
          <div className="loader clear-loader">
            <img src="images/loader.gif" alt="" />
          </div>
        </div>
      ) : (
        // Rest of your JSX code
        <>
          {isSpecialRoute ? (
            <Routes>
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/error-404" element={<ErrorPage />} />
            </Routes>
          ) : (
            <div className="page-wrapper">
              {(!isAdminRoute && !location.pathname.includes("login")) ? <Header /> : ""}
              <Routes>
                <Route path="/" element={<Index2 />} />
               

                <Route path="/index-3" element={<Index3 />} />
                <Route path="/about-us-1" element={<About_us_1 />} />
                <Route path="/about-us" element={<About_us_2 />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/team-single" element={<TeamSingle />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product-grid" element={<ProductGrid />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/product-single/:id" element={<ProductSingle />} />
                <Route path="/product-single" element={<ProductSingle />} />
                <Route path="/product-cart" element={<ProductCart />} />
                <Route path="/product-checkout" element={<CheckOut />} />
                <Route path="/order-complete" element={<OrderComplete />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/services" element={<Portfolio />} />
                <Route path="/service" element={<PortFolioSingle />} />
                <Route path="/feature-accordion" element={<AccordionPage />} />
                <Route path="/feature-blog" element={<BlogPage />} />
                <Route path="/blog-single" element={<BlogSingle />} />
                <Route path="/feature-counter" element={<CounterPage />} />
                <Route path="/feature-icon-box" element={<FeatureBox />} />
                <Route path="/feature-hero" element={<HeroBannerPage />} />
                <Route path="/feature-pricing" element={<PriceTablePage />} />
                <Route path="/feature-team" element={<Team />} />
                <Route
                  path="/feature-testimonial"
                  element={<TestiMonialPage />}
                />
                <Route path="/blog-card" element={<BlogCard />} />
                <Route path="/blog-listing" element={<BlogList1 />} />
                <Route path="/blog-listing-2" element={<BlogList2 />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/contact-us-2" element={<ContatcUs2 />} />
                <Route path="/terms-and-conditions" element={<TAndC />} />
                <Route path="/privacy-policy" element={<Privacy />} />

                <Route path="/admin/*" element={<AdminLayout />}>
                
                  <Route index element={<DashBoard />} />
                  <Route path="editor" element={<Editor />} />
                </Route>
                <Route path="/login" element={<SignIn />} />
                {/* <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} /> */}
              </Routes>
              {(!isAdminRoute && !location.pathname.includes("login")) ? <Footer /> : ""}
              <BackToTop />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
