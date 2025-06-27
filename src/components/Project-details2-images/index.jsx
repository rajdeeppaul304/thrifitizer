import Image from "next/image";

const ProjectDetails2Images = ({ imagePaths = [] }) => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            {imagePaths.slice(0, 4).map((src, idx) => (
              <div key={src} className="col-md-3 pr-0">
                <a href={src}>
                  <Image
                    alt=""
                    src={src}
                    className="img-fluid"
                    width={500}
                    height={300}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src={imagePaths[4]} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
