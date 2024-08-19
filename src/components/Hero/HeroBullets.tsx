import React, { useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Container, Title, Text, Group, Box } from '@mantine/core';
import classes from './HeroBullets.module.css';

const marketData = [
  {
    symbol: 'BTCUSD',
    change: '+0.14%',
    price: '$290',
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    symbol: 'AAPL',
    change: '-2.43%',
    price: '$150',
    icon: 'https://s3-symbol-logo.tradingview.com/apple.svg',
  },
];

export function HeroBullets() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrice, setShowPrice] = useState(false); // State to toggle between percentage and price

  useEffect(() => {
    // Delay the animation to start after a short delay (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Toggle between showing percentage and price every 3 seconds
    const interval = setInterval(() => {
      setShowPrice((prevShowPrice) => !prevShowPrice);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const bitcoin = marketData.find((market) => market.symbol === 'BTCUSD');
  const apple = marketData.find((market) => market.symbol === 'AAPL');

  return (
    <div className={classes.hero}>
      <Container size="xl">
        <div className={`${classes.content} ${isVisible ? classes.show : ''}`}>
          <Title className={`${classes.title} ${isVisible ? classes.visible : ''}`}>
            See <span className={classes.highlight}>the</span> Opportunities ... <br />
            Seize the Market
          </Title>
          <Box className={classes.bo}>
            <Text
              mt="lg"
              variant="gradient"
              gradient={{ from: 'lime', to: 'rgba(255, 72, 0, 1)', deg: 90 }}
              className={classes.startText}
              style={{ color: 'white' }} // To ensure text is visible on black background
            >
              Start trading with confidence today
            </Text>
          </Box>
          <Group mt={30}>
            {bitcoin && (
              <div className={classes.marketIndicator}>
                <img src={bitcoin.icon} alt={bitcoin.symbol} />
                <div>
                  <Text className={classes.symbol}>{bitcoin.symbol}</Text>
                  <Text
                    className={`${classes.change} ${classes.animatedText}`}
                    size="lg"
                    style={{
                      color: showPrice ? '#ac9e9e' : bitcoin.change.startsWith('+') ? 'green' : 'red',
                    }}
                  >
                    {showPrice ? bitcoin.price : bitcoin.change}
                  </Text>
                </div>
              </div>
            )}
            {apple && (
              <div className={classes.marketIndicator}>
                <img src={apple.icon} alt={apple.symbol} />
                <div>
                  <Text className={classes.symbol}>{apple.symbol}</Text>
                  <Text
                    className={`${classes.change} ${classes.animatedText}`}
                    size="lg"
                    fw={'100'}
                    style={{
                      color: showPrice ? '#ac9e9e' : apple.change.startsWith('+') ? 'green' : 'red',
                    }}
                  >
                    {showPrice ? apple.price : apple.change}
                  </Text>
                </div>
              </div>
            )}
          </Group>
        </div>
        {/* Animated arrow component */}
        <div className={classes.animatedArrow}>
          <IconChevronDown size="2.9rem" stroke={1} />
        </div>
      </Container>
    </div>
  );
}
