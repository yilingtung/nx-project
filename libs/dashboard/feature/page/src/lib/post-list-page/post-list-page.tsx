import { useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { CardPost, Tab, Tabs } from '@nx-project/shared/ui';

import posts from './posts';

export interface PostListPageProps {
  className?: string;
}

type PostStatus = 'ALL' | 'PUBLISHED' | 'DRAFT';

export function PostListPage({ className }: PostListPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchType = searchParams.get('type') || 'ALL';

  const tabs: { key: PostStatus; label: string; amount: number }[] = [
    {
      key: 'ALL',
      label: '全部',
      amount: 12,
    },
    { key: 'PUBLISHED', label: '已發佈', amount: 9 },
    { key: 'DRAFT', label: '草稿', amount: 3 },
  ];

  const handleSubmit = useCallback(
    (tabType: PostStatus) => {
      setSearchParams({ type: tabType });
    },
    [setSearchParams]
  );

  return (
    <div className={twMerge(className)}>
      <div className="sticky top-0 bg-netural-10">
        <Tabs className="pt-2">
          <>
            {tabs.map((tab) => (
              <Tab
                key={tab.key}
                className="first:pl-6 last:p-r6"
                active={tab.key === searchType}
                onClick={() => handleSubmit(tab.key)}
              >
                {tab.label} {tab.amount}
              </Tab>
            ))}
          </>
        </Tabs>
      </div>
      <ul className="px-6 pt-2 pb-10 w-full">
        {posts.map((post) => (
          <Link
            key={post.id}
            className="not-last:after:content-[''] not-last:after:border-b-[1px] not-last:after:border-netural-30 not-last:after:flex not-last:after:my-6"
            to={`/posts/${post.id}`}
          >
            <CardPost
              title={post.title || 'Untitle'}
              author={post.author}
              time={post.createdAt}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default PostListPage;
