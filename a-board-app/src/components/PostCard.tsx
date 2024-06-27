import Image from "next/image";

const PostCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg my-8 w-full">

      <div>
        <div className="flex items-start px-5 py-6">
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
                Brad Adams{" "}
              </h2>
              <div className="flex justify-end">
                <Image
                  className="mr-1"
                  src="/icon/edit-03.svg"
                  width={24}
                  height={24}
                  alt="edit icon"
                />
                <Image
                  src="/icon/trash-01.svg"
                  width={24}
                  height={24}
                  alt="trash icon"
                />
              </div>
            </div>
            <p className="mt-2 font-semibold text-text-base">How to play football.</p>
            <p className="text-text-base text-sm">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
              amet!
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
        </div>
        <hr className="border-gray-100" />
      </div>

      <div className="flex items-start px-5 py-6">
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
              Brad Adams{" "}
            </h2>
            <div className="flex justify-end">
              <Image
                className="mr-1"
                src="/icon/edit-03.svg"
                width={24}
                height={24}
                alt="edit icon"
              />
              <Image
                src="/icon/trash-01.svg"
                width={24}
                height={24}
                alt="trash icon"
              />
            </div>
          </div>
          <p className="mt-2 font-semibold text-text-base">How to play football.</p>
          <p className="text-text-base text-sm">
            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
            amet!
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
      </div>
      <hr className="border-gray-100" />
    </div>
  );
};
export default PostCard;
