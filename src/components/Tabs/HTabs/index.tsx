import React, {useEffect, useState} from 'react';
import './htabs.css';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
    return (
        <div className={`tab ${isActive ? 'tab--active' : ''}`} onClick={onClick}>
            <span className="tab__text">{label}</span>
        </div>
    );
};

export const HTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('limits');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeTabElement = document.querySelector('.tab--active');
        if (activeTabElement) {
            const { offsetLeft, offsetWidth } = activeTabElement as HTMLElement;
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
        }
    }, [activeTab]);

    return (
        <div className="tabs">
            <div className="tabs__indicator" style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }} />
            <Tab label="Limits" isActive={activeTab === 'limits'} onClick={() => setActiveTab('limits')} />
            <Tab label="Invoices" isActive={activeTab === 'invoices'} onClick={() => setActiveTab('invoices')} />
        </div>
    );
};

