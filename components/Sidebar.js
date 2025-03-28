


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
          console.log("Sidebar - Width Changed:", val);
          setWidth(val);
          setMediaSize((prev) => {
            const newSize = { ...prev, width: val };
            console.log("Updated Media Size (Width):", newSize);
            return newSize;
          });
        }}
        min={100}
        className="sidebar-input"
      />

      <NumberInput
        label="Height"
        value={height}
        onChange={(val) => {
          console.log("Sidebar - Height Changed:", val);
          setHeight(val);
          setMediaSize((prev) => {
            const newSize = { ...prev, height: val };
            console.log("Updated Media Size (Height):", newSize);
            return newSize;
          });

        }}
        min={100}
        className="sidebar-input"
      />

      <NumberInput
        label="Start Time (s)"
        value={startTime}
        onChange={(val) => {
          console.log("Start Time Updated:", val);
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
          console.log("End Time Updated:", val);

          setEndTime(val);
          setTimeRange((prev) => ({ ...prev, end: val }));
        }}
        min={startTime + 1}
        className="sidebar-input"
      />
    </Box>
  );
}
