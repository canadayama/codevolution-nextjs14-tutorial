import Link from "next/link";

const F1 = () => {
  return (
    <>
      <h1 className="text-5xl">F1</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
    </>
  );
};

export default F1;