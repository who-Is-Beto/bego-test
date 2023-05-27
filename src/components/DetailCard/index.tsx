import React from 'react';
import './DetailCard.css';
import DetailStep from './DetailStep';

const DetailCard: React.FC<{ details: GetOrdersResult }> = ({ details }): JSX.Element => {
  return (
    <div className="card rounded-tr-none rounded-br-none relative left-[10%]">
      <div className="card__content rounded-tr-none rounded-br-none">
        <header className="card__details__header">
          <small className="card__details__header__reference">
            Referencia {details.reference_number}
          </small>
          <p>Order #{details.order_number}</p>
        </header>

        <div className="card__details__body top-[20%] left-[30%] gap-0 py-0 pr-0">
          {details.destinations.map((destination, index) => (
            <DetailStep key={index} index={index} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
