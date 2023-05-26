import React from 'react';
import Navbar from '../../components/Navbar';
import Input from '../../components/Input/Input';

const OrderTemplate: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <section className="grid gap-8">
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Input
          type="search"
          icon="search"
          placeholder="search..."
          handleChange={() => {}}
          name="searchItem"
          value=""
        />
      </div>
      {children}
    </section>
  );
};

export default OrderTemplate;
