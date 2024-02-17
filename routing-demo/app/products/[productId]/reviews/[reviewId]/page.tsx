import { notFound } from "next/navigation";

const ReviewDetail = ({
    params
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) => {
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