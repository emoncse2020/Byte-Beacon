import { Link } from "react-router";
import lotieforeofore from "../../assets/foreOfore.json";
import Lottie from "lottie-react";
import { TiDelete } from "react-icons/ti";

const BlogCard = ({ blog, deletable, handleDeleteBlog }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <div className="flex, relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-secondary hover:border-primary border-opacity-60 hover:no-underline focus:no-underline "
      >
        {cover_image ? (
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 "
            src={cover_image}
          />
        ) : (
          <div className="w-full">
            <Lottie animationData={lotieforeofore}></Lottie>
          </div>
        )}

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDeleteBlog(id)}
          className="absolute -top-3 -right-3 bg-primary p-1 rounded-full hover:scale-105 "
        >
          <TiDelete
            size={40}
            className="text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
