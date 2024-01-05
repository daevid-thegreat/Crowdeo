import {Spacer } from '@nextui-org/react';

const About = () => {
  return (
    <div>
      <Spacer y={2} />
      <section>
        <h2>About Us</h2>
        <Spacer y={1} />
        <p>
          Welcome to our amazing Next.js app! We are a dedicated team of developers
          creating innovative solutions with the power of Next UI and Tailwind CSS.
        </p>
        <Spacer y={2} />
        <p>
          Feel free to explore our app and discover the exciting features we have to offer.
        </p>
      </section>
      <Spacer y={2} />
    </div>
  );
};

export default About;
