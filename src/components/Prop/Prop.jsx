import './Prop.css';

const Prop = () => {
  return (
    <div className="ts">
      <main className="tsu">
        <section className="grid grid-2">
          <div className="show">
            <figure>
            <div className="colo"></div>
              <img src="/src/components/Prop/images/logo.png" alt="" />
   
            </figure>
            <p>
              The Maasai Platform is designed to equip traders with a comprehensive suite of tools
              that enhance your trading experience and decision-making process. From real-time
              market analysis to detailed tracking features, our platform offers everything you need
              to navigate the financial markets confidently. Whether you're a seasoned trader or
              just starting out, our tools are tailored to provide you with the insights and data
              you need to succeed.
            </p>
            <div className="colo"></div>
          </div>
          <div className="show">
            <figure>
    
              <img src="/src/components/Prop/images/currency.png" alt="" />
            </figure>
            <p>
              The Currency Price Tracker on the Maasai Platform provides real-time exchange rate
              data for various currency pairs. This tool is essential for traders focused on the
              forex market, allowing you to monitor price fluctuations and track the performance of
              different currencies against each other. With up-to-the-minute updates, the tracker
              helps you make timely decisions and capitalize on market opportunities.
            </p>
          </div>
          <div className="show">
            <figure>
              
              <img src="/src/components/Prop/images/economic-calendar.png" alt="" />
            </figure>
            <p>
              The Economic Calendar on the Maasai Platform is an essential tool for traders who want
              to stay ahead of market-moving events. This feature provides real-time updates on
              significant economic events, such as central bank announcements, GDP releases,
              employment reports, and more. The calendar is designed to help you anticipate market
              volatility, make informed decisions, and plan your trading strategies with confidence.
            </p>
            
          </div>
          <div className="show">
            <figure>
              <img src="/src/components/Prop/images/marketdata.png" alt="" />
            </figure>
            <p>
              The Market Data Widget offers a comprehensive overview of global market performance at
              a glance. This tool provides key metrics, including change values, Open, High, Low,
              and Close prices for a range of selected financial instruments. With up-to-date data
              on stocks, indices, commodities, and currencies, the Market Data Widget helps you
              quickly assess market trends and make informed trading decisions.
            </p>
            <div className="colo"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Prop;
