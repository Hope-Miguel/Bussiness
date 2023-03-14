import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import {Card, Container} from 'react-bootstrap';

import photo4 from '../assets/photo4.jpeg'
import pexels2 from '../assets/pexels2.jpeg'
import pexels4 from '../assets/pexels4.webp'

export default function Cards() {
  return (
<div>
 <Container>
 <OwlCarousel className='owl-theme' items="3" autoplay loop nav>
    
    <div className='item'>
       <Card style={{ width: '17rem', border: 'none' }}>
         <Card.Img variant="top" src={photo4}  style={{borderRadius:'8px'}}/>
         <Card.Body>
           <Card.Title className=''><h5>Bussiness Research</h5></Card.Title>
           <Card.Text>
             <p className="text-about">Some quick example text to build on the card title and make up the
             bulk of the card's content.</p>
           </Card.Text>
           <ArrowForwardOutlinedIcon className='icon-bord'/>
         </Card.Body>
       </Card>
       </div>
       <div className='item'>
       <div className="bord-cards">
       <Card style={{ width: '17rem', border: 'none' }} >
         <Card.Img variant="top" src={photo4}  style={{borderRadius:'8px'}}/>
         <Card.Body>
           <Card.Title className=''><h5>Bussiness Research</h5></Card.Title>
           <Card.Text>
             <p className="text-about">Some quick example text to build on the card title and make up the
             bulk of the card's content.</p>
           </Card.Text>
           <ArrowForwardOutlinedIcon className='icon-bord'/>
         </Card.Body>
       </Card>
       </div>
       </div>
   
       <div className='item'>
       <Card style={{ width: '17rem', border: 'none' }}>
         <Card.Img variant="top" src={pexels2}  style={{borderRadius:'8px'}}/>
         <Card.Body>
           <Card.Title className=''><h5>Bussiness Research</h5></Card.Title>
           <Card.Text>
             <p className="text-about">Some quick example text to build on the card title and make up the
             bulk of the card's content.</p>
           </Card.Text>
           <ArrowForwardOutlinedIcon className='icon-bord'/>
         </Card.Body>
       </Card>
       </div>
       
      
      
   
   </OwlCarousel>
 </Container>
    </div>
  )
}
