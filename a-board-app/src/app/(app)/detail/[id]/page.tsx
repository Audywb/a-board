"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface PostItem {
  _id: string;
  id: string;
  username: string;
  community: string;
  title: string;
  body: string;
  create_at: string;
}

interface CommentItem {
  _id: string;
  postId: string;
  username: string;
  comment: string;
  create_at: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [addcomment, setAddComment] = useState<string>("");
  const { data: session } = useSession();

  useEffect(() => {
    // console.log(params.id);
    fetchPosts(params.id);
  }, [params]);

  useEffect(() => {
    fetchComments(params.id);
  }, [params]);

  const fetchPosts = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/post/by-id?id=${id}`
      );
      setPosts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch posts");
      setIsLoading(false);
    }
  };

  const fetchComments = async (id: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/comment/view/${id}`
      );
      setComments(response.data);
    } catch (err) {
      setError("Failed to fetch posts");
    }
  };

  const onHome = () => {
    router.push("/");
  };

  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    // console.log("comment:", addcomment);
    setIsSpinner(true);
    try {
      const postId = params.id;
      const username = session?.user?.name;
      const comment = addcomment;
      if (username) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL_AUTH}/comment/create`,
          {
            username,
            comment,
            postId,
          }
        );
        if (response.data) {
          fetchComments(postId);
          setAddComment("");
          setIsSpinner(false);
        }
      } else {
        router.push("/sign-in");
      }
    } catch (err) {
      setIsSpinner(false);
      // console.log("Failed to fetch create post.");
    }
  };

  const clearComment = () => {
    setAddComment("");
  };

  return !isLoading ? (
    <div className="bg-white min-h-screen text-text-base">
      <div className="lg:grid lg:grid-cols-8 px-2 pt-4">
        <div></div>
        <div className="lg:col-span-6">
          {posts.map((post, index) => (
            <div key={index}>
              <button
                className="btn btn-circle bg-green-100 hover:bg-green-300"
                onClick={onHome}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3398 8.40674H1.33984M1.33984 8.40674L8.33984 15.4067M1.33984 8.40674L8.33984 1.40674"
                    stroke="#243831"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex mt-4">
                <div className="flex items-center">
                  <div className="relative inline-block pr-2">
                    <Image
                      className="w-12 h-12 rounded-full border-2 border-white"
                      src="/profile/testprofile.jpg"
                      width={24}
                      height={24}
                      alt="profile photo"
                    />
                    <span className="w-4 h-4 rounded-full bg-success border-2 border-white absolute bottom-0.5 right-0.5"></span>
                  </div>
                  <p className="font-medium text-lg">{post?.username}</p>
                  <p className="font-medium opacity-50 pl-3 text-sm">
                    {formatDistanceToNow(new Date(post?.create_at), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-2">
                <div className="badge badge-ghost text-sm text-text-base p-3">
                  {post.community}
                </div>
                <p className="mt-2 font-bold text-text-base text-2xl">
                  {post.title}
                </p>
                <p className="text-text-base text-sm lg:text-lg">
                  {post.body}
                </p>
                <div className="mt-4 flex items-center justify-start">
                  <div className="flex items-center text-gray-300 text-sm mr-8">
                    <Image
                      src="/icon/message.svg"
                      width={22}
                      height={22}
                      alt="Comments icon"
                    />
                    <p className="text-gray-300 ml-2">
                      {comments.length || ""} Comments
                    </p>
                  </div>
                </div>
                <textarea
                  className="w-full textarea textarea-bordered mt-4 text-sm min-h-24"
                  placeholder="What's on your mind..."
                  onChange={handleComment}
                  value={addcomment || ""}
                ></textarea>
                <div className="flex justify-end mt-2">
                  <button
                    className="bg-white hover:bg-green-100 border-success border-2 text-success py-2 px-1.5 lg:px-2 xl:px-4 rounded-lg text-sm font-semibold mx-2 w-24"
                    onClick={clearComment}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-success hover:bg-green-300 text-white py-2 px-1.5 lg:px-2 xl:px-4 rounded-lg text-sm font-semibold w-24"
                    onClick={handleSubmitComment}
                  >
                    {isSpinner ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : (
                      "Post"
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
          {comments.map((item, index) => (
            <div className="mb-8" key={index}>
              <div className="flex items-center mt-2">
                <div className="avatar">
                  <div className="rounded-full w-9 -my-2 mr-2">
                    <Image
                      src="/icon/avatar.svg"
                      width={24}
                      height={24}
                      alt="avatar"
                    />
                  </div>
                </div>
                <span className="w-4 h-4 rounded-full bg-success border-2 border-white absolute bottom-0.5 right-0.5"></span>
                <p className="font-medium text-lg">{item?.username}</p>
                <p className="font-medium opacity-50 pl-2 text-sm">
                  {formatDistanceToNow(new Date(item?.create_at), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <p className="font-normal text-lg text-text-base pl-11">
                {item?.comment}
              </p>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center bg-white min-h-screen">
      <div
        className="inline-block h-8 w-8 mt-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-gray-300 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
      </div>
    </div>
  );
}
