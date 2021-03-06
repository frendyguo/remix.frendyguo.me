import React from 'react';
import { Link } from 'remix';
import { PostProps } from './types';
import dayjs from 'dayjs';
import styles from './styles.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
};

const Post: React.FC<PostProps> = ({
  title,
  slug,
  date,
  readingTime,
  description
}) => {
  return (
    <article className='border rounded text-neutral-500/[.87] dark:text-white/[.87] pt-2 px-3 pb-3 mb-4 tablet:mb-5'>
      <time className='text-xs text-neutral-300/[.87] dark:text-white/[.87] dark:font-normal text-opacity-relax font-semibold'>
        {dayjs(date).format('DD MMMM YYYY')} - {readingTime?.toFixed()} mins read
      </time>
      <h2 className='text-lg leading-6 mt-1 font-bold'>
        <Link title={title} to={slug} className="text-opacity-relax">{title}</Link>
      </h2>
      <p className='text-sm mt-2 font-medium text-opacity-relax'>
        {description}
      </p>
    </article>
  );
};

export default Post;
