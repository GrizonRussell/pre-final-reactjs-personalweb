"use client"
import React from 'react';
import { Container } from 'react-bootstrap';

function page() {
  return (
    <div className='min-h-screen' style={{ backgroundColor: 'transparent', minHeight: '100vh', color: '#000' }}>
      <div className='mx-auto px-4 py-12 bg-zinc-950'>
        <Container>
         
          <h1 className='text-3xl font-bold mb-10 text-center'>Education</h1>

          {/* High School */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>High School</h2>
            <p className='text-lg leading-relaxed' style={{ letterSpacing: '0.5px' }}>
              Iponan National High School, 2014 - 2020
            </p>
          </div>

          {/* Senior High School */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>Senior High School</h2>
            <p className='text-lg leading-relaxed' style={{ letterSpacing: '0.5px' }}>
              Liceo de Cagayan University, 2020 - 2022
            </p>
          </div>

          {/* College/University */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>College/University</h2>
            <p className='text-lg leading-relaxed' style={{ letterSpacing: '0.5px' }}>
              PHINMA Cagayan de Oro College, 2022 - Present
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;
