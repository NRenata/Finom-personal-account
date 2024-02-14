import React from 'react';
import Dizzy from '../../assets/icons/dizzy.svg';
import Check from '../../assets/icons/check.svg';
import Close from '../../assets/icons/close.svg';
import { Button } from '../Button';
import confetti from 'canvas-confetti';
import './limitsBlock.css';

export const LimitsBlock: React.FC = () => {
  const makeConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
      <div className="limits-block-container">
          <div className="limits-head">
            <h1 className="premium-plan__head">Invoicing Start</h1>
            <a href="#" className="change-plan">Change plan</a>
          </div>
            <h2 className="price">6,99 &euro; <span>/mo</span></h2>
          <div className="billing-details">
            <p className="billing-info">
              We&#39;ll charge 6,99 &euro; on <time dateTime="2020-07-24">Jul &nbsp; 24, 2020</time>
            </p>
            <a href="#" className="billing-card">Change card &#42; &#42; &#42; 5423&nbsp;or billing info</a>
          </div>
              <div className="button--switch-plan">
                  <Button
                    color="royal-blue"
                    textColor="text-white"
                    width="large"
                    onClick={() => { console.log('Switch to annual plan'); makeConfetti(); }}
                  >
                    Switch to annual plan
                  </Button>
                  <p className="save-info">and save 24,00 € a year</p>
              </div>
                 <div className="divider"></div>
                 <h2 className="premium-plan-head">Explore new features<Dizzy /></h2>
                 <div className="premium-plan">
                   <div className="premium-plan__details">
                     <h3 className="premium-plan__title">Invoicing Premium</h3>
                       <ul className="premium-plan__list">
                         <li className="premium-plan__item"><span className="premium-plan__check"><Check /></span>Unlimited outgoing e-invoices</li>
                         <li className="premium-plan__item"><span className="premium-plan__check"><Check /></span>Unlimited connected banks</li>
                         <li className="premium-plan__item"><span className="premium-plan__check"><Check /></span>10 users</li>
                         <li className="premium-plan__item"><span className="premium-plan__check"><Check /></span>Expense management</li>
                       </ul>
                   </div>
                 <div className="premium-plan__pricing">
                    <div className="premium-plan__icon" onClick={makeConfetti}>
                        <Close />
                    </div>
                    <h3 className="premium-plan__price">&euro;20.99 /mo</h3>
                    <p className="premium-plan__billing-info">billed annually or €24.99<br/> billed monthly</p>
                    <Button
                      className="premium-plan__upgrade-button"
                      color="salmon-pink"
                      textColor="text-white"
                      width="small"
                      onClick={() => { console.log('Switch to annual plan'); makeConfetti(); }}
                    >
                      Upgrade
                    </Button>
                </div>
          </div>
      </div>
  );
};
