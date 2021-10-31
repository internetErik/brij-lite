import React from 'react';
import ReactDOM from 'react-dom';

import './scss/site.scss';

import Footer from './global/Footer';
import Product from './pages/Product';

const App = () => (
<>
  <Product />
  <Footer/>
</>
)

ReactDOM.render(<App/>, document.getElementById('app'));