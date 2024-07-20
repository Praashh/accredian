import { useState } from 'react';
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
                    className={active === 'Refer' ? 'text-[#1A73E8] font-semibold flex flex-col items-center' : ''}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive('Refer')}
                >
                    <p>Refer</p>
                    <span className={`${active === "Refer" ? 'block' : "hidden"}`}><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1A73E8" />
                    </svg>
                    </span>
                </div>
                <span
                    className={active === 'Benefits' ? 'text-[#1A73E8] font-semibold flex flex-col items-center' : ''}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive('Benefits')}
                >
                    <p>Benefits</p>
                    <span className={`${active === "Benefits" ? 'block' : "hidden"}`}><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1A73E8" />
                    </svg>
                    </span>
                </span>
                <span
                    className={active === 'FAQs' ? 'text-[#1A73E8] font-semibold flex flex-col items-center' : ''}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive('FAQs')}
                >
                    <p>FAQs</p>
                    <span className={`${active === "FAQs" ? 'block' : "hidden"}`}><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1A73E8" />
                    </svg>
                    </span>
                </span>
                <span
                    className={active === 'Support' ? 'text-[#1A73E8] font-semibold flex flex-col items-center' : ''}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActive('Support')}
                >
                    <p>Support</p>
                    <span className={`${active === "Support" ? 'block' : "hidden"}`}><svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#1A73E8" />
                    </svg>
                    </span>
                </span>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default HeroMenubar;
