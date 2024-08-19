import React, { useState } from 'react';
import {
  Menu,
  Group,
  Text,
  Avatar,
  useMantineTheme,
  rem
} from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronRight,
  IconTrash
} from '@tabler/icons-react';
import classes from './UserMenu.module.css';

export function UserMenu() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <Group justify="center">
      <Menu
        withArrow
        width={300}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Menu.Target>
          <Avatar
            radius="sm"
            size="md"
            className={classes.ava}
            onClick={() => setOpened(true)}
            onAbort={() => setOpened(false)}
          />
        </Menu.Target>
        <Menu.Dropdown
          className={classes.menuDropdown}
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          <Menu.Item
            rightSection={
              <IconChevronRight style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
            className={classes.menuItem}
          >
            <Group>
              <Avatar
                radius="xl"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              />
              <div>
                <Text fw={500}>Nancy Eggshacker</Text>
                <Text size="xs" c="dimmed">
                  neggshaker@mantine.dev
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />
          <Menu.Label>Settings</Menu.Label>
          <Menu.Item
            leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            className={classes.menuItem}
          >
            Account settings
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            }
            className={classes.menuItem}
          >
            Change account
          </Menu.Item>
          <Menu.Item
            leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            className={classes.menuItem}
          >
            Logout
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            color="red"
            leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            className={classes.menuItem}
          >
            Delete account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
