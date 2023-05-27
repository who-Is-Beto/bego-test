import React, { useMemo } from 'react';
import './OrderCard.css';
import OrderStheps from './OrderStephs';
import Button from '../Button';

const OrderCard: React.FC<{ order: ResultOrders }> = ({ order }): JSX.Element => {
  const getDate: string = useMemo((): string => {
    const now = new Date().getTime();
    const futureDate = new Date(order.start_date).getTime();

    const timeleft = futureDate - now;

    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    return `${hours}:${minutes}:${seconds}`;
  }, []);

  return (
    <div className="card__wrapper">
      <div className="card__order">
        <span className="card__order__text">Order</span>{' '}
        <span className="card__order__number">#{order.order_number}</span>
      </div>

      <div className="card">
        <div className="card__content">
          <header className="card__content__header">
            <div className="card__content__header__type">
              <img
                className="card__content__header__type__icon"
                src={`src/assets/${order.type}.svg`}
                alt={`${order.type} icon`}
              />
              <span>{order.type}</span>
            </div>
            <div className="card__content__header__status">
              <div
                className={`card__content__header__status__dot--${
                  order.status === 3 || order.status === 1 ? 'active' : 'inactive'
                }`}
              ></div>
              <span>{order.status_string}</span>
            </div>
          </header>

          <div className="card__content__body">
            {order.destinations.map(
              (destination, index): JSX.Element => (
                <OrderStheps key={index} destination={destination} />
              ),
            )}
          </div>

          <footer className="card__content__footer">
            <div className="w-1/2">
              {(order.status === 0 || order.status === 2) && (
                <Button type="secondary">
                  Start Pickup in <span className="text-bego__yellow">{getDate}</span>
                </Button>
              )}
              {order.status === 4 && <Button type="primary">It's time for pickup</Button>}
            </div>
            <div className="w-1/3">
              <Button href={`/order/${order.order_number}`} type="primary">
                Resume <img src="src/assets/eye.svg" alt="eye icon" />
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
