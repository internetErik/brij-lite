import React, { useState, useEffect } from 'react';

import Grid from '../global/Grid';

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const productId : number = parseInt(window.location.pathname.split('/').at(-1) || '', 10);
      if(Number.isNaN(productId) || productId < 1 || productId > 2) {
        setError(true);
        return;
      }

      const response = await fetch(`http://localhost:8080/https://fir-hosting-app-clip.web.app/.well-known/api/${productId}.json`);
      // getting error:
      // "No 'Access-Control-Allow-Origin' header is present on the requested resource." etc.
      // const response = await fetch(`https://fir-hosting-app-clip.web.app/.well-known/api/${productId}.json`, { method : 'GET', mode : 'cors'});
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    }
    fetchData();
  },[]);

  if(error)
    return <main className="site-body"><div>Product not found</div></main>;

  if(loading)
    return <main className="site-body"><div>Loading...</div></main>;

  return (
  <>
    <header className="header df aic bgc-alabaster">
      <Grid>
        <h1>{ product.tag.brand.name }</h1>
      </Grid>
    </header>
    <main className="site-body">
      <Grid className="df">
        <div className="w70%">
        {product.tag.product.variant &&
        <div className="fz14">{ product.tag.product.variant }</div>
        }
        <h2 className="fz36 mb24">
        { product.tag.product.name }
        </h2>
        {product.tag.product.details &&
        <>
        <h3 className="fsi">Details</h3>
        <ul className="fz16">
        { Object.keys(product.tag.product.details).map((key, i) =>(
          <li key={i}>
          <span className="dib w100">{ key } :</span> { product.tag.product.details[key] }
          </li>
          ))
        }
        </ul>
        </>
        }
        </div>
        <div className="w30%">
          <img className="w100%" src={product.tag.product.image} alt={product.tag.product.name} />
        </div>
      </Grid>
    </main>
  </>
  );
}

export default Product;
