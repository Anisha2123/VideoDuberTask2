


import { useState, useRef, useEffect } from "react";
import { Box, Button, FileInput, Text } from "@mantine/core";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import "../app/globals.css";

export default function Canvas({ mediaSize, timeRange }) {
  const dragRef = useRef(null);
  const mediaRef = useRef(null);
  const [media, setMedia] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const timerRef = useRef(null);
  const [size, setSize] = useState(mediaSize);

  useEffect(() => {
    clearInterval(timerRef.current);
    setCurrentTime(0);
  }, [timeRange]);

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setCurrentTime(timeRange.start);
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= timeRange.end) {
          clearInterval(timerRef.current);
          return timeRange.end;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const handleFileUpload = (file) => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setMedia(fileURL);
      setFileType(file.type.startsWith("video") ? "video" : "image");
    }
  };

  return (
    <Box className="canvas">
      <Box className="canvas-controls">
        <FileInput label="Choose Files" onChange={handleFileUpload} accept="image/*,video/*"className="upload"/>
        <Button onClick={startTimer} mt="sm" className="canvas-button">
          Play
        </Button>
        <Text mt="sm" className="canvas-timer">
          Current Time: {currentTime}s
        </Text>
      </Box>

      {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
        <Draggable nodeRef={dragRef} bounds="parent">
          <Resizable
            width={size.width}
            height={size.height}
            onResizeStop={(e, data) => setSize({ width: data.size.width, height: data.size.height })}
          >
            <Box ref={dragRef} className="media-container" style={{ width: size.width, height: size.height }}>
              {fileType === "image" ? (
                <img src={media} alt="Uploaded" className="media-content" />
              ) : (
                <video ref={mediaRef} src={media} controls autoPlay loop className="media-content" />
              )}
            </Box>
          </Resizable>
        </Draggable>
      )}
    </Box>
  );
}


