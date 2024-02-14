import React, { useState } from 'react';
import './mainContent.css';
import Intercom  from '../../assets/icons/intercom-button.svg';
import { VTabs } from '../../components/Tabs/VTabs';
import { LimitsBlock } from '../../components/LimitsBlock';
import { LimitsInvoices } from "../../components/LimitsInvoices";
import confetti from 'canvas-confetti';

export const MainContent: React.FC = () => {
  const makeConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="main-content">
      <div className="left-block">
          <VTabs />
      </div>
      <div className="right-blocks">
          <div className="top-right-block">
            <LimitsBlock />
          </div>
          <div className="bottom-right-block">
            <LimitsInvoices />
          </div>
      </div>
      <div className="main-content__icon" onClick={makeConfetti}>
        <Intercom />
      </div>
    </div>
  );
};
