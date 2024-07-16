import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './FeaturesCards.module.css';


const mockdata = [
  {
    title: 'High Performance',
    description:
      'Experience lightning-fast trades with our state-of-the-art technology. Our platform ensures you never miss an opportunity.',
    icon: IconGauge,
    color: '#FF5733', // Example color for High Performance
    backgroundColor: '#1E2A38', // Example background color for High Performance card
  },
  {
    title: 'Secure Transactions',
    description:
      'Your privacy is our priority. We use top-notch security measures to protect your data and ensure safe transactions.',
    icon: IconUser,
    color: '#33FF57', // Example color for Secure Transactions
    backgroundColor: '#2A1E38', // Example background color for Secure Transactions card
  },
  {
    title: 'Transparent Trading',
    description:
      'No hidden fees or third parties. Enjoy a transparent trading environment with real-time updates and insights.',
    icon: IconCookie,
    color: '#3357FF', // Example color for Transparent Trading
    backgroundColor: '#382A1E', // Example background color for Transparent Trading card
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card 
      key={feature.title} 
      shadow="md" 
      radius="md" 
      className={classes.card} 
      padding="xl"
      style={{ backgroundColor: feature.backgroundColor }} // Apply background color
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={feature.color} // Use the color specified in mockdata
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.tank}>
      <Container size="xl" py="sm">
        <Group justify="center">
          <Badge size="xl" variant="gradient" gradient={{ from: 'yellow', to: 'red', deg: 150 }} className={classes.badg}>
            #1 TRADING PLATFORM
          </Badge>
        </Group>

        <Title order={4} className={classes.title} ta="center" mt="lg">
          Seamless trading experience on <br />any device
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Our platform offers advanced features and tools to enhance your trading journey, whether
          you're a beginner or a pro.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid> 
      </Container>
    </div>
  );
}
