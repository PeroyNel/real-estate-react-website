import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__opensans" style={{ color: '#F37B20'  }}>{title}</p>
    {/*<img src={images.spoon} alt="spoon" className="spoon__img"/> */}
  </div>
);

export default SubHeading;
