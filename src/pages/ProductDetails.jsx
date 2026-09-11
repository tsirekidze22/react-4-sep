import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(productId);

  useEffect(() => {
    const fetchProductDetails = async () => {
      console.log(productId);
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );
        const data = await response.json();
        setCurrentProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      {currentProduct ? (
        <div>
          <div
            className="h-40 w-full"
            style={{
              backgroundImage: `url(${currentProduct.thumbnail})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h2>{currentProduct.title}</h2>
          <h2>{currentProduct.price}</h2>
          <p className="text-sm text-gray-400">{currentProduct.description}</p>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ProductDetails;
