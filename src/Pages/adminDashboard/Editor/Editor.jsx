import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import 'react-resizable/css/styles.css'; // Ensure you have the styles for Resizable

const Editor = () => {
  const [elements, setElements] = useState([]);
  const [templates, setTemplates] = useState([]);

  const addElement = (type) => {
    const newElement = {
      id: elements.length,
      type,
      content: type === 'text' ? 'Text Element' : type === 'button' ? 'Button' : type === 'image' ? 'https://via.placeholder.com/150' : '',
      position: { x: 0, y: 0 },
      size: { width: 200, height: 200 },
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
  };

  const saveTemplate = () => {
    setTemplates([...templates, elements]);
  };

  const handleDrag = (index) => (e, { deltaX, deltaY }) => {
    const newElements = [...elements];
    newElements[index].position = {
      x: newElements[index].position.x + deltaX,
      y: newElements[index].position.y + deltaY,
    };
    setElements(newElements);
  };

  const handleResize = (index) => (e, direction, ref, delta) => {
    const newElements = [...elements];
    newElements[index].size = {
      width: newElements[index].size.width + delta.width,
      height: newElements[index].size.height + delta.height,
    };
    setElements(newElements);
  };

  return (
    <div className="App">
      <div className="toolbar">
        <button onClick={() => addElement('text')}>Add Text</button>
        <button onClick={() => addElement('button')}>Add Button</button>
        <button onClick={() => addElement('image')}>Add Image</button>
        <button onClick={() => addElement('box')}>Add Box</button>
        <button onClick={() => setElements([])}>Clear All</button>
        <button onClick={saveTemplate}>Save as Template</button>
      </div>
      <div className="workspace" style={{ width: '100%', height: '600px', position: 'relative' }}>
        {elements.map((el, index) => (
          <Draggable key={el.id} defaultPosition={el.position} onDrag={handleDrag(index)}>
            <Resizable
              size={el.size}
              onResize={handleResize(index)}
              style={{
                position: 'absolute',
                border: '1px solid #ddd',
                background: '#f0f0f0',
              }}
            >
              <div className={`element ${el.type}`} style={{ width: '100%', height: '100%' }}>
                {el.type === 'text' && el.content}
                {el.type === 'button' && <button>{el.content}</button>}
                {el.type === 'image' && <img src={el.content} alt="img" style={{ width: '100%', height: '100%' }} />}
                <button onClick={() => removeElement(el.id)} style={{ position: 'absolute', top: '5px', right: '5px' }}>Remove</button>
              </div>
            </Resizable>
          </Draggable>
        ))}
      </div>
      <div>
        <h2>Saved Templates</h2>
        <ul>
          {templates.map((template, index) => (
            <li key={index}>
              <button onClick={() => setElements(template)}>Load Template {index + 1}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Editor;
