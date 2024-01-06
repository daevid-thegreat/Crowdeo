import { Spacer } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div>
        <Spacer y={2} />
        <div className="flex items-center justify-between">
          <p>&copy; 2024 Crowdoe</p>
          <p>
            Made with <span role="img" aria-label="heart">❤️</span>
          </p>
        </div>
        <Spacer y={2} />
      </div>
    </footer>
  );
};

export default Footer;
