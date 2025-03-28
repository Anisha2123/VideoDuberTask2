

// import { useState, useRef, useEffect } from "react";
// import { Box, Button, FileInput, Text } from "@mantine/core";
// import Draggable from "react-draggable";
// import { Resizable } from "re-resizable";
// import "../app/globals.css";

// export default function Canvas({ mediaSize, setMediaSize, timeRange }) {
//   const dragRef = useRef(null);
//   const [media, setMedia] = useState(null);
//   const [fileType, setFileType] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [isVisible, setIsVisible] = useState(false); // ✅ Controls visibility
//   const timerRef = useRef(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     clearInterval(timerRef.current);
//     setCurrentTime(0);
//     setIsVisible(false); // ✅ Hide media when time resets
//   }, [timeRange]);

//   useEffect(() => {
//     return () => clearInterval(timerRef.current); // Cleanup on unmount
//   }, []);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     setCurrentTime(timeRange.start);
//     setIsVisible(true); // ✅ Show media when time starts

//     timerRef.current = setInterval(() => {
//       setCurrentTime((prev) => {
//         if (prev >= timeRange.end) {
//           clearInterval(timerRef.current);
//           setIsVisible(false); // ✅ Hide media when time ends
//           return timeRange.end;
//         }
//         return prev + 1;
//       });
//     }, 1000);
//   };

//   const handleFileUpload = (file) => {
//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       setMedia(fileURL);
//       setFileType(file.type.startsWith("video") ? "video" : "image");
//     }
//   };

//   const handleDrag = (e, data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   const handleResizeStop = (e, direction, ref, d) => {
//     if (setMediaSize) {
//       setMediaSize((prev) => ({
//         width: prev.width + d.width,
//         height: prev.height + d.height,
//       }));
//     } else {
//       console.error("setMediaSize is undefined!");
//     }
//   };

//   return (
//     <Box
//       style={{
//         flex: 1,
//         background: "#f5f5f5",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative",
//       }}
//     >
//       <Box style={{ position: "absolute", top: 20, left: 20, color: "#333" }}>
//         <FileInput label="Upload Media" onChange={handleFileUpload} accept="image/*,video/*" />
//         <Button onClick={startTimer} mt="sm">
//           Play
//         </Button>
//         <Text mt="sm">Current Time: {currentTime}s</Text>
//       </Box>

//       {media && (
//         <Draggable nodeRef={dragRef} bounds="parent" position={position} onDrag={handleDrag}>
//           <div ref={dragRef}>
//             <Resizable
//               size={{ width: mediaSize.width, height: mediaSize.height }}
//               onResizeStop={handleResizeStop}
//               enable={{
//                 top: true,
//                 right: true,
//                 bottom: true,
//                 left: true,
//                 topRight: true,
//                 bottomRight: true,
//                 bottomLeft: true,
//                 topLeft: true,
//               }}
//               style={{
//                 border: "2px dashed #000",
//                 padding: "5px",
//                 background: "#fff",
//                 cursor: "move",
//                 opacity: isVisible ? 1 : 0.3, // ✅ Full opacity when time starts, low when stops
//                 transition: "opacity 0.5s ease-in-out",
//               }}
//             >
//               <Box
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   overflow: "hidden",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {fileType === "image" ? (
//                   <img src={media} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
//                 ) : (
//                   <video src={media} controls autoPlay loop style={{ width: "100%", height: "100%" }} />
//                 )}
//               </Box>
//             </Resizable>
//           </div>
//         </Draggable>
//       )}
//     </Box>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { Box, Button, FileInput, Text } from "@mantine/core";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import "../app/globals.css";

export default function Canvas({ mediaSize, setMediaSize, timeRange }) {
  const dragRef = useRef(null);
  const [media, setMedia] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const timerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0); // Initially hidden

  useEffect(() => {
    clearInterval(timerRef.current);
    setCurrentTime(0);
    setOpacity(0); // Hide media when time resets
  }, [timeRange]);

  useEffect(() => {
    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setCurrentTime(timeRange.start);
    setOpacity(1); // Show media when playing
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= timeRange.end) {
          clearInterval(timerRef.current);
          setOpacity(0.3); // Reduce opacity when time stops
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

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleResizeStop = (e, direction, ref, d) => {
    if (setMediaSize) {
      setMediaSize((prev) => ({
        width: prev.width + d.width,
        height: prev.height + d.height,
      }));
    } else {
      console.error("setMediaSize is undefined!");
    }
  };

  return (
    // <Box
    //   style={{
    //     flex: 1,
    //     background: "#f5f5f5",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     position: "relative",
    //   }}
    // >
    //   {/* Media Section */}
    //   {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
    //     <Draggable nodeRef={dragRef} bounds="parent" position={position} onDrag={handleDrag}>
    //       <div ref={dragRef}>
    //         <Resizable
    //           size={{ width: mediaSize.width, height: mediaSize.height }}
    //           onResizeStop={handleResizeStop}
    //           enable={{
    //             top: true,
    //             right: true,
    //             bottom: true,
    //             left: true,
    //             topRight: true,
    //             bottomRight: true,
    //             bottomLeft: true,
    //             topLeft: true,
    //           }}
    //           style={{
    //             border: "2px dashed #000",
    //             padding: "5px",
    //             background: "#fff",
    //             cursor: "move",
    //             opacity: opacity, // Opacity effect
    //             transition: "opacity 0.5s ease-in-out",
    //           }}
    //         >
    //           <Box
    //             style={{
    //               width: "100%",
    //               height: "100%",
    //               overflow: "hidden",
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "center",
    //             }}
    //           >
    //             {fileType === "image" ? (
    //               <img src={media} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
    //             ) : (
    //               <video src={media} controls autoPlay loop style={{ width: "100%", height: "100%" }} />
    //             )}
    //           </Box>
    //         </Resizable>
    //       </div>
    //     </Draggable>
    //   )}

    //   {/* Upload Box & Play Button - Moved Below Media */}
    //   <Box
    //     style={{
    //       marginTop: "20px",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       gap: "10px",
    //       background: "#fff",
    //       padding: "15px",
    //       borderRadius: "8px",
    //       boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    //     }}
    //   >
    //     <FileInput label="Choose Media" onChange={handleFileUpload} accept="image/*,video/*" className="upload"/>
    //     <Button onClick={startTimer} mt="sm">
    //       Play 
    //     </Button>
    //     <Text mt="sm">Current Time: {currentTime}s</Text>
    //   </Box>
    // </Box>
       <Box  className="canvas-container">
      {/* Media Section */}
      {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
        <Draggable nodeRef={dragRef} bounds="parent" position={position} onDrag={handleDrag}>
          <div ref={dragRef} className="media-wrapper">
            <Resizable
              size={{ width: mediaSize.width, height: mediaSize.height }}
              onResizeStop={handleResizeStop}
              enable={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true,
              }}
              className="resizable-media"
              style={{ opacity: opacity }} // Opacity Effect
            >
              <Box className="media-content">
              
                {fileType === "image" ? (
                  <img src={media} alt="Uploaded" className="media-image" />
                ) : (
                  <video src={media} controls autoPlay loop className="media-video" />
                )}
              </Box>
            </Resizable>
          </div>
        </Draggable>
      )}

      {/* Upload Box & Play Button - Moved Below Media */}
      <Box className="controls-container">
        <FileInput label="Upload Media" onChange={handleFileUpload} accept="image/*,video/*" className="file-input"/>
        <Button onClick={startTimer} className="play-button">
          Play to See Media
        </Button>
        <Text className="current-time">Current Time: {currentTime}s</Text>
      </Box>
    </Box>
  );
}



