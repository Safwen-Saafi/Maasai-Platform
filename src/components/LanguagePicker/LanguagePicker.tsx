import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import englishImage from './images/english.png';
import frenchImage from './images/french.png';
import classes from './LanguagePicker.module.css';

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState({ label: 'English', image: englishImage });

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
            <Image src={selected.image} width={22} height={22} />
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown className={classes.dow}>
        <Menu.Item
          leftSection={<Image src={englishImage} width={18} height={18} />}
          onClick={() => setSelected({ label: 'English', image: englishImage })}
          key="English"
        >
          English
        </Menu.Item>
        <Menu.Item
          leftSection={<Image src={frenchImage} width={18} height={18} />}
          onClick={() => setSelected({ label: 'French', image: frenchImage })}
          key="French"
        >
          French
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
