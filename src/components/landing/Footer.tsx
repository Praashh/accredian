
const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white py-8 px-4 w-full">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Programs</h2>
          <ul>
            {['Data Science & AI', 'Product Management', 'Business Analytics', 
              'Digital Transformation', 'Business Management', 'Project Management', 
              'Strategy & Leadership', 'Senior Management', 'Fintech'].map((program) => (
              <li key={program} className="mb-2 flex items-center">
                <span>{program}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="mb-2">Email us (For Data Science Queries): admissions@accredian.com</p>
          <p className="mb-2">Email us (For Product Management Queries):pm@accredian.com</p>
          <p className="mb-2">Data Science Admission Helpline:+91 9079453292 (9 AM - 7 PM)</p>
          <p className="mb-2">Product Management Admission Helpline:+91 9625811095</p>
          <p className="mb-2">Enrolled Student Helpline: +91 7969323507</p>
          <p className="mb-4">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
          
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            {['facebook', 'linkedin', 'twitter', 'instagram', 'youtube'].map((social) => (
              <a key={social} href={`#${social}`} className="text-white ">
                <span >{social}</span>
                <i className={`fab fa-${social} fa-lg`}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold mb-4">Accredian</h2>
          <ul>
            {['About', 'Career', 'Blog', 'Admission Policy', 'Refund Policy', 
              'Privacy Policy', 'Terms Of Service', 'Master FAQs'].map((item) => (
              <li key={item} className="mb-2">
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;