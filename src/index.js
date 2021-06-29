// import React from 'react';
import ReactDOM from 'react-dom';


const product = {
  name: 'product 1',
  price: 20,
  status: true
}

ReactDOM.render(
  product.name,
  document.getElementById('root')
);

//tất cả phần tử được render ra dom đều là đối tượng react tạo ra