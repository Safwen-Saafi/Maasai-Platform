import { useState, useEffect } from 'react';
import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Button,
  Autocomplete,
  Drawer,
  Stack,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronRight, IconSearch } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import { UserMenu } from '../UserMenu/UserMenu';
import { LanguagePicker } from '../LanguagePicker/LanguagePicker';
import { spotlight, Spotlight } from '@mantine/spotlight'; // Import Spotlight
import logo from './logo.png';
import { IconHome, IconDashboard, IconFileText } from '@tabler/icons-react';
import { SpotlightActionData } from '@mantine/spotlight';
import { Link } from 'react-router-dom';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
  },
];

const links = [
  {
    link: '#1',
    label: 'Charts',
    links: [
      { link: '/livechart', label: 'Live Chart' },
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
      { link: '/currency', label: 'Live Currency' },
      { link: '/forexscreen', label: 'SmartForex Screen' },
      { link: '/calendar', label: 'Economic Calendar' },
    ],
  },
  { link: '/news', label: 'News' },
  { link: '/about', label: 'About' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => {
      const subMenuItems = item.subLinks?.map((subItem) => (
        <Menu.Item key={subItem.link} className={classes.menuItem}></Menu.Item>
      ));

      if (subMenuItems) {
        return (
          <Menu key={item.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
            <Menu.Target>
              <a
                href={item.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className={classes.itemdrop}>{item.label}</span>
                  <IconChevronRight size="0.9rem" stroke={1.9} />
                </Center>
              </a>
            </Menu.Target>
            <Menu.Dropdown className={classes.menuDropdownRight}>{subMenuItems}</Menu.Dropdown>
          </Menu>
        );
      }

      return (
        <Menu.Item key={item.link} className={classes.menuItem}>
          <Link to={item.link} className={classes.link}>
            {item.label}
          </Link>
        </Menu.Item>
      );
    });

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.9} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown className={classes.menuDropdown}>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
      <Container size="xl">
        <div className={classes.inner}>
          <Link to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
          <Group gap={-20} visibleFrom="sm" className={scrolled ? classes.hidden : ''}>
            {items}
          </Group>
          {scrolled && (
            <Button className={classes.searchButton} onClick={spotlight.open}>
              <div className={classes.searchContent}>
                <div className={classes.searchRight}>
                  <IconSearch size="1.2rem" className={classes.searchIcon} />
                  <span className={classes.searchText}>Search Markets</span>
                </div>
                <span className={classes.shortut}>Ctrl + k</span>
              </div>
            </Button>
          )}
          <div className={classes.right}>
            <LanguagePicker />
            <UserMenu />
            <Button
              size="md"
              variant="gradient"
              gradient={{ from: 'yellow', to: 'red', deg: 150 }}
              className={classes.butt}
              component={Link}
              to="/sign" // This will navigate to the About page
            >
              Get Started
            </Button>
          </div>
          <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={close}
        title="Menu"
        className={classes.customDrawer} // Add this line
      >
        <Stack>
          {links.map((link) => (
            <div key={link.label}>
              <a href={link.link} className={classes.drawerLink}>
                {link.label}
              </a>
              {link.links && (
                <Stack>
                  {link.links.map((sublink) => (
                    <a key={sublink.link} href={sublink.link} className={classes.drawerSublink}>
                      {sublink.label}
                    </a>
                  ))}
                </Stack>
              )}
            </div>
          ))}
        </Stack>
      </Drawer>
      <Spotlight shortcut={['mod + K', 'mod + P', '/']} actions={[]} />
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: <IconSearch style={{ width: rem(20), height: rem(20) }} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </header>
  );
}
