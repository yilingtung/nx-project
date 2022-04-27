import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface PostsPageProps {
  className?: string;
}

export function PostsPage({ className }: PostsPageProps) {
  return (
    <div className={twMerge('flex h-screen', className)}>
      <ul>
        {Array.from(Array(6).keys()).map((element) => (
          <Link key={element} to={`/posts/${element}`}>
            {element}
          </Link>
        ))}
      </ul>
    </div>
  );
}
