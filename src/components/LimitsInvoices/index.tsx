import React from 'react';
import { StatusBar } from '../StatusBar';
import { HTabs } from '../Tabs/HTabs';
import './limitsInvoices.css';

export const LimitsInvoices: React.FC = () => {
    return (
        <div className="limits-invoices">
            <HTabs />
                <div className='limits-invoices__status-bars'>
                    <div className='limits-invoices-status-bar-top'>
                        <StatusBar
                          className='limits-status-bar'
                          current={3}
                          total={6}
                          color="blue"
                          title="Team members"
                          subtitle={<span> Need more members? <a href="/upgrade" className="upgrade-link">Upgrade your plan</a></span>}
                        />
                        <StatusBar className='limits-status-bar' title="Outgoing e-invoices" subtitle='Send as many e-invoices as you want' current={11} total={10} color="blue" />
                    </div>
                    <div className='limits-invoices-status-bar-bottom'>
                        <StatusBar
                          className='limits-status-bar'
                          title="Connected sources (banks)"
                          subtitle={<span> Need more banks to connect? <a href="/upgrade" className="upgrade-link">Upgrade your plan</a></span>}
                          current={5}
                          total={5}
                          color="red"
                        />
                    </div>
                </div>
        </div>
    );
};
