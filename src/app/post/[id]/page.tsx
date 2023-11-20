'use client';
import { AppRootLayout } from '../../../../public/packages/src/ui/layout/root-layout';
import { Avatar } from '../../../../public/packages/src/ui/avatar/Avatar';
import { TfiComment } from 'react-icons/tfi';
import { PiHandsClappingThin } from 'react-icons/pi';
import moment from 'moment';
import { useGetPostQuery } from '../../../../public/packages/src/store/post/api';
import { useEffect } from 'react';

const SinglePost = ({ params }: { params: { id: string } }) => {
  const { isLoading, data } = useGetPostQuery(params.id, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  useEffect(() => {
    if (data?.content) {
      const doc = document.querySelector('.blog_post') as HTMLParagraphElement;
      if (doc) {
        doc.innerHTML = data.content;
      }
    }
  }, [data]);

  return (
    <AppRootLayout type="VIEW">
      <div className="w-full flex justify-center items-center">
        <div className="lg:w-[50%] py-12 w-[95%] lg:max-w-[1200px]">
          <h1 className="font-bold leading-[1em] text-[2.5em] text-black ">
            {data?.title}
          </h1>
          <p className="text-text-primary text-lg font-light py-4">
            {data?.description}
          </p>
          <Avatar
            indicator={
              <div>
                <p className="font-regular text-sm">James Morrisn hames</p>
                <p className="font-light pt-2 text-xs text-text-primary">
                  8 mins - {moment(data?._createdAt).fromNow()}
                </p>
              </div>
            }
            size="lg"
            alt="image"
          />
          <div className="w-full flex justify-start items-center gap-4 sticky top-20 bg-white py-6 my-10 border-y border-y-text-text-primary">
            <div className="flex justify-start items-center gap-[2px]">
              <PiHandsClappingThin />
              <p className="text-xs font-light text-black">33</p>
            </div>
            <div className="flex justify-start items-center gap-[2px]">
              <TfiComment size={12} />
              <p className="text-xs font-light text-black">33</p>
            </div>
          </div>
          <div className="">
            <div className="w-full bg-cover bg-no-repeat bg-center h-[500px] bg-[url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80')]" />
            <p className="text-black text-lg font-light pt-6 blog_post"></p>
          </div>
        </div>
      </div>
    </AppRootLayout>
  );
};

export default SinglePost;
