import React from 'react';
import './footer.css'; // Create a CSS file for styling, e.g., Footer.css
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              &copy; 2024 BlogHub. All rights reserved. | Designed by Your Kundan Kumar Sahu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
