import { useState } from 'react'
import './Home.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'

export default function About() {
  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-400' onClick={handleMainClick}>
      <h1> There are no cookies! </h1>
       
      </main>

      <Footer/>
    </>
  )
}
