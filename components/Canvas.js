


// import { useState, useRef, useEffect } from "react";
// import { Box, Button, FileInput, Text } from "@mantine/core";
// import Draggable from "react-draggable";
// import { Resizable } from "react-resizable";
// import "../app/globals.css";

// // ✅ Forward ref to avoid findDOMNode issue
// const DraggableResizable = forwardRef(({ media, fileType, mediaSize, setMediaSize }, ref) => {
//   return (
//     <Draggable bounds="parent" nodeRef={ref}>
//       <Box ref={ref} className="draggable-container">
//         <Resizable
//           size={{ width: mediaSize.width, height: mediaSize.height }}
//           onResizeStop={(e, direction, ref, d) => {
//             const newWidth = mediaSize.width + d.width;
//             const newHeight = mediaSize.height + d.height;
//             setMediaSize({ width: newWidth, height: newHeight });
//           }}
//           minWidth={100}
//           minHeight={100}
//           maxWidth={800}
//           maxHeight={600}
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
//           className="resizable-handle"
//         >
//           <Box className="media-container">
//             {fileType === "image" ? (
//               <img src={media} alt="Uploaded" className="media-content" />
//             ) : (
//               <video src={media} controls autoPlay loop className="media-content" />
//             )}
//           </Box>
//         </Resizable>
//       </Box>
//     </Draggable>
//   );
// });



// export default function Canvas({ mediaSize, setMediaSize, timeRange }) {
//   const dragRef = useRef(null);
//   const mediaRef = useRef(null);
//   const [media, setMedia] = useState(null);
//   const [fileType, setFileType] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const timerRef = useRef(null);
//   const [size, setSize] = useState(mediaSize);

//   useEffect(() => {
//     console.log("Canvas - Media Size Updated:", mediaSize);
//   }, [mediaSize]);

//   useEffect(() => {
//     clearInterval(timerRef.current);
//     setCurrentTime(0);
//   }, [timeRange]);

//   useEffect(() => {
//     return () => clearInterval(timerRef.current); // Cleanup on unmount
//   }, []);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     setCurrentTime(timeRange.start);
//     timerRef.current = setInterval(() => {
//       setCurrentTime((prev) => {
//         if (prev >= timeRange.end) {
//           clearInterval(timerRef.current);
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
//       console.log("File Uploaded:", file.name);
//     }
//   };

//   return (
//     <Box className="canvas">
//       <Box className="canvas-controls">
//         <FileInput label="Choose Files" onChange={handleFileUpload} accept="image/*,video/*"className="upload"/>
//         <Button onClick={startTimer} mt="sm" className="canvas-button">
//           Play
//         </Button>
//         <Text mt="sm" className="canvas-timer">
//           Current Time: {currentTime}
//         </Text>
//       </Box>

//       {/* {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
//         <Draggable nodeRef={dragRef} bounds="parent">
//           <Resizable
//             width={mediaSize.width}
//             height={mediaSize.height}
//             onResizeStop={(e, data) => {}}
//           >
//             <Box
//               ref={dragRef}
//               style={{
//                 width: mediaSize.width, // ✅ Debugging: Ensure it updates
//                 height: mediaSize.height,
//                 overflow: "hidden",
//                 background: "black",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {fileType === "image" ? (
//                 <img
//                   src={media}
//                   alt="Uploaded"
//                   style={{ width: "100%", height: "100%" }}
//                   className="media-container"
//                   onLoad={() => console.log("Image Loaded with Size:", mediaSize)}
//                 />
//               ) : (
//                 <video
//                   ref={mediaRef}
//                   src={media}
//                   controls
//                   autoPlay
//                   loop
//                   style={{ width: "100%", height: "100%" }}
//                   className="media-container"
//                   onLoadedMetadata={() => console.log("Video Loaded with Size:", mediaSize)}
//                 />
//               )}
//             </Box>
//           </Resizable>
//         </Draggable>
//       )} */}
//        {/* Draggable + Resizable Media */}
//         {/* Draggable + Resizable Media */}
//         {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
//         <Draggable bounds="parent" cancel=".resizable-handle">
//           <Box
//             style={{
//               position: "absolute",
//               width: mediaSize.width,
//               height: mediaSize.height,
//               cursor: "grab",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Resizable
//               size={{ width: mediaSize.width, height: mediaSize.height }}
//               onResizeStop={(e, direction, ref, d) => {
//                 const newWidth = mediaSize.width + d.width;
//                 const newHeight = mediaSize.height + d.height;
//                 console.log("Resized To:", newWidth, newHeight);
//                 setMediaSize({ width: newWidth, height: newHeight });
//               }}
//               minWidth={100}
//               minHeight={100}
//               maxWidth={800}
//               maxHeight={600}
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
//               className="resizable-handle"
//             >
//               <Box className="media-container">
//                 {fileType === "image" ? (
//                   <img src={media} alt="Uploaded" className="media-content" />
//                 ) : (
//                   <video ref={mediaRef} src={media} controls autoPlay loop className="media-content" />
//                 )}
//               </Box>
//             </Resizable>
//           </Box>
//         </Draggable>
//       )}
//     </Box>
//   );
// }

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
//   const timerRef = useRef(null);

//   useEffect(() => {
//     clearInterval(timerRef.current);
//     setCurrentTime(0);
//   }, [timeRange]);

//   useEffect(() => {
//     return () => clearInterval(timerRef.current); // Cleanup on unmount
//   }, []);

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     setCurrentTime(timeRange.start);
//     timerRef.current = setInterval(() => {
//       setCurrentTime((prev) => {
//         if (prev >= timeRange.end) {
//           clearInterval(timerRef.current);
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

//       {/* {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
//         <Draggable nodeRef={dragRef} bounds="parent">
//           <Resizable
//             size={{ width: mediaSize.width, height: mediaSize.height }}
//             onResizeStop={handleResizeStop}
          
//             enable={{
//               top: true,
//               right: true,
//               bottom: true,
//               left: true,
//               topRight: true,
//               bottomRight: true,
//               bottomLeft: true,
//               topLeft: true,
//             }}
//             style={{
//               border: "2px dashed #000",
//               padding: "5px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "#fff",
//             }}
//           >
//             <Box
//               ref={dragRef}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 overflow: "hidden",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {fileType === "image" ? (
//                 <img src={media} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
//               ) : (
//                 <video src={media} controls autoPlay loop style={{ width: "100%", height: "100%" }} />
//               )} */}
//             {/* </Box>
//           </Resizable>
//         </Draggable>
//       )} */}
//       {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
//   <Resizable
//     size={{ width: mediaSize.width, height: mediaSize.height }}
//     onResizeStop={handleResizeStop}
//     enable={{
//       top: true,
//       right: true,
//       bottom: true,
//       left: true,
//       topRight: true,
//       bottomRight: true,
//       bottomLeft: true,
//       topLeft: true,
//     }}
//     style={{
//       border: "2px dashed #000",
//       padding: "5px",
//       background: "#fff",
//     }}
//   >
//     {/* ✅ Draggable should be inside Resizable */}
//     <Draggable nodeRef={dragRef} bounds="parent">
//       <Box
//         ref={dragRef}
//         style={{
//           width: "100%",
//           height: "100%",
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           cursor: "move", // ✅ Add cursor to indicate drag
//         }}
//       >
//         {fileType === "image" ? (
//           <img src={media} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
//         ) : (
//           <video src={media} controls autoPlay loop style={{ width: "100%", height: "100%" }} />
//         )}
//       </Box>
//     </Draggable>
//   </Resizable>
// )}

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

  // ✅ Handle Dragging
  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  // ✅ Handle Resizing
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
    <Box
      style={{
        flex: 1,
        background: "#f5f5f5",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box style={{ position: "absolute", top: 20, left: 20, color: "#333" }}>
        <FileInput label="Upload Media" onChange={handleFileUpload} accept="image/*,video/*" />
        <Button onClick={startTimer} mt="sm">
          Play
        </Button>
        <Text mt="sm">Current Time: {currentTime}s</Text>
      </Box>

      {media && currentTime >= timeRange.start && currentTime <= timeRange.end && (
        // ✅ Draggable wraps Resizable for correct behavior
        <Draggable
          nodeRef={dragRef}
          bounds="parent"
          position={position}
          onDrag={handleDrag}
        >
          <div ref={dragRef}>
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
              style={{
                border: "2px dashed #000",
                padding: "5px",
                background: "#fff",
                cursor: "move", // ✅ Shows dragging cursor
              }}
            >
              <Box
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {fileType === "image" ? (
                  <img src={media} alt="Uploaded" style={{ width: "100%", height: "100%" }} />
                ) : (
                  <video src={media} controls autoPlay loop style={{ width: "100%", height: "100%" }} />
                )}
              </Box>
            </Resizable>
          </div>
        </Draggable>
      )}
    </Box>
  );
}



