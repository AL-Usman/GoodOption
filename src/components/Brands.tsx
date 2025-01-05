import React from "react";
// interface Brands {
//   id: number;
//   name: string;
//   image: string;
// }
interface Props {
  brands: any;
}

const Brands: React.FC<Props> = ({ brands }) => {
  return (
    <div className="container">
      <h5> Choose from Top Brands </h5>

      <div className="d-flex justify-content-md-center justify-content-center flex-wrap gap-4 mb-5">
        {brands.map((item: any) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            width={50}
            height={55}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
