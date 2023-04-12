import {
  BookmarkIcon,
  ChartBarIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import { avatar } from "../../../assets/img/avatars";

interface PostItemProps {
  username: string;
  userImg: string;
  imgPost: string;
  caption: string;
}
export default function PostItem(props: PostItemProps) {
  const { username, userImg, imgPost, caption } = props;
  return (
    <div className="  bg-neutral-300 shadow-sm border border-gray-200 rounded-md my-2">
      
      {/* Profile */}
      <div className="flex justify-between items-center space-x-2 p-4">
        <div className="flex-shrink-0 mr-2">
          <img
            src={avatar}
            className="rounded-full cursor-pointer border"
            width={32}
            height={32}
            alt={username}
          />
        </div>
        <p className="flex-1 text-sm hover:underline cursor-pointer font-semibold">
          {username}
        </p>
        <EllipsisHorizontalIcon className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Post Image */}
      <div className="m-4">
        <img src={imgPost} className="w-full object-cover" alt={username} />
      </div>
      
      {/* Button */}
      <div className="flex justify-between items-center pt-4 px-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="w-8 h-8 cursor-pointer hover:text-gray-700 transition" />
          <ChartBarIcon className="w-8 h-8 cursor-pointer hover:text-gray-700 transition" />
          <PaperAirplaneIcon className="w-8 h-8 cursor-pointer hover:text-gray-700 transition" />
        </div>
        <BookmarkIcon className="w-8 h-8 cursor-pointer hover:text-gray-700 transition" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Input Comment */}
      <form className="flex items-center space-x-2 p-4 border-t border-gray-200">
        <FaceSmileIcon className="w-8 h-8" />
        <input
          type="text"
          className="flex-1 border-none focus:outline-none focus:ring-0"
          placeholder="Add a comment..."
        />
        <button type="button" className="text-blue-400 font-semibold">
          Post
        </button>
      </form>

    </div>
  );
}
