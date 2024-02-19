'use client';

import { useRouter } from "next/navigation";

const OrderProductPage = () => {
  const router = useRouter()
  const handleClick = () => {
    console.log("Place Order");
    router.replace("/");
  };

  return (
    <>
      <h1 className="text-5xl">OrderProductPage</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}
export default OrderProductPage
