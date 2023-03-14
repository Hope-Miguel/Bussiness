import React from 'react'
import Card from 'react-bootstrap/Card';

import cliente from '../assets/cliente.png'
import mao from '../assets/mao.png'
import people from '../assets/people.png'


import { Col, Row } from 'react-bootstrap';

export default function cardServic() {
  return (
    <div className='mt-4 cardservi'>
     <Row>
        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem' }}>
        <img src={cliente} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem' }}>
        <img src={people} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem'}}>
        <img src={mao} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem' }}>
        <img src={people} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem' }}>
        <img src={mao} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>

        <Col md={4}>
        <Card className='p-4' style={{ width: '18rem' }}>
        <img src={cliente} width={70} className='ms-3'/>
      <Card.Body>
        <h5 className=''>Strategy Consulting</h5>
            <p className='text-about'>You have your small business idea, your next step is to see if it’s worth pursuing.</p>
      </Card.Body>
    </Card>
        </Col>
     </Row>

    </div>
  )
}


