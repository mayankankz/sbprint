// // GuideLines.js
// import React from 'react';

// const GuideLines = ({ lines, containerSize }) => {
//   return (
//     <>
//       {lines.map((line, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             left: line.type === 'vertical' ? `${line.position}px` : '0',
//             top: line.type === 'horizontal' ? `${line.position}px` : '0',
//             width: line.type === 'vertical' ? '1px' : `${containerSize.width}px`,
//             height: line.type === 'horizontal' ? '1px' : `${containerSize.height}px`,
//             backgroundColor: 'red',
           
//             zIndex: 9999,
//             display: 'none',
//           }}
//         ></div>
//       ))}
//     </>
//   );
// };

// export default GuideLines;


import React from 'react';

const GuideLines = ({ lines }) => {
  return (
    <div className="guide-lines">
      {lines.map((line, index) => {
        const style = {
          position: 'absolute',
          backgroundColor: 'red',
          zIndex: 9999,
          
        };

        if (line.type === 'horizontal') {
          style.top = `${line.position}px`;
          style.left = `${line.start}px`;
          style.width = `${line.end - line.start}px`;
          style.height = '1px';
        } else if (line.type === 'vertical') {
          style.left = `${line.position}px`;
          style.top = `${line.start}px`;
          style.height = `${line.end - line.start}px`;
          style.width = '1px';
        }

        return <div key={index} style={style} />;
      })}
    </div>
  );
};

export default GuideLines;
