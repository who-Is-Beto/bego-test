import React, { useMemo } from 'react';
import './DetailStep.css';

const DetailStep: React.FC<{ index: number; destination: GetOrdersDestination }> = ({
  destination,
  index,
}): JSX.Element => {
  const getCity: string = useMemo((): string => {
    const city = destination.address.split(',')[2].replace(/[0-9]/g, '');
    return city;
  }, []);

  return (
    <div className="order-stephs__details">
      {index % 2 ? (
        <div className="relative w-14 h-10 border-2 border-transparent bg-bego__darkBlack border-b-bego__darkBlack rounded-full grid place-items-center p-1">
          <div className="absolute z-0 bg-bego__lightBlack w-6 h-6 border-2 rounded-full border-bego__darkBlack"></div>
        </div>
      ) : (
        <>
          <div className="order-stephs__details__icon__bg"></div>
          <img
            className="order-stephs__details__icon"
            src={`/src/assets/recolección-black.svg`}
            alt={`order recolección icon`}
          />
        </>
      )}

      <div className="order-stephs__content border-b-[1px] border-bego__darkerGray py-4">
        <small className="order-stephs__content__steph">{index % 2 ? 'dropoff' : 'pickup'}</small>
        <p className="order-stephs__content__city">{getCity}</p>
        <p className="order-stephs__content__adress">{destination.address}</p>
      </div>
    </div>
  );
};

export default DetailStep;
