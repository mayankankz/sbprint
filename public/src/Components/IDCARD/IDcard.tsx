import React, { useState, useEffect } from 'react';

const IDcard = ({ size, backgroundImage, elements, data ,isPreview=false }) => {
  const [workspaceDimensions, setWorkspaceDimensions] = useState(size);

  
  const getContent = (el) => {
   if(!isPreview){ if (el.fieldMapping && data[el.fieldMapping]) {
      return data[el.fieldMapping];
    }}
    return el.content || '';
  };

  return (
    <div
      className="workspace"
      style={{
        width: `${workspaceDimensions.width}mm`,
        height: `${workspaceDimensions.height}mm`,
        position: 'relative',
        margin: '0 auto',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {JSON.parse(elements).map((el, index) => (
        <div
          key={el.id}
          style={{
            position: 'absolute',
            left: `${el.position.x}px`,
            top: `${el.position.y}px`,
            width: `${el.size.width}px`,
            height: `${el.size.height}px`,
            zIndex: el.zIndex,
            ...el.styles,
          }}
        >
          {el.type === 'label' && <span style={{ ...el.styles, whiteSpace: 'nowrap' }}>{getContent(el)}</span>}
          {el.type === 'input' && <span  style={{ ...el.styles, width: '100%', height: '100%' }}>{getContent(el)}</span>}
          {el.type === 'image' && <img src={data?.img || 'https://via.placeholder.com/150'} alt="img" style={{...el.styles,objectFit:'fill ', width: '100%', height: '100%' }} />}
          {el.type === 'box' && <div style={{ ...el.styles, width: '100%', height: '100%' }}></div>}
        </div>
      ))}
    </div>
  );
};

export default IDcard;
