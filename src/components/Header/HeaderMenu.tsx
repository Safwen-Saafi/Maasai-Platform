import { Menu, Group, Center, Burger, Container, Button, Avatar } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderMenu.module.css';
import { UserMenu } from '../UserMenu/UserMenu';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';

const links = [
  {
    link: '#1',
    label: 'Charts',
    links: [
      { link: '/docs', label: 'Live Chart' },
      { link: '/resources', label: 'Demo Chart' },
    ],
  },
  {
    link: '#2',
    label: 'Markets',
    links: [
      { link: '/faq', label: 'Equity Index' },
      { link: '/demo', label: 'FX' },
      { link: '/forums', label: 'Metals' },
    ],
  },
  {
    link: '#3',
    label: 'Strategy',
    links: [
      { link: '/faq', label: 'Sentiments' },
      { link: '/demo', label: 'Market Structure' },
      { link: '/forums', label: 'Relative Value' },
      { link: '/forums', label: 'Initial Range' },
      { link: '/forums', label: 'Z Score' },
    ],
  },
  { link: '/about', label: 'News' },
  { link: '/about', label: 'About' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.menuItem}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.9} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown className={classes.menuDropdown}>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <MantineLogo size={28} />
          <Group gap={10} visibleFrom="sm">
            {items}
          </Group>
          <div className={classes.right}>
            <LanguagePicker />
            <UserMenu />
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: 'yellow', to: 'red', deg: 150 }}
              className={classes.butt}
            >
              Get Started
            </Button>
          </div>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
      
    </header>
  );
}
