import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';

import Card from '@material-ui/core/Card';


import Untitled from '../src/assets/Untitled.png'
import event from '../src/assets/event.jpeg'
import avatar from '../src/assets/avatar.png'
import img1 from '../src/assets/img1.png'





import Cards from './components/Cards';
import CardServic from './components/cardServic';
import Accordion from './components/Accordn';


import {Row, Col} from 'react-bootstrap';




function App() {


  return (
   <div>
     <div  className="serviços p-6">
      <Container maxWidth="md">
        
      <Grid container>
        <Grid item md={6}>
          <div className="">
            <img src={Untitled} alt=""/>
            </div> 

            <div className="">
            <Card className=''>
            <List component="nav" className="card-list" aria-label="contacts">
                  <ListItem>
                    <ListItemIcon>
                      <OfflinePinIcon />
                    </ListItemIcon>
                    <ListItemText primary="Research your niche and competitors" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <OfflinePinIcon color="action" />
                    </ListItemIcon>
                    <ListItemText primary="Create content that gets your business" />
                  </ListItem> 
                  <ListItem>
                    <ListItemIcon>
                      <OfflinePinIcon color="action" />
                    </ListItemIcon>
                    <ListItemText primary="Drive organic traffic and lead generation." />
                  </ListItem>
                </List>
            </Card>
              </div>        
        </Grid>

        <Grid item md={6}>
          
         <div className="line"></div>
         <span className='span-about'>Best Company of the year Awarded</span>
         <h2 className='title-about'>One Of The Best Business Advice Agency...</h2>
         <p className="text-about">In today’s world, building a business also means you’ll need a strong website and social media presence. These can help you learn your customers better. With them, 
         you can even request customers’ email addresses so you can reach them directly...</p>
         <h3 className='mb-0 h5'>Hope Mateus</h3>
         <span className="text-about">Director, Company CEO</span>
        </Grid>

        </Grid>
      </Container>

      <Cards/>  

      <div className="event-text mt-5">
      <Container maxWidth="lg">
      <span className='span-about text-center'>Business Event</span>
      <h2 className='title-about text-center col-sm-6 mx-auto'>Business Events Strategists For a Experience</h2>
        <div className='event-card '>
            <Row>
              <Col lg={6}>
                <Card className="cards-events">
              <span className='sec-title'>Online Topic, Business</span>
             <h5>Online Business Growth</h5>
             <p className='text-about'>Markets evolve compelling supply chains without virtual resources.
              empowered customer service for reliable.</p>

              <Row>
                <Col md={4}>
                <div className="event-date">
                <span className='day'>24</span>
                <span className='year'>Feb,2023</span>
              </div>
                </Col>
                <Col md={6}>
                <div className="avatar mt-4 block">
                <img src={avatar} alt="" />
                <span className='ms-2 h6'>Hope Mateus</span>
                </div>
                </Col>
                </Row>
              </Card>
            </Col>

              <Col lg={6}>
              <img src={event} alt="" className='mt-3' />
              </Col>         
            </Row>  
                    
          </div>
      </Container>
      </div>
      </div>

      <div className="plan-gerl">
      <div className="plan pd">
          <Container>
        <div className="">
          <Row>
            <Col md={8}>
            <div className="line"></div>
            <span className='span-about'>Business Strategy or services</span>
            <h2 className='title-about'>Plan Your Business Solution strategy with us</h2>
            </Col>
            <Col  md={4}>
              <div className="views-btn">
              <a href="ff" className='btn-plan'><p className='ms-5 mt-3'>view all services</p> <span></span></a>
              </div>
            </Col>
            </Row>
          </div>  
        <CardServic/>  
        </Container>     
      </div>
      </div>

      <div className="pd mb-5">
        <Container>
        <Row>
          <Col md={6}>
            <img src={img1} />
          </Col>
          <Col md={6}>
            <div className="">
            <span className='span-about'>Why choose us</span>
            <h2 className='title-about'>We Help To Improve Customer Service</h2>
            <p className="text-about mt-3">Once you know who your target customers are, conduct surveys and talk to people directly to gain more feedback.</p>
            </div>
            <Accordion/>
          </Col>

        </Row>
        </Container>
      </div>

   </div>
    
  )
}

export default App
