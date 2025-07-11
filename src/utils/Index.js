import toast from "react-hot-toast";

export const getBlogs = () => {
  const storedBlogs = localStorage.getItem("blogs");

  try {
    const blogs = JSON.parse(storedBlogs);
    return Array.isArray(blogs) ? blogs : [];
  } catch (error) {
    // If JSON is invalid, return empty array
    return [];
  }
};

// save

export const saveBlog = (blog) => {
  let blogs = getBlogs();

  const isExist = blogs.find((b) => b.id === blog.id);

  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  blogs.push(blog);

  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully");
};

// delete

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.find((b) => b.id != id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Removed from Bookmark!!");
};
