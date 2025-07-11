import { useLoaderData } from "react-router";

import lotieforeofore from "../assets/foreOfore.json";
import Lottie from "lottie-react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { cover_image, title, description, published_at, tags, body_html } =
    blog;
  return (
    <div className=" mx-auto group  border-secondary  border-opacity-60 hover:no-underline focus:no-underline ">
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
      <div className=" mt-4 flex gap-3">
        {tags.map((tag, index) => (
          <a
            key={index}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
          >
            #{tag}
          </a>
        ))}
      </div>

      <div className=" space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
