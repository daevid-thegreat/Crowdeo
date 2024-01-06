import {Spacer } from '@nextui-org/react';

const About = () => {
  return (
    <div>
      <Spacer y={2} />
      <section className={"text-center items-center flex flex-col justify-center py-24"}>
        <h2 className={"text-2xl font-bold py-3"}>About Us</h2>
        <Spacer y={1} />
        <p className={"text-md font-medium py-3 "}>
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
