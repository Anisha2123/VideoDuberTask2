


import { useState } from "react";
import { Box, NumberInput, Text } from "@mantine/core";
import "../app/globals.css";

export default function Sidebar({ setMediaSize, setTimeRange }) {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(5);

  return (
    <Box className="sidebar"  >
      <Text className="sidebar-title">Controls</Text>

      <NumberInput
        label="Width"
        value={width}
        onChange={(val) => {
          setWidth(val);
          setMediaSize((prev) => ({ ...prev, width: val }));
        }}
        min={100}
        className="sidebar-input"
      />

      <NumberInput
        label="Height"
        value={height}
        onChange={(val) => {
          setHeight(val);
          setMediaSize((prev) => ({ ...prev, height: val }));
        }}
        min={100}
        className="sidebar-input"
      />

      <NumberInput
        label="Start Time (s)"
        value={startTime}
        onChange={(val) => {
          setStartTime(val);
          setTimeRange((prev) => ({ ...prev, start: val }));
        }}
        min={0}
        className="sidebar-input"
      />

      <NumberInput
        label="End Time (s)"
        value={endTime}
        onChange={(val) => {
          setEndTime(val);
          setTimeRange((prev) => ({ ...prev, end: val }));
        }}
        min={startTime + 1}
        className="sidebar-input"
      />
    </Box>
  );
}
