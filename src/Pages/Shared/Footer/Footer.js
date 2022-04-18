import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <footer>
      <p>copyright©{getCurrentYear()}</p>
    </footer>
    );
};

export default Footer;