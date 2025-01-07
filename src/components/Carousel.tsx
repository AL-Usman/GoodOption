interface Banner {
  map: any;
  id: number;
  image: any;
}

interface Props {
  banner: Banner;
}

const Carousel: React.FC<Props> = ({ banner }) => {
  //console.log(banner);
  return (
    <div
      id="carouselExampleAutoplaying "
      className="carousel slide container "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner mt-md-4 mb-4 border-0 rounded ">
        {banner.map((item: Banner) => (
          <div key={item.id} className="carousel-item active">
            <img
              src={item.image}
              className="d-block w-100 carosal-img"
              alt="..."
              height={200}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
