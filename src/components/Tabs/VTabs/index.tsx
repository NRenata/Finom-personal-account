import React, {useEffect, useRef, useState} from 'react';
import './vtabs.css';

export const VTabs: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Plan and limits');
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const selectedTabElement = document.querySelector('.tab-item.selected');
        if (selectedTabElement && indicatorRef.current) {
            const { offsetTop, offsetHeight } = selectedTabElement as HTMLElement;
            indicatorRef.current.style.top = `${offsetTop}px`;
            indicatorRef.current.style.height = `${offsetHeight}px`;
        }
    }, [selectedTab]);

    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="tabs-container">
            <div className="tab-indicator" ref={indicatorRef}></div>
            <div className="tab-title-section-personal">PERSONAL</div>
            <div className="tab-section">
                <div className={`tab-item ${selectedTab === 'Profile' ? 'selected' : ''}`} onClick={() => handleTabClick('Profile')}>Profile</div>
                <div className={`tab-item ${selectedTab === 'Security' ? 'selected' : ''}`} onClick={() => handleTabClick('Security')}>Security</div>
                <div className={`tab-item ${selectedTab === 'Notifications' ? 'selected' : ''}`} onClick={() => handleTabClick('Notifications')}>Notifications</div>
            </div>
            <div className="tab-title-section-company">TESLA S.R.L.</div>
            <div className="tab-section">
                <div className={`tab-item ${selectedTab === 'Business profile' ? 'selected' : ''}`} onClick={() => handleTabClick('Business profile')}>Business profile</div>
                <div className={`tab-item ${selectedTab === 'E-invoicing' ? 'selected' : ''}`} onClick={() => handleTabClick('E-invoicing')}>E-invoicing</div>
                <div className={`tab-item ${selectedTab === 'Plan and limits' ? 'selected' : ''}`} onClick={() => handleTabClick('Plan and limits')}>Plan and limits</div>
                <div className={`tab-item ${selectedTab === 'Team' ? 'selected' : ''}`} onClick={() => handleTabClick('Team')}>Team</div>
            </div>
        </div>
    );
};