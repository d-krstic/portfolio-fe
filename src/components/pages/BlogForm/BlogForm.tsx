import Button from '@mui/material/Button';
import React, { FC, useRef, useState } from 'react';
import { submitBlog } from 'src/store/actions/blogActions';
import { useAppDispatch } from 'src/store/app/hooks';

import classes from './BlogForm.module.scss';

const BlogForm: FC = () => {
  const tagsRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    content: '',
    id: 'dummy',
    date: 'dummy',
  });

  const handleClick = () => {
    //fills tags and sends form to api
    formData.tags = tagsRef.current.value.split(' ');
    dispatch(submitBlog(formData));
  };

  return (
    <>
      <div className={classes.Form}>
        <input
          className={classes.Input}
          type="text"
          placeholder="title"
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <br />
        <input
          className={classes.Input}
          type="text"
          placeholder="tags"
          ref={tagsRef}
        />
        <br />
        <textarea
          className={classes.Input}
          placeholder="content"
          value={formData.content}
          onChange={(e) => {
            setFormData({ ...formData, content: e.target.value });
          }}
        />
        <br />
        <Button color="primary" onClick={handleClick}>
          Upload
        </Button>
      </div>
    </>
  );
};

export default BlogForm;
