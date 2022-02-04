import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Hooks
import { useGetCategories } from "./Hooks/useGetCategories";
import { useGetMoviesTrending } from './Hooks/useGetMoviesTrending';
// Pages
import Home from './Page/Home/index.jsx';
import SingleMovie from './Page/SingleMovie/index.jsx';
import MediaPlayer from './Page/MediaPlayer/index.jsx';
import About from './Page/About/index.jsx';
import Team from './Page/Team/index.jsx';
import Contact from './Page/Contact/index.jsx';
// layout
import SingleMovieLayout from './Layout/SingleMovieLayout.jsx';
import PageLayout from './Layout/PageLayout.jsx';


import Theme from './Theme/index.jsx';

const App = () =>  {

  useGetCategories();
  useGetMoviesTrending();
  if(localStorage.getItem('currentCategory') === undefined) {
    localStorage.setItem('currentCategory', 28);
  }

  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="/" element={ <PageLayout /> }  >
            <Route index element={ <Home />} />
            <Route path="about" element={ <About /> } />
            <Route path="team" element={ <Team /> } />
            <Route path="contact" element={ <Contact /> } />
          </Route>
          <Route path="/movie" element={ <SingleMovieLayout /> } >
            <Route index element={ <SingleMovie /> } />
            <Route  path='video' element={ <MediaPlayer /> } />
          </Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  )
  
}

export default App
