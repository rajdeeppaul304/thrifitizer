import Image from "next/image";

const ProjectDetails2Images = ({ imagePaths = [] }) => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container" style={{ maxWidth: "85%" }}>
        <div className="justified-gallery mb-4">
          <div className="row g-3">
            {imagePaths.slice(0, 4).map((src, idx) => (
              <div key={src} className="col-md-3">
                <a href={src} target="_blank">
                  <Image
                    alt=""
                    
                    src={src}
                    className="img-fluid rounded"
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
            <img
              src={imagePaths[4]}
              alt=""
              className="img-fluid rounded mt-3"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
