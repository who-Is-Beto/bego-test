import React from 'react';
import Navbar from '../../components/Navbar';

const OrderTemplate: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <section className="grid gap-8">
      <Navbar />
      {children}
    </section>
  );
};

export default OrderTemplate;
