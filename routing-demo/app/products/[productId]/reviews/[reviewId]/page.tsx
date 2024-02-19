'use client';

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
    params
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) => {
  const rand = getRandomInt(2);

  if (rand === 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-5xl">Review for {params.reviewId} for product {params.productId}</h1>
    </div>
  );
};

export default ReviewDetail;