import { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductsList = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
//   useEffect(() => {
//     if (!selectedProductId) return;
//     const fetchProductDetails = async () => {
//       console.log(selectedProductId);
//       try {
//         const response = await fetch(
//           `https://dummyjson.com/products/${selectedProductId}`,
//         );
//         const data = await response.json();
//         setCurrentProduct(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchProductDetails();
//   }, [selectedProductId]);

//   const handleClick = (productId) => {
//     setSelectedProductId(productId);
//   };

//   const handleClose = () => {
//     setSelectedProductId(null);
//     setCurrentProduct(null);
//   };
  {
    /* 
            top: 0;
            right:0;
            bottom:0;
            left:0;
        */
  }

  //   race condition
  return (
    <>
      {/* {currentProduct ? (
        <div className="fixed inset-0 bg-stone-800/70 flex items-center justify-center">
          <div className="w-100 p-4 bg-white rounded-lg">
            <button onClick={handleClose}>X</button>
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
            <p className="text-sm text-gray-400">
              {currentProduct.description}
            </p>
          </div>
        </div>
      ) : null} */}
      <ul className="grid grid-cols-4 gap-2">
        {products.map(({ id, title, thumbnail, description }) => (
          <li
            key={id}
            className="cursor-pointer min-h-70 p-3 border-2 border-gray-400 rounded-lg"
            // onClick={() => handleClick(id)}
          >
            <Link to={`products/${id}`}>
              <div
                className="h-40 w-full"
                style={{
                  backgroundImage: `url(${thumbnail})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h2>{title}</h2>
              <p className="text-sm text-gray-400">{description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsList;
