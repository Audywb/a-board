"use client";
import Image from "next/image";
import "@/css/index.css";
import { useRouter } from "next/navigation";

interface PostItem {
  _id: string;
  id: string;
  username: string;
  community: string;
  title: string;
  body: string;
}

interface PostCardProps {
  post: PostItem[];
  edit: boolean;
  onEdit: (item: PostItem) => void | null;
  onDelete: (id: string) => void | null;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  edit,
  onEdit,
  onDelete,
}) => {
  const router = useRouter();

  const handleEditClick = (item: PostItem) => {
    console.log("Item:", item);
    onEdit(item);
  };

  const handleDeleteClick = (id: string) => {
    onDelete(id);
  };

  const toPostDetail = (id: string) => {
    router.push(`detail/${id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg my-8 w-full">
      {post.map((item, i) => (
        <div key={i} className="post-card cursor-pointer" onClick={() => toPostDetail(item._id)}>
          <div className="flex items-start px-5 pt-6">
            <div className="avatar">
              <div className="rounded-full w-9 -my-2 mr-2">
                <Image
                  src="/profile/testprofile.jpg"
                  width={24}
                  height={24}
                  alt="profile photo"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center">
                <h2 className="text-lg font-medium text-gray-300 -mt-1 w-full">
                  {item.username}{" "}
                </h2>
                {edit && (
                  <>
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="mr-1"
                      >
                        <Image
                          src="/icon/edit-03.svg"
                          width={24}
                          height={24}
                          alt="edit icon"
                        />
                      </button>
                      <button onClick={() => handleDeleteClick(item._id)}>
                        <Image
                          src="/icon/trash-01.svg"
                          width={24}
                          height={24}
                          alt="trash icon"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="px-5 mt-3 mb-3">
            <div className="badge badge-ghost text-sm text-text-base p-3">
              {item.community}
            </div>
            <p className="mt-2 font-bold text-text-base">{item.title}</p>
            <p className="text-text-base text-sm whitespace-pre-line break-normal truncate truncate-2-lines">
              {item.body}
            </p>
            <div className="mt-4 flex items-center justify-start">
              <div className="flex items-center text-gray-300 text-sm mr-8">
                <Image
                  src="/icon/message.svg"
                  width={22}
                  height={22}
                  alt="Comments icon"
                />
                <p className="text-gray-300 ml-2">8 Comments</p>
              </div>
            </div>
          </div>
          <hr className="border-gray-100" />
        </div>
      ))}
    </div>
  );
};
export default PostCard;
