import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  })

  const getProducts = () => {

  }

  return (
    <section>
      <div className="container">
        <ul className="flex items-center justify-between">
            {products.map((product, index) => (
                <li key={index}>
                    
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
