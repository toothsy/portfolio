import Home from './components/Home';
import AM from './components/AboutMe'
import Pro from './components/Projects'
import { Menu } from './components/Menu'
import Footer from './components/Footer'
import React from 'react';
import Article from './components/Articles';
export const App: React.FC = () => {
  return (
    < >
      <Menu />
      <Home />
      <Pro />
      <Article />
      {/* <CM /> */}
      <AM />
      <Footer />
    </>
  )
}

