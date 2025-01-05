import React from "react";
interface Collage {
  map: any;
  id: number;
  desc: String;
  image: any;
}
interface Props {
  collage: Collage;
}
const Collage: React.FC<Props> = ({ collage }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center ">
        {collage.map((item: Collage) => (
          <div
            key={item.id}
            className="col-lg-2 col-md-2 col-6  mb-4 position-relative"
          >
            <img
              src={item.image}
              className="w-100 shadow-1-strong rounded mb-4"
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collage;
