import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://b3c64ce2-a912-4b9f-9b02-b8f01b9249c1.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (product === null) {
    return <h1>상품 정보를 받고 있음</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="description">{product.description}</div>
        <div id="createdAt">2022 6월 16일</div>
      </div>
    </div>
  );
}

export default ProductPage;
