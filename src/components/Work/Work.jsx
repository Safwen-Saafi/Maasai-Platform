import './Work.css'; // Make sure to import the CSS file

const workdata = [
  {
    imgSrc: '/src/components/Work/images/icon-one.svg',
    heading: 'Create an <span class="highlight">Account</span>',
    subheading: 'Your Journey to Smarter Trading Begins Here.',
    hiddenpara: `
            <ul>
                <li>Sign up with your email and a secure password.</li>
                <li>Verify your account through email-confirmation.</li>
                <li>Personalize your profile.</li>
            </ul>
        `,
  },
  {
    imgSrc: '/src/components/Work/images/icon-two.svg',
    heading: 'Explore Market <span class="highlight">Data</span>',
    subheading: 'Access live market data and real-time charts.',
    hiddenpara: `
            <ul>
                <li>Browse through various financial instruments and indexes.</li>
                <li>Set up your watchlist to track your favorite assets.</li>
            </ul>
        `,
  },
  {
    imgSrc: '/src/components/Work/images/icon-three.svg',
    heading: 'Start <span class="highlight">Trading</span>',
    subheading: 'Choose your assets and place trades with ease.',
    hiddenpara: `
            <ul>
                <li>Monitor your portfolio and make informed decisions using our tools.</li>
            </ul>
        `,
  },
];

const Work = () => {
  return (
    <div className="work-container">
      <div className="text-center header">
        <h3 className="title">
          How it <span className="highlight">works</span> ?
        </h3>
      </div>

      <div className="work-grid">
        {workdata.map((item, i) => (
          <div className="card" key={i}>
            <div className="work-img-bg">
              <img src={item.imgSrc} alt={`icon-${i + 1}`} className="work-img" />
            </div>
            <div>
              <img
                src="/src/components/Work/images/bg-arrow.svg"
                alt="arrow-bg"
                className="arrow-img"
              />
            </div>
            <h3 className="heading" dangerouslySetInnerHTML={{ __html: item.heading }}></h3>
            <p className="subheading" dangerouslySetInnerHTML={{ __html: item.subheading }}></p>
            <div className="hiddenpara-container">
              <span
                className="hiddenpara"
                dangerouslySetInnerHTML={{ __html: item.hiddenpara }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
