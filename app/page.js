


"use client"; // Important for using useState in Next.js App Router

import { useState } from "react";
import { Container, Grid } from "@mantine/core";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";
import "../app/globals.css";
// import "./gl"

export default function Home() {
  const [mediaSize, setMediaSize] = useState({ width: 300, height: 200 });
  const [timeRange, setTimeRange] = useState({ start: 0, end: 5 });

  return (
    <Container fluid className="con">
      <Navbar />
      <div className="grid">
    <Sidebar setMediaSize={setMediaSize} setTimeRange={setTimeRange} />
  <Canvas mediaSize={mediaSize} setMediaSize={setMediaSize} timeRange={timeRange} />
</div>

    </Container>
  );
}

