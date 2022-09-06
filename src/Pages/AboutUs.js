import Button from '@mui/material/Button';
import Title from '../Components/Atoms/Title';
import Subtitle from '../Components/Atoms/Subtitle';
import Paragraph from '../Components/Atoms/Paragraph';
import './AboutUs.css';
import Footer from '../Components/Footer/Footer';
export default function AboutUs() {
  return (
    <>
      <section id='aboutUs'>
        <div className='info-container'>
          <div className='about-us-info'>
            <Title text='MG Inmobiliaria' />
            <Subtitle text='VENTA Y ARRENDAMIENTO DE INMUEBLES' />
            <Paragraph
              text='Agente inmobiliario enfocado en la venta y arrendamiento de
            inmuebles en la ciudad de Bogotá y sus alrededores.'
            />
          </div>
          <div className='contact-us-info'>
            <Title text='Contactenos' />
            <Button variant='contained' color='success'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://api.whatsapp.com/send?phone=573223066351'
              >
                <span id='wappIcon'></span>WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
