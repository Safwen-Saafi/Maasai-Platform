import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}
      className={classes.top}
    >
      <Paper shadow="md" radius="lg" style={{ maxWidth: '1000px', width: '100%' }}>
        <div className={classes.wrapper}>
          <div
            className={classes.contacts}
            style={{ background: 'linear-gradient(135deg, #FF8C00 0%, #FF4500 50%, #8B0000 100%)' }}
          >
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput label="Your email" placeholder="hello@mantine.dev" required />
              </SimpleGrid>

              <TextInput mt="md" label="Subject" placeholder="Subject" required />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <Button
                  type="submit"
                  className={classes.control}
                  variant="gradient"
                  gradient={{ from: 'yellow', to: 'red', deg: 150 }}
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
}
