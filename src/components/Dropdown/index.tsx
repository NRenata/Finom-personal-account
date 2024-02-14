import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

interface DropdownProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownProps> = ({ children, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-menu" ref={dropdownRef}>
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {icon && <span className="dropdown-button-icon">{icon}</span>}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    {children}
                </div>
            )}
        </div>
    );
};
