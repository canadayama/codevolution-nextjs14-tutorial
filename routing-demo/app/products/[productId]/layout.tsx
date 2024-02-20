function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const ProductDetailLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const rand = getRandomInt(2);

  if (rand === 1) {
      throw new Error("Error loading product!");
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  )
}

export default ProductDetailLayout
