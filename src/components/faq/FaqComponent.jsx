import React from 'react';
import { Title, Container, Accordion, ThemeIcon, rem } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import faq from '@/assets/faq.jpg';
import styles from './FaqComponent.module.css';

const placeholders = [
  'Online trading’s primary advantages are that it allows you to manage your trades at your convenience.',
  'You don’t need to worry, the interface is user-friendly. Anyone can use it smoothly. Our user manual will help you to solve your problem.',
  'Online trading’s primary advantages are that it allows you to manage your trades at your convenience.',
  'Online trading’s primary advantages are that it allows you to manage your trades at your convenience.',
  'Online trading’s primary advantages are that it allows you to manage your trades at your convenience.',
];

function FaqComponent() {
  return (
    <section style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div
        style={{
          backgroundImage: `url(${faq})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <div className={styles.wrapper} style={{ position: 'relative', zIndex: 2 }}>
        <Title className={styles.title}>
          <h1>
            <span className={styles.frequently}>FREQUENTLY ASKED </span>
            <span className={styles.questions}>QUESTIONS</span>
          </h1>
        </Title>
        <Container size="sm">
          <Accordion
            chevronPosition="right"
            defaultValue="reset-password"
            chevronSize={26}
            variant="separated"
            disableChevronRotation
            styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}
            chevron={
              <ThemeIcon radius="xl" className={styles.gradient} size={26}>
                <IconPlus style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Accordion.Item className={styles.item} value="reset-password">
              <Accordion.Control>What does this tool do?</Accordion.Control>
              <Accordion.Panel>{placeholders[0]}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={styles.item} value="another-account">
              <Accordion.Control>Can I create more than one account?</Accordion.Control>
              <Accordion.Panel>{placeholders[1]}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={styles.item} value="newsletter">
              <Accordion.Control>How can I subscribe to the monthly newsletter?</Accordion.Control>
              <Accordion.Panel>{placeholders[2]}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={styles.item} value="credit-card">
              <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
              <Accordion.Panel>{placeholders[3]}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={styles.item} value="payment">
              <Accordion.Control>What payment systems do you work with?</Accordion.Control>
              <Accordion.Panel>{placeholders[4]}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </section>
  );
}

export default FaqComponent;
