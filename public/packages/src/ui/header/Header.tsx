"use client";
import * as React from "react";
import { Button } from "../button";
import { motion } from "framer-motion";
import { UseAppInView } from "../../../../context/root.context";

import { TYPE } from "../layout/root-layout";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useDeleteMutation } from "../../store/post/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "../dialog/Dialog";

type props = {
  type: typeof TYPE;
};

export const Header: React.FC<props> = ({ type }) => {
  const { inView } = UseAppInView();
  const { id = "" } = useParams();
  const router = useRouter();
  const [deletePost, { isLoading: deletingPost }] = useDeleteMutation();

  return (
    <>
      <motion.div
        className={`w-full z-50 fixed top-0 left-0 h-[80px] border-b border-b-black flex justify-between items-center px-20 tranition-all ease-in-out duration-500 ${
          inView ? "bg-primary" : "bg-white"
        }`}
      >
        <div className="bg-logo h-[38px] w-[50px] bg-contain bg-no-repeat" />
        <div className="flex gap-2 justify-between items-center">
          {type === "ROOT" ? (
            <Link href="/editor">
              <Button rounded="lg" color="secondary">
                Write Post
              </Button>
            </Link>
          ) : (
            <>
              <Dialog>
                <DialogTrigger>
                  <Button
                    rounded="lg"
                    color="primary"
                    StartIcon={<BiEditAlt fill="#fff" />}
                  >
                    Edit
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader title="Edit Blog post" />
                  <div className="text-sm font-light text-black">
                    Are you sure you want to edit this post?
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => {
                        router.push(`/editor/${id}`);
                      }}
                      color="primary"
                    >
                      Continue
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger>
                  <Button
                    rounded="lg"
                    color="primary"
                    StartIcon={<AiFillDelete fill="#fff" />}
                  >
                    Delete
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader title="Delete Blog post" />
                  <div className="text-sm font-light text-black">
                    Are you sure you want to delete this post?
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => {
                        deletePost(id as string)
                          .unwrap()
                          .then((res) => {
                            router.push("/");
                          })
                          .catch((e) => {
                            console.log(e, "error");
                          });
                      }}
                      loading={deletingPost}
                      color="primary"
                    >
                      Continue
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </div>
      </motion.div>
      <Dialog>
        <DialogTrigger>
          <Button
            rounded="lg"
            color="primary"
            StartIcon={<BiEditAlt fill="#fff" />}
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader title="Edit Blog post" sub_title="Confirm you" />
        </DialogContent>
      </Dialog>
    </>
  );
};
