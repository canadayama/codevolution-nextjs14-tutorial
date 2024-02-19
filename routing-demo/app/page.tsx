import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl">Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
};

export default HomePage;
