"use client"
import Image from 'next/image';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'transparent', minHeight: '100vh', color: '#000' }}>
      <div className="container py-5 mt-3 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Welcome to My Portfolio</h1>
            <p className="lead">A passionate Front-End Developer.</p>
            <p>
              Hello, I'm Grizon Russell, a passionate Front-End Developer dedicated to crafting exceptional web experiences. 
              Explore my work and journey through the world of web development with me.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <Image
              src="/assets/image/grizon.jpg"
              alt="Profile Picture"
              width={550}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
