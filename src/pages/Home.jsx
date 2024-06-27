import { useTranslation } from 'react-i18next';

import { useState } from 'react'
import './Home.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'

export default function Home() {
  const { t } = useTranslation();
  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-600' onClick={handleMainClick}>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          {t('presentation_line[0]')}
        </p>
        <p className="text-lg mb-4">
        {t('presentation_line[1]')}
        </p>
        <p className="text-lg mb-4">
        {t('presentation_line[2]')}
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Explore My Work</h2>
        <p className="text-lg mb-4">
        {t('presentation_line[3]')}
        </p>
      </section>


      </main>

      <Footer/>
    </>
  )
}
