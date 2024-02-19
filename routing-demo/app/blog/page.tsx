import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
}

const BlogPage = () => {
  return (
    <div className="text-5xl">Blog Page</div>
  );
};

export default BlogPage;