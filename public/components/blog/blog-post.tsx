'use client';

import * as React from 'react';
import { Post } from './post/post';
import { useGetPostsQuery } from '../../packages/src/store/post/api';
import { useEffect } from 'react';

export const BlogPost = () => {
  const { isLoading, data, refetch } = useGetPostsQuery();
  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="lg:px-20 px-4 py-10 justify-between w-full items-start">
      <div className="w-full lg:w-[60%]">
        {data?.map((element, idx) => {
          const parser = new DOMParser();
          const n = parser.parseFromString(element.content, 'text/html');
          const plainText = n.body.textContent?.toString();
          return (
            <Post
              key={idx}
              author={element.author}
              title={element.title}
              description={element.description}
              content={plainText?.toString().slice(0, 80).concat('...') || ''}
              _id={element._id}
              read_time="12 mins"
              _createdAt={element._createdAt as Date}
              header_image={
                'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              }
            />
          );
        })}
        {data?.length === 0 && <p>There's currently no post</p>}
      </div>
      <div className=" sticky top-[6rem] hidden lg:iniline w-[35%]">
        <h3 className="font-bold text-lg">
          Discover more of what matters to you
        </h3>
        <div className="flex  gap-2 mt-2 flex-wrap justify-start items-center">
          {[
            'Programming',
            'Data Science',
            'Technology',
            'Writing',
            'Fiction',
          ].map((element) => (
            <p
              key={element}
              className="bg-[rgba(0,0,0,0.1)] px-4 py-2 text-sm w-fit text-black font-light rounded-full"
            >
              {element}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
