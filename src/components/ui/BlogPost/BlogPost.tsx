import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import classNames from 'classnames';
import React, { FC } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { routes } from 'src/routes';
import { BlogPost as bPost } from 'src/store/models/BlogPost';
import { Theme } from 'src/store/models/Theme';

import classes from './BlogPost.module.scss';

export interface BlogPostProps {
  post: bPost;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const navigate = useNavigate();
  const iconCss = classNames(classes.Inline, classes.Icon);

  const handleClick = () => {
    navigate(`${routes.BLOG}/${post.id}`);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Title}>
        <h2 className={classes.Inline}>{post.title}</h2>
        <AiOutlineRight className={iconCss} onClick={handleClick} />
      </div>

      {post.tags?.map((tag, i) => (
        <Chip
          className={classes.Chip}
          key={i}
          label={tag}
          variant={
            localStorage.getItem('theme') === Theme.DARK ? 'outlined' : 'filled'
          }
        />
      ))}
      <p>{post.content}</p>
      <span>Posted at: {post.date.substring(0, 10)}</span>
      <Divider />
    </div>
  );
};

export default BlogPost;
