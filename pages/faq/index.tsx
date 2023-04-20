import MainLayout from "@/layouts/MainLayout";
import { Accordion, Stack, Title } from "@mantine/core";
import { useState } from "react";

export default function Index() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Stack>
      <Title>FAQ</Title>
      <Accordion variant="separated" chevronPosition="left" multiple value={value} onChange={setValue}>
        <Accordion.Item value="customization">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of settings or overwrite any part of component
            styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
}

Index.getLayout = MainLayout;
