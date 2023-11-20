import * as React from 'react';
import { Avatar } from '../../../packages/src/ui/avatar/Avatar';
import moment from 'moment';
import Link from 'next/link';
import { PostInterface } from '../../../packages/src/store/post/interface';

export const Post: React.FC<PostInterface> = (props) => {
  const { title, author, content, _createdAt, header_image, read_time, _id } =
    props;
  return (
    <Link href={`/post/${_id}`}>
      <div className="w-full mb-20 flex justify-start gap-4 items-start">
        <div className="w-[70%]">
          <Avatar
            indicator={
              <p className="font-regular text-sm">
                {author} <span className="opacity-50 text-bold"> In </span>
                Science
              </p>
            }
            size="md"
            alt="image"
          />
          <h2 className="text-xl py-2 leading-[1em] font-bold text-black">
            {title}
          </h2>
          <p className="text-text-primary font-light text-sm">{content}</p>
          <div className="flex pt-2 justify-start items-center gap-4">
            <p className="text-text-primary text-xs font-light">
              {moment(_createdAt).fromNow()}
            </p>
            <strong>.</strong>
            <p className="text-text-primary text-xs font-light">
              {read_time} read
            </p>
            <strong>.</strong>
            <p className="text-text-primary text-xs font-light px-4 py-1 bg-[rgba(0,0,0,0.1)] rounded-full">
              Fiction
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url('${header_image}')` }}
          className="w-[30%] h-[150px] bg-cover bg-no-repeat bg-center"
        />
      </div>
    </Link>
  );
};
