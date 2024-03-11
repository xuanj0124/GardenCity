import React from 'react';
import "./about.css";

const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <div>
        <h2 className='about-h2'>Our Mission</h2>
        <p>
          Our mission is to connect local farmers with customers who cherish the
          beauty and freshness of locally grown flowers. We are dedicated in
          creating a seamless online marketplace, where each exquisite bloom is
          delivered directly from the farm to your doorstep.
        </p>
        <h2 className='about-h2'>Our Vision</h2>
        <p>
          To link our local garden with the world, fostering a global community
          where people embrace the beauty of nature and the vitality of life.
        </p>
      </div>
    </main>
  )
}

export default About