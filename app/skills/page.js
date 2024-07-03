"use client"
import Image from 'next/image';
import { Col, ProgressBar, Row } from 'react-bootstrap';

function page() {
  return (
    <div style={{ backgroundColor: 'transparent', color: '#000', minHeight: '100vh' }}>
      <div className='w-full text-white bg-zinc-950'>
        <Row className='d-flex items-center justify-center'>
          <Col className='mx-32'>
            <div className='max-w-4xl  px-12 py-12'>
              <h1 className='text-3x1 font-bold mb-6'>Skills</h1>

              <h5 className='text-your-color-choice'>Vanilla HTML, CSS, JS</h5>
              <ProgressBar striped variant="dark" now={76} animated />
              <h5 className='mt-5 text-your-color-choice'>Python</h5>
              <ProgressBar striped variant="dark" now={50} animated />
              <h5 className='mt-5 text-your-color-choice'>Flutter</h5>
              <ProgressBar striped variant="dark" now={33} animated />
              <h5 className='mt-5 text-your-color-choice'>Next Js</h5>
              <ProgressBar striped variant="dark" now={10} animated />
            </div>
          </Col>
          <Col>
            <Image className='py-12' src="/assets/image/grizon.jpg" alt="React" width={600} height={600} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default page;
