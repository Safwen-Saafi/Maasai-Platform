import './Doc.css';

const Doc = () => {
  return (
    <div className="ts">
      <main className="tsu">
        <section className="grid grid-1">
          <figure>
            <img src="/src/components/Docu/images/wave3.png" alt="" className='retro'/>
          </figure>
          <figure className="center-container">
            <img
              src="/src/components/Docu/images/bull.png"
              alt=""
              className="autoRotate"
              style={{ width: '500px', height: '500px' }}
            />
          </figure>
          <h2 className="autoShow"><span className="highliht">Bullish</span> or <span className="highlit">Bearish</span>?<br/>Learn to Read the Market</h2>
        </section>
        <section className="grid grid-2">
          <div className="autoShow">
            <figure>
              <img src="/src/components/Docu/images/6.png" alt="" />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to make a type specimen
              b <br />
              only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop like.
            </p>
          </div>
          <div className="autoShow">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen b <br />
            ook. It has survived not only five centuries, but also the leap into electroa type
            specimen b <br />
            ook. It has survived not only five centuries, but also the leap into electronic
            typesetting, remai
          </div>
          <div className="autoShow">
            <figure>
              <img src="/src/components/Docu/images/2.png" alt="" />
            </figure>
            <p>
              When an unknown printer took a galley of type and scrambled it to make a type specimen
              b <br />
              only five centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged.
            </p>
          </div>
          <div className="autoShow">
            <figure>
              <img src="/src/components/Docu/images/candy.png" alt="" />
            </figure>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doc;