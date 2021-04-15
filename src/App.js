// eslint-disable-next-line
import React from 'react'
import Home from './components/H'
import AM from './components/AM'
import Pro from './components/P'
import Art from './components/A'
import Menu from './components/M'
import Footer from './components/F'
import CM from './components/CM'
import swal from  'sweetalert'
export default function App() {
  let deferredPrompt;

window.addEventListener('beforeinstallprompt',async  (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  try{let choice = await swal({
      title: "Are you sure you want to install?",
      text: "I will be added to your homescreen",
      icon: "info",
      buttons: true
    })
    choice?console.log("installed succesfully"):console.log("cant install")
      }
    catch(e){console.log("error is here \n\n",e)}
    window.deferredPrompt =null;
});

  return (
    < >
            <Menu/>
            <Home/>
            <Art/>
            <Pro/>
            <CM/>
            <AM/>
            <Footer/>
  </>
  )}

