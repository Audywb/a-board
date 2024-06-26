import Image from "next/image";

const PostCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg my-8 w-full">
      <div className="flex items-start px-4 py-6">
        <div className="avatar">
          <div className="rounded-full w-8 -my-2 mr-2">
            <Image
              src="/profile/testprofile.jpg"
              width={20}
              height={20}
              alt="profile photo"
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
              Brad Adams{" "}
            </h2>
          </div>
          <p className="text-gray-700">Joined 12 SEP 2012. </p>
          <p className="mt-3 text-gray-700 text-sm">
            Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
            amet!
          </p>
          <div className="mt-4 flex items-center">
            <div className="flex text-gray-700 text-sm mr-8">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-100 p-1" />
    </div>
  );
};
export default PostCard;
