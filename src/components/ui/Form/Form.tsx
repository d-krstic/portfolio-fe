import Button from '@mui/material/Button';
import classNames from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { submitForm } from 'src/store/actions/contactActions';
import { useAppDispatch } from 'src/store/app/hooks';

import letter from '../../../assets/msg.png';
import classes from './Form.module.scss';

export interface FormProps {
  onClick: () => void;
}

export interface ContactForm {
  name: string;
  eMail: string;
  message: string;
}

const Form: FC<FormProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const [valid, setValid] = useState(true);
  const imgRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    eMail: '',
    message: '',
  });

  const handleClick = () => {
    if (valid && formData.name && formData.eMail && formData.message) {
      //adds class for animation and trigger parent
      imgRef.current.classList.add(classes.AnimationFly);
      onClick();
      dispatch(submitForm(formData));
    } else {
      //creates error notification
      toast.error('Please fill the form correctly');
    }
  };

  const handleEnd = () => {
    //removes animation class when animation is over
    imgRef.current.classList.remove(classes.AnimationFly);
  };

  //checks if email is valid
  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(e.target.value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Letter} ref={imgRef} onAnimationEnd={handleEnd}>
        <img src={letter} alt="letter" />
      </div>
      <div className={classes.Form}>
        <form>
          <input
            className={classes.Input}
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            className={classNames(classes.Input, {
              [classes.Error]: !valid,
            })}
            type="email"
            placeholder="E-mail"
            onBlur={checkEmail}
            value={formData.eMail}
            onChange={(e) => {
              setFormData({ ...formData, eMail: e.target.value });
            }}
          />
          <textarea
            className={classes.Input}
            rows={10}
            placeholder="Message"
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
          />
          <Button variant="contained" color="primary" onClick={handleClick}>
            <AiOutlineMail className={classes.Icon} />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
