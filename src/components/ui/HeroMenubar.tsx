import  { useState } from 'react';
import Refer from './Refer';
import Benefits from './Benefits';
import FAQs from './Faqs';
import Support from './Support';

const HeroMenubar = () => {
  const [active, setActive] = useState('Refer');

  const renderContent = () => {
    switch (active) {
      case 'Refer':
        return <Refer />;
      case 'Benefits':
        return <Benefits />;
      case 'FAQs':
        return <FAQs />;
      case 'Support':
        return <Support />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className="flex items-center justify-evenly p-4 bg-[#1A73E81C] rounded-full md:w-1/3 w-full">
        <div
          className={active === 'Refer' ? 'text-[#1A73E8]' : ''}
          style={{cursor:'pointer'}}
          onClick={() => setActive('Refer')}
        >
          Refer
        </div>
        <span
          className={active === 'Benefits' ? 'text-[#1A73E8]' : ''}
          style={{cursor:'pointer'}}
          onClick={() => setActive('Benefits')}
        >
          Benefits
        </span>
        <span
          className={active === 'FAQs' ? 'text-[#1A73E8]' : ''}
          style={{cursor:'pointer'}}
          onClick={() => setActive('FAQs')}
        >
          FAQs
        </span>
        <span
          className={active === 'Support' ? 'text-[#1A73E8]' : ''}
          style={{cursor:'pointer'}}
          onClick={() => setActive('Support')}
        >
          Support
        </span>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HeroMenubar;
