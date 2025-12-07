import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import Reveal from '../components/Reveal';

const Footer = () => {
  return (
    <footer className="max-container">
      <Reveal>
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img src={footerLogo} alt="Nike logo" width={150} height={46} />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              the perfect fit and style to kickstart your season with
              confidence.
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((social) => (
                <div
                  key={social.src}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {footerLink.title}
                </h4>
                <ul>
                  {footerLink.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray"
                    >
                      <a href="">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex  justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center  gap-2 font-montserrat cursor-pointer">
          <div className="flex items-center gap-2">
            {' '}
            <img
              src={copyrightSign}
              alt="Copyright Sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>{new Date().getFullYear()} Nike. All rights reserved.</p>
          </div>

          <p>
            Developed by <span className="text-white font-medium">Tasos</span>
          </p>
          <p className="text-white font-medium">Terms & Conditions</p>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
