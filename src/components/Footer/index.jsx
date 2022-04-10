import React from 'react';
import './Footer.css';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <footer className="flex jst-even container">
      <div className="flex col text-md jst-center align-center gap-sm">
        <h2>Join Herbal ReLeaf</h2>
        <p>Sign up for our newsletter!</p>
        <form className="flex col gap-sm">
          <input type="text" name="first-name" placeholder="First Name" className="input" />
          <input type="text" name="last-name" placeholder="Last Name" className="input" />
          <input type="email" name="email" placeholder="Email" className="input" />
          <button type="submit" className="btn btn-primary">
            Get Releaf
          </button>
        </form>
      </div>
      <div className="flex col text-md">
        <h2>Talk to us</h2>
        <div>FAQs</div>
        <div>General Inquiries</div>
        <div>Careers</div>
        <div>Events and Catering</div>
        <div>Fund Raising</div>
        <div>Donation Request</div>
        <div>News & Events</div>
      </div>
      <div className="flex col text-md align-center gap-sm">
        <h2>Social Media</h2>
        <div className="flex gap-sm">
          <div className="social flex jst-center align-center">
            <img src={twitter} alt="twitter" className="icon" />
          </div>
          <div className="social flex jst-center align-center">
            <img src={instagram} alt="instagram" className="icon" />
          </div>
          <div className="social flex jst-center align-center">
            <img src={facebook} alt="facebook" className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
