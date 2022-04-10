import React from 'react';

const Background = () => {
  return (
    <picture>
      <souce srcset="../../assets/images/simplehomepage.avif" />
      <souce srcset="../../assets/images/simplehomepage.jp2" />
      <img src="../../assets/images/simplehomepage.png" alt="background" />
    </picture>
  );
};

export default Background;
