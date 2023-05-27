import React, { useMemo } from 'react';
import './OrderStheps.css';
import { Images } from '@/constants/images';

const OrderStheps: React.FC<{ destination: DestinationOrders }> = ({
  destination,
}): JSX.Element => {
  const getCity: string = useMemo((): string => {
    const city = destination.address.split(',')[2].replace(/[0-9]/g, '');
    return city;
  }, []);

  const getDate: Date = useMemo((): Date => {
    if (destination.nickname === 'Recolección') {
      return new Date(destination.start_date);
    }
    return new Date(destination.end_date);
  }, []);

  return (
    <div className="order-stephs">
      <img
        className="order-stephs__icon"
        src={Images.get(destination.nickname.toLowerCase())}
        alt={`order ${destination.nickname} icon`}
      />

      <div className="order-stephs__content">
        <small className="order-stephs__content__steph">{destination.nickname.toUpperCase()}</small>
        <p className="order-stephs__content__city">{getCity}</p>
        <p className="order-stephs__content__adress">{destination.address}</p>
      </div>

      <div className="order-stephs__date">
        <small className="order-stephs__date__text">{getDate.toLocaleDateString()}</small>
        <small className="order-stephs__date__hour">
          {getDate.getHours()}:{getDate.getMinutes()}
        </small>
      </div>
    </div>
  );
};

export default OrderStheps;
