import {Spacer, Button } from '@nextui-org/react';
const Hero = () => {
  return (
    <div>
      <Spacer y={2} />
      <header className="bg-blue-500 text-white p-8 rounded-lg">
        <div className="text-center">
          <p>Welcome to My App</p>
          <Spacer y={1} />
          <p>
            A simple and powerful Next.js app with Next UI and Tailwind CSS.
          </p>
          <Spacer y={2} />
          <Button color="secondary">Get Started</Button>
        </div>
      </header>
      <Spacer y={2} />
    </div>
  );
};

export default Hero;
