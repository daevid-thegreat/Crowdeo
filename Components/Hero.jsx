import {Spacer, Button, Link} from '@nextui-org/react';
const Hero = () => {
  return (
    <div>
      <Spacer y={2} />
      <header className="bg-blue-500 text-white py-28 px-14 rounded-lg">
        <div className="text-center">
          <p className={"text-3xl font-semibold"}>Welcome to Crowdoe</p>
          <Spacer y={1} />
          <p className={"text-md font-normal py-6"}>
            Review your favourite companies and get paid...
          </p>
          <Spacer y={2} />
          <Link className={""} href="/companies">
            <Button color="success" auto>
              Get Started
            </Button>
          </Link>
        </div>
      </header>
      <Spacer y={2} />
    </div>
  );
};

export default Hero;
