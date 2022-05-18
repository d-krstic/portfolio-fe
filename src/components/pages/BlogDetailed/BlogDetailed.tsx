import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import React, { FC, useEffect } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router';
import { routes } from 'src/routes';
import { getBlog } from 'src/store/actions/blogActions';
import { useAppDispatch, useAppSelector } from 'src/store/app/hooks';
import { Theme } from 'src/store/models/Theme';

import classes from './BlogDetailed.module.scss';

const BlogDetailed: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { paramId } = useParams(); //gets id from url
  const blog = useAppSelector((state) => state.blog.currentBlog);

  //componentDidMount - calls API
  useEffect(() => {
    dispatch(getBlog({ id: paramId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    navigate(routes.BLOG);
  };

  return (
    <>
      <div className={classes.Content}>
        <div className={classes.Button}>
          <Button
            variant="outlined"
            onClick={handleClick}
            className={classes.Module}
          >
            <AiOutlineLeft className={classes.Icon} onClick={handleClick} />
            Back
          </Button>
        </div>

        <h2>{blog?.title}</h2>
        {blog?.tags?.map((tag, i) => (
          <Chip
            className={classes.Chip}
            key={i}
            label={tag}
            variant={
              localStorage.getItem('theme') === Theme.DARK
                ? 'outlined'
                : 'filled'
            }
          />
        ))}
        <p>{blog?.content}</p>
        <br />
        <p>{blog?.date.substring(0, 10)} ~ Denis</p>
      </div>
    </>
  );
};

export default BlogDetailed;
