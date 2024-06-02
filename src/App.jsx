import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-400' onClick={handleMainClick}>
        <h1 className='align-text-bottom text-black'>Website under construction, in the meantime download my CV</h1>
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

export default App
