import React,{useEffect} from "react";
import {ProductCard} from "../components/Products";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../reducks/products/operations"
import {getProducts} from "../reducks/products/selectors"
import {signOut} from "../reducks/users/operations";
import {PrimaryButton} from "../components/UIkit"
import { push } from "connected-react-router";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect (() => {
    dispatch(fetchProducts())
  },[]);

  return (
    <div>
      <div className="center">
        <PrimaryButton
          label={"サインアウト"}
          onClick={() => dispatch(signOut())}
        />
        <PrimaryButton
          label={"商品登録"}
          onClick={() => dispatch(push("/product/edit/"))}
        />
      </div>      
      <section className="c-section-wrapin">
        <div className="p-grid__row">
          {products.length > 0 &&(
            products.map(product => (
              <ProductCard
                key={product.id} id={product.id} name={product.name}
                images={product.images} price={product.price}
              />
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default ProductList;

