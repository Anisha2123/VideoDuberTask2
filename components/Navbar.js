

import { Container, Group, Text } from "@mantine/core";
import "../app/globals.css";

export default function Navbar() {
  return (
    <Container fluid className="navbar">
      <Text className="navbar-brand">VEED Clone</Text>
      <Group className="navbar-links">
        <Text className="navbar-item">Home</Text>
        <Text className="navbar-item">Projects</Text>
        <Text className="navbar-item">Settings</Text>
      </Group>
    </Container>
  );
}
