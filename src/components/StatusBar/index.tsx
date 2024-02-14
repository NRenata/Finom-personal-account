import React from 'react';
import './statusBar.css';

interface StatusBarProps {
    title: string;
    subtitle: string | JSX.Element;
    current: number;
    total: number;
    className?: string;
    color: string; // Принимает 'blue' или 'red' для разных цветов полосы
}
export const StatusBar: React.FC<StatusBarProps> = ({ title, subtitle, current, total, color, className }) => {
    const isUnlimited = current > total;
    const width = isUnlimited ? '100%' : `${(current / total) * 100}%`;
    const countText = isUnlimited ? <span className="status-bar__unlimited">Unlimited</span> : `${current} / `;

    return (
        <div className={`status-bar ${className}`.trim()}>
            <div className="status-bar__info">
                <span className="status-bar__title">{title}</span>
                <span className="status-bar__count">
                    {countText}{!isUnlimited && <span className="status-bar__total">{total}</span>}
                 </span>
            </div>
            <div className="status-bar__track">
                <div
                    className={`status-bar__progress status-bar__progress--${color}`}
                    style={{ width }}
                />
                </div>
            <div className="status-bar__subtitle">{subtitle}</div>
        </div>
    );
};
