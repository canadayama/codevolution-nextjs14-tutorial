import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100);
  });

  return {
    title: `Product ${title}`
  }
}

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1 className="text-5xl">Product Details {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
