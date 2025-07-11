import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../utils/Index";
import BlogCard from "../BlogCard/BlogCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDeleteBlog = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  return (
    <div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard
            deletable={true}
            handleDeleteBlog={handleDeleteBlog}
            key={blog.id}
            blog={blog}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
