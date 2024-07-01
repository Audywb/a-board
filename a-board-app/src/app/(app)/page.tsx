"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "@/css/index.css";
import PostCard from "@/components/PostCard";
import DropDown from "@/components/DropDown";
import SelectCommu from "@/components/SelectCommunity";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface PostItem {
  _id: string;
  id: string;
  username: string;
  community: string;
  title: string;
  body: string;
  count_comment: number;
}

export default function Home() {
  const router = useRouter()
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSpinner, setIsSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCreate, setErrorCreate] = useState(false);
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [community, setCommunity] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_BASE_URL_AUTH + "/post/all-post"
      );
      setPosts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError("Failed to fetch posts");
      setIsLoading(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-4">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-gray-300 motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" />
        </div>
      </div>
    );
  if (error) return <p>{error}</p>;

  const handleIsOpen = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  const openModal = () => {
    if (session?.user) {
      const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
      }
    } else {
      router.push("/sign-in")
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };

  const handleSelectedCommu = (value: string) => {
    setCommunity(value);
    console.log("Community value:", value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleSubmit = async () => {
    setIsSpinner(true);
    console.log("Submit:", community, title, body, session?.user?.name);
    const username = session?.user?.name;
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL_AUTH + "/post/create",
        {
          username,
          community,
          title,
          body,
        }
      );
      if (response.data) {
        setErrorCreate(false);
        setIsSpinner(false);
        fetchPosts();
        closeModal();
        setTitle("");
        setCommunity("");
        setBody("");
      }
    } catch (err) {
      setErrorCreate(true);
      setIsSpinner(false);
      console.log("Failed to fetch create post.");
    }
  };

  const handleEdit = (item: PostItem) => {
    // console.log(item)
  };

  const handleDelete = (id: string) => {
    // console.log(id)
  };

  return (
    <div className="flex bg-gray-100">
      <div className="w-full">
        <div
          className={`flex justify-start w-full ${isOpen && "flex-col lg:flex-row"
            }`}
        >
          <div className="py-2 lg:w-full">
            <div
              className={`relative flex items-center bg-transparent w-full h-10 rounded-lg focus-within:shadow-lg overflow-hidden lg:border-green-100 lg:border-2 ${isOpen ? "border-green-100 border-2 visible" : ""
                }`}
            >
              <div
                className="grid place-items-center h-full w-12 text-text-base"
                onClick={handleIsOpen}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                onClick={handleIsOpen}
                className={`lg:hidden peer h-full w-full outline-none text-sm text-text-base pr-2 bg-transparent transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "sm:hidden lg:block"
                  }`}
                type="text"
                id="search"
                placeholder="Search"
              />
              <input
                className="sm:hidden lg:block peer h-full w-0 lg:w-full outline-none text-sm text-text-base pr-2 bg-transparent"
                type="text"
                id="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-end lg:items-center lg:pl-2 w-96">
            <DropDown onSelect={handleSelectedValue} />
            <button
              className="bg-success hover:bg-green-300 text-white py-2.5 px-1.5 lg:px-2 xl:px-4 rounded-lg text-sm"
              onClick={openModal}
            >
              Create +
            </button>
          </div>
        </div>
        <div>
          <PostCard
            post={posts}
            edit={false}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
      <div className="sm:w-0 lg:w-64"></div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-xl text-text-base">Create Post!</h3>
          <div className="mt-4">
            <SelectCommu onSelect={handleSelectedCommu} defaultValue="" />
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full mt-2"
              onChange={handleTitleChange}
            />
            <textarea
              className="w-full textarea textarea-bordered mt-2 min-h-[10rem]"
              placeholder="What's on your mind..."
              onChange={handleBodyChange}
            ></textarea>
          </div>
          {errorCreate && (
            <div
              role="alert"
              className="alert alert-error mt-2 h-10 py-2 rounded-lg"
            >
              <span>Please fill in complete information.</span>
            </div>
          )}
          <div className="flex justify-end mt-2">
            <form method="dialog">
              <button className="bg-white hover:bg-green-100 border-success border-2 text-success py-2 px-1.5 lg:px-2 xl:px-4 rounded-lg text-sm font-semibold mx-2 w-24">
                Cancel
              </button>
            </form>
            <button
              className="bg-success hover:bg-green-300 text-white py-2 px-1.5 lg:px-2 xl:px-4 rounded-lg text-sm font-semibold w-24"
              onClick={handleSubmit}
            >
              {isSpinner ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                "Post"
              )}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={closeModal}>
            close
          </button>
        </form>
      </dialog>
    </div>
  );
}
