import { useState } from 'react'
import './Home.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'

export default function Resume() {
  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-400' onClick={handleMainClick}>
        <h1 className='align-text-bottom text-black'>Hi, you can still download my cv!</h1>
        <div className='flex items-center w-full justify-center py-4'>
          <a href='https://raw.githubusercontent.com/FrancescoPenasa/Awesome-CV/master/en/cv.pdf'> 
            <Button className="justify-center" children={<p className='text-black font-bold'>Download CV</p>} onClick={console.log("test")}/>        
          </a>
        </div>
      </main>

      <Footer/>
    </>
  )
}
