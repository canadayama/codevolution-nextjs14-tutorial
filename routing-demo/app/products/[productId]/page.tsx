const ProductDetails = ({
     params
}: {
     params: { productId: string }
}) => {
  return (
    <div>
      <h1 className="text-5xl">Product Details {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
