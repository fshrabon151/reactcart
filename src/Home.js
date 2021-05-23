import React from "react";
import data from "./data";
import Itemcard from "./Itemcard";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, i) => {
            return (
              <Itemcard
                key={i}
                item={item}
                title={item.title}
                desc={item.desc}
                img={item.img}
                price={item.price}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
