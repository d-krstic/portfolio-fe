import { Divider } from '@mui/material';
import Switch from '@mui/material/Switch';
import React, { FC, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  AiOutlineBulb,
  AiOutlineMenu,
  AiOutlinePoweroff,
} from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { routes } from 'src/routes';
import { logout } from 'src/store/actions/authActions';
import { useAppDispatch } from 'src/store/app/hooks';

import MenuCell from '../MenuCell/MenuCell';
import classes from './Menu.module.scss';

export interface MenuProps {
  onClick: () => void;
}

const Menu: FC<MenuProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  const handleClick = () => {
    setChecked(!checked);
    onClick();
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate(routes.HOME);
  };

  const handleNavigate = (url: string) => {
    navigate(url);
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
            <Switch onClick={handleClick} checked={checked} />
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
            <AiOutlineMenu className={classes.Icon} />
          </Dropdown.Toggle>
          <Dropdown.Menu className={classes.DropdownMenu}>
            <Dropdown.Item onClick={() => handleNavigate(routes.HOME)}>
              <div className={classes.Link}>
                <span>HOME</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigate(routes.ABOUT)}>
              <div className={classes.Link}>
                <span>ABOUT</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigate(routes.EDUCATION)}>
              <div className={classes.Link}>
                <span>EDUCATION</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigate(routes.WORK)}>
              <div className={classes.Link}>
                <span>WORK</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigate(routes.BLOG)}>
              <div className={classes.Link}>
                <span>BLOG</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigate(routes.CONTACT)}>
              <div className={classes.Link}>
                <span>CONTACT</span>
              </div>
            </Dropdown.Item>
            <Divider className={classes.Divider} />
            <Dropdown.Item>
              <div className={classes.Toggle}>
                <AiOutlineBulb className={classes.Icon} />
                <Switch onClick={handleClick} checked={checked} />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Menu;
