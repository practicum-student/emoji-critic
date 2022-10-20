import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Review from "./Review";
import Header from "./Header";

import AboutMe from "./about-me/AboutMe";
import Contact from "./about-me/Contact";
import Hobbies from "./about-me/Hobbies";
import MyStory from "./about-me/MyStory";

import AboutUs from "./about-us/AboutUs";
import SiteHistory from "./about-us/SiteHistory";
import SiteMission from "./about-us/SiteMission";

import PageNotFound from "./PageNotFound";

function App() {
  const [reviews, setReviews] = useState();
  // this hook is used only the first time the component launches
  useEffect(() => {
    // we're fetching the review data from the server
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((parsedReviews) => {
        // we're formatting the data and using setData() to update our state
        const reviews = Object.values(parsedReviews);
        setReviews(reviews);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
