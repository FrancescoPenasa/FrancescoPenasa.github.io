import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import './Home.css'
import Nav from './components/Nav'
import Button from './components/Button'
import Footer from './components/Footer'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid';

export default function Teaching() {
  const { t } = useTranslation();
  const [showNavColumn, setShowNavColumn] = useState(false);

  const handleMainClick = () => {
    setShowNavColumn(false);
  };

  const elements = [
    
    { id: uuidv4() + "0", title: t('sunlabFormazione_title'), content: 
       
      <div className='grid justify-items-center content-evenly
                      py-4 '>
        <h3 className=''>{t('sunlabFormazione_time')} - {t('sunlabFormazione_place')} </h3>
        <p className='text-black py-2'> {t('sunlabFormazione_desc')} </p>

        <a className='' href='https://github.com/FrancescoPenasa/2024-Sunlab-Macropad'> 
          <Button className="justify-center" children={<p className='text-black font-bold'>{t('show_detail')}</p>} onClick={() =>{}}/>        
        </a> 

      </div>

     },
    { id: uuidv4() + "1", title: t('macropad_title'), content: 

      <div className=' grid justify-items-center py-4'>
        <h3 className=''>{t('macropad_time')} - {t('macropad_place')} </h3>
        <p className='text-black py-2'> {t('macropad_desc')} </p>

        <a href='https://github.com/FrancescoPenasa/2024-Sunlab-Macropad'> 
          <Button className="justify-center" children={<p className='text-black font-bold'>{t('show_detail')}</p>} onClick={() =>{}}/>        
        </a> 

      </div>

    },
    { id: uuidv4() + "2", title: t('macropad2_title'), content: 
      
      <div className=' grid justify-items-center py-4'>
        <h3 className=''>{t('macropad2_time')} - {t('macropad2_place')} </h3>
        <p className='text-black py-2'> {t('macropad2_desc')} </p>

        <a href='https://github.com/FrancescoPenasa/2024-Sunlab-Macropad'> 
          <Button className="justify-center" children={<p className='text-black font-bold'>{t('show_detail')}</p>} onClick={() =>{}}/>        
        </a> 

      </div>

     },

      { id: uuidv4() + "3", title: t('sunlabFormazione2_title'), content: 
        
        <div className=' grid justify-items-center py-4'>
          <h3 className=''>{t('sunlabFormazione2_time')} - {t('sunlabFormazione2_place')} </h3>
          <p className='text-black py-2'> {t('sunlabFormazione2_desc')} </p>
  
          <a href='https://github.com/FrancescoPenasa/2024-Sunlab-Macropad'> 
            <Button className="justify-center" children={<p className='text-black font-bold'>{t('show_detail')}</p>} onClick={() =>{}}/>        
          </a> 
  
        </div>
  
       },
    // { id: uuidv4() + "3", title: 'Macropad', content: 'This is content' },
  ];


  return (
    <>
      <Nav showNavColumn={showNavColumn} setshowNavColumn={setShowNavColumn} />
      <main className='align-middle justify-center text-slate-400' onClick={handleMainClick}>
        <h1 className='align-text-bottom text-black py-8'>In this page you can find a list of resource I have used in my teaching!</h1>
        
        <section className='bg-slate-100 rounded p-10'>
          <h1 className='
          font-mono text-5xl font-semibold
          text-black w-full justify-center  py-4  '>SunLab</h1>
        
        {/* <div className='py-2 flex justify-evenly'>
          {elements.map(element => (
              <Card key={uuidv4()} title={element.title} content={element.content} />
              
          ))}
        </div> */}




        <div className=" bg-gray-100  justify-center">
          <div className="space-y-4">
            {elements.map(element => (
              <div
                key={element.id}
                className="p-4 bg-white border-2 border-black shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-2">{element.title}</h2>
                <p>{element.content}</p>
              </div>
            ))}
          </div>
        </div>
        

        </section>
      </main>

      <Footer/>
    </>
  )
}
