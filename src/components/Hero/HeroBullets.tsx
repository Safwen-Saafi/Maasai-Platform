import React, { useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Container, Title, Text, Group } from '@mantine/core';
import classes from './HeroBullets.module.css';

const marketData = [
  { symbol: 'BTCUSD', change: '+0.14%', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { symbol: 'TSLA', change: '-7.64%', icon: 'https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo-700x394.png' },
  { symbol: 'AAPL', change: '-2.43%', icon: 'https://s3-symbol-logo.tradingview.com/apple.svg' },
];

export function HeroBullets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the animation to start after a short delay (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const bitcoin = marketData.find(market => market.symbol === 'BTCUSD');
  const apple = marketData.find(market => market.symbol === 'AAPL');

  return (
    <div className={classes.hero}>
      <Container size="xl">
        <div className={`${classes.content} ${isVisible ? classes.show : ''}`}>
          <Title className={`${classes.title} ${isVisible ? classes.visible : ''}`}>
            See <span className={classes.highlight}>the</span> Opportunities ... <br />Seize the Market
          </Title>
          <Text
            mt="lg"
            variant="gradient"
            gradient={{ from: 'lime', to: 'rgba(255, 72, 0, 1)', deg: 90 }}
            className={classes.startText}
          >
            Start trading with confidence today
          </Text>
          <Group mt={30}>
            {bitcoin && (
              <div className={classes.marketIndicator}>
                <img src={bitcoin.icon} alt={bitcoin.symbol} />
                <div>
                  <Text className={classes.symbol}>{bitcoin.symbol}</Text>
                  <Text className={classes.change} size="lg" color={bitcoin.change.startsWith('+') ? 'green' : 'red'}>
                    {bitcoin.change}
                  </Text>
                </div>
              </div>
            )}
            {apple && (
              <div className={classes.marketIndicator}>
                <img src={apple.icon} alt={apple.symbol} />
                <div>
                  <Text className={classes.symbol}>{apple.symbol}</Text>
                  <Text className={classes.change} size="lg" color={apple.change.startsWith('+') ? 'green' : 'red'}>
                    {apple.change}
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
