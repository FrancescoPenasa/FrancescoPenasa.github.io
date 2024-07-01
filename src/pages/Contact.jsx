import { useState } from 'react'
import './Home.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'

export default function Contact() {
  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-400' onClick={handleMainClick}>
        <h1 className='align-text-bottom text-black'>Hi, you can find my email and my phone number inside the cv!</h1>
        <p>Just to avoid email spammer scraper <a href="https://www.matthewthom.as/blog/stop-email-scraping/">Learn more here</a></p>
      </main>

      <Footer/>
    </>
  )
}
