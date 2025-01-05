import { useNavigate } from "react-router-dom";
import { CiShop } from "react-icons/ci";

interface Shop {
  filter: any;
  map: any;
  id: number;
  shopName: String;
  heading: String;
  address: String;
  timing: String;
  rating?: number;
  type: String;
}
interface ShopsList {
  shops: Shop;
  nav: String;
  type: String;
}

const ShopDetails: React.FC<ShopsList> = ({ shops, nav, type }) => {
  const FashionShop = shops.filter((item: Shop) => item.type === type);
  let navigate = useNavigate();
  const handleOnClick = (shopName: String, id: number) => {
    //console.log("Shop Id:", id);

    navigate(`${nav}`, { state: { shopName: shopName, shopId: id } });
  };

  return (
    <>
      <div className="d-flex flex-wrap  justify-content-around mb-3 container">
        {FashionShop.map((item: Shop) => (
          <div
            key={item.id}
            className=" card mb-4 shadow rounded card-act border-0"
            style={{ width: "20rem" }}
            onClick={() => handleOnClick(item.shopName, item.id)}
          >
            <div className="card-body ">
              <CiShop />
              <h5 className="card-subtitle mb-1 text-center text-body-dark">
                {item.shopName}
              </h5>
              <p className="card-text">{item.heading}</p>
              <p className="card-text">{item.timing}</p>

              <span className="text-start">{item.address}</span>
              <span className="text-end">{item.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopDetails;
