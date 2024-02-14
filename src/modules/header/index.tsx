import React, {useEffect, useRef, useState} from 'react';
import './header.css';
import Logo from '../../assets/icons/logo.svg';
import Gift from '../../assets/icons/gift.svg';
import GiftTwo from '../../assets/icons/gift-two.svg';
import Rocket from '../../assets/icons/rocket.svg';
import RocketTwo from '../../assets/icons/rocket-two.svg';
import Union from '../../assets/icons/union.svg';
import BurgerMenuIcon from '../../assets/icons/hamburger-menu.svg';
import CloseIcon from '../../assets/icons/close.svg';
import { Button } from '../../components/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCompanySelectorOpen, setCompanySelectorOpen] = useState(false);
  const menuDropdownRef = useRef<HTMLDivElement>(null);
  const companySelectorRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (event: React.MouseEvent, menuType: 'mainMenu' | 'companySelector') => {
    event.stopPropagation();
    if (menuType === 'mainMenu') {
      setMenuOpen(!isMenuOpen);
      if (isCompanySelectorOpen) setCompanySelectorOpen(false); // Закрываем другое меню, если оно открыто
    } else if (menuType === 'companySelector') {
      setCompanySelectorOpen(!isCompanySelectorOpen);
      if (isMenuOpen) setMenuOpen(false); // Закрываем другое меню, если оно открыто
    }
  };

  const selectOption = (option: string) => {
    console.log(`Option selected: ${option}`);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (companySelectorRef.current && !companySelectorRef.current.contains(event.target as Node)) {
        setCompanySelectorOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


    return (
        <header className="header">
          <div className="header__logo">
              <Logo />
          </div>
            <div className="header__actions">
                  <div className={`header__menu ${isMenuOpen ? 'active' : ''}`} onClick={(e) => toggleMenu(e, 'mainMenu')} ref={menuDropdownRef}>
                    {isMenuOpen ? <CloseIcon /> : <BurgerMenuIcon />}
                        <ul className="dropdown-menu__actions">
                            <li className="menu__item" onClick={() => selectOption('Money')}>Money</li>
                            <li className="menu__item" onClick={() => selectOption('Team')}>Team</li>
                            <li className="menu__item" onClick={() => selectOption('Cards')}>Cards</li>
                            <li className="menu__item" onClick={() => selectOption('Help center')}>Help center</li>
                            <li className="menu__item" onClick={() => selectOption('Invite your partners')}>
                                <Gift /> Invite your partners
                            </li>
                            <li className="menu__item" onClick={() => selectOption('Upgrade plan')}>
                                <Rocket /> Upgrade plan
                            </li>
                        </ul>
                    </div>
                    <nav className="header__menu-links">
                        <a href="/" className="header-menu__link">Money</a>
                        <a href="/" className="header-menu__link">Team</a>
                        <a href="/" className="header-menu__link">Cards</a>
                        <a href="/" className="header-menu__link">Help center</a>
                        <div className='header-menu__button'>
                            <GiftTwo />
                            <a href="/" className="header-menu__link icon">Invite your partners</a>
                        </div>
                    </nav>
            </div>
            <div className="action-bar">
                <Button className="action-bar__button" width="medium" color="light-royal-12" textColor="text-blue" icon={<RocketTwo />}>
                    Upgrade plan
                </Button>
                  <div className={`company-selector ${isCompanySelectorOpen ? 'active' : ''}`} onClick={(e) => toggleMenu(e, 'companySelector')} ref={companySelectorRef}>
                      <div className="selector__icon">T</div>
                      <span className="selector__title">TESLA S.R.L.</span>
                      <span className={`selector__toggle ${isCompanySelectorOpen ? 'toggled' : ''}`}><Union /></span>
                      <div className='dropdown-menu'>
                          <ul className="menu__list">
                              <li className="menu__item" onClick={() => selectOption('TESLA S.R.L.')}>TESLA S.R.L.</li>
                              <li className="menu__item" onClick={() => selectOption('Apple')}>Apple</li>
                              <li className="menu__item" onClick={() => selectOption('Netflix')}>Netflix</li>
                          </ul>
                      </div>
                  </div>
              </div>
        </header>
    );
  };
