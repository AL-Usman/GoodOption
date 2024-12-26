interface titleContent {
  title: String;
  description: String;
  bgImage: String;
}
interface titleProps {
  title: titleContent;
}

const TitleContent: React.FC<titleProps> = ({ title }) => {
  const backgroundStyle = {
    backgroundImage: `url(${title.bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundStyle}
      className="p-5 p-md-2 mx-2 mb-4 rounded text-body-emphasis bg-body-secondary "
    >
      <div className="col-12 col-lg-12 cont-text hc">
        <p className="display-3  fst-italic ">{title.title}</p>
        <p className="lead my-3">{title.description}</p>
      </div>
    </div>
  );
};

export default TitleContent;
