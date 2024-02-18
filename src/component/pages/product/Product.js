import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import Four404 from "../../four404/Four404"

function Product() {
  const [product, setProducts] = useState([]);
  // console.log(useParams)
  const { productID } = useParams();
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {       
        const productList = data.products;
        const singleProduct = productList.filter((product) => product.product_url === productID);
        setProducts(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);
  if(product.length){ 
  return (
        <div>
          <section className="internal-page-wrapper top-100 bottom-100">
            <div className="container">
              {product?.map((product) => {
                return (
                  <div key={product.productID} >
                  <div className='row justify-content-center text-center product-holder h-100'>
                
                    <div className="product-title">{product.product_name}</div>

                    <div className="product-brief">{product.product_brief_description}</div>
                 
                    </div>
                     <div className='row justify-content-center text-center product-holder h-100 m-5'>
                      <div className={`col-sm012 col-md-6 my-auto`}>

                    <div className="starting-price">{`Starting at ${product.starting_price}`}</div>

                    <div className="monthly-price"> ${product.price_range}`</div>

                    <div className="monthly-price"> ${product.product_description}`</div>                 
                  </div>
                  <div className='col-sm-12 col-md-6'>
                    <div className="prodict-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                  </div>
                </div>
                )             
              })}            
          
              </div>
          </section>
        </div>
      );
    }
    else {
      return <Four404/>
      }
    }
      

export default Product