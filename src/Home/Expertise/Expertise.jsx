import "./Expertise.css";

const Expertise = () => {
  return (
    <div className="expertiseSection">
      <h2 className="expertiseTitle theme-color">Our Expertise</h2>
      <div className="cardGroup">
        <div className="card">
          <h2 className="card-title">Hiring</h2>
          <p>
            Leveraging our deep understanding of the talent landscape, we devise
            effective hiring strategies to attract the best tech professionals.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Human Resources Management</h2>
          <p>
            We ensure a healthy and productive work environment by implementing
            efficient HR practices tailored to the unique needs of your startup.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Taxation</h2>
          <p>
            Our team navigates through the complexities of the tax system,
            ensuring compliance while optimizing financial efficiency.
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Regulatory Guidance</h2>
          <p>
            We stay abreast of the ever-changing regulatory landscape, providing
            timely advice to ensure your startup's operations stay within legal
            boundaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
