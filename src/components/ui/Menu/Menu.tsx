import Switch from '@mui/material/Switch';
import React, { FC } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AiOutlineBulb, AiOutlinePoweroff } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { routes } from 'src/routes';
import { logout } from 'src/store/actions/authActions';
import { useAppDispatch } from 'src/store/app/hooks';

import menuIcon from '../../../assets/menu.png';
import MenuCell from '../MenuCell/MenuCell';
import classes from './Menu.module.scss';

export interface MenuProps {
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(routes.HOME);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerDesktop}>
        <MenuCell name="Home" url={routes.HOME} />
        <MenuCell name="About" url={routes.ABOUT} />
        <MenuCell name="Education" url={routes.EDUCATION} />
        <MenuCell name="Work" url={routes.WORK} />
        <MenuCell name="Blog" url={routes.BLOG} />
        <MenuCell name="Contacts" url={routes.CONTACT} />

        <div className={classes.RightSide}>
          <div className={classes.Toggle}>
            <AiOutlineBulb className={classes.Icon} />
            <Switch onClick={handleClick} />
          </div>

          {localStorage.getItem('apiKey') !== null && (
            <div className={classes.Logout}>
              <AiOutlinePoweroff onClick={handleLogout} />
            </div>
          )}
        </div>
      </div>

      <div className={classes.ContainerMobile}>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-custom-1"
            variant="secondary"
            className={classes.MenuButton}
          >
            <img src={menuIcon} alt="menu" />
          </Dropdown.Toggle>
          <Dropdown.Menu className={classes.Test}>
            <Dropdown.Item>
              <MenuCell name="Home" url={routes.HOME} />
            </Dropdown.Item>
            <Dropdown.Item>
              <MenuCell name="About" url={routes.ABOUT} />
            </Dropdown.Item>
            <Dropdown.Item>
              <MenuCell name="Education" url={routes.EDUCATION} />
            </Dropdown.Item>
            <Dropdown.Item>
              <MenuCell name="Work" url={routes.WORK} />
            </Dropdown.Item>
            <Dropdown.Item>
              <MenuCell name="Blog" url={routes.BLOG} />
            </Dropdown.Item>
            <Dropdown.Item>
              <MenuCell name="Contacts" url={routes.CONTACT} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Menu;
