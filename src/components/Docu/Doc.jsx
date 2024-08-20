import './Doc.css';

const Doc = () => {
  return (
    <div className="outside">
      <img src="/src/components/Docu/images/index.png" alt="wave" className="retro" />
      <main className="inside">
        <section className="grid grid-1">
          <figure>
          </figure>
          <figure className="center-container">
            <img src="/src/components/Docu/images/bull.png" alt="" className="autoRotate" />
          </figure>
          <h2 className="auto">
            <span className="highliht">Bullish</span> or <span className="highlit">Bearish</span>?
            <br />
            Learn to Read the Market
            <br />
            Explore our powerful Tools...
          </h2>
        </section>
  </main>
    </div>
  );
};

export default Doc;
