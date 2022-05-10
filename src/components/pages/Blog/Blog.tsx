import React, { FC, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import BlogPost from 'src/components/ui/BlogPost/BlogPost';
import { routes } from 'src/routes';
import { getBlogs } from 'src/store/actions/blogActions';
import { useAppDispatch, useAppSelector } from 'src/store/app/hooks';

import classes from './Blog.module.scss';

const Blog: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const blogs = useAppSelector((state) => state.blog.blogs);

  //componentDidMount - calls API
  useEffect(() => {
    dispatch(getBlogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    navigate(routes.BLOG_SUBMIT);
  };

  return (
    <>
      <h1>
        Blog
        {localStorage.getItem('apiKey') !== null && (
          <AiOutlinePlus className={classes.Icon} onClick={handleClick} />
        )}
      </h1>
      {blogs?.map((post, i) => (
        <BlogPost post={post} key={i} />
      ))}
    </>
  );
};

export default Blog;
