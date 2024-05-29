import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import 'react-resizable/css/styles.css';
import { CloseOutlined } from '@mui/icons-material';
import { Button, ButtonGroup, Modal, ModalBody, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import './editor.css';

const Editor = () => {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [styles, setStyles] = useState({});
  const [templates, setTemplates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState('Horizontal');
  const [workspaceDimensions, setWorkspaceDimensions] = useState({ width: 86, height: 54 });
  const [backgroundImage, setBackgroundImage] = useState(null);
  const offcanvasRef = useRef(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const toggleOff = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (layout === 'Horizontal') {
      setWorkspaceDimensions({ width: 86, height: 54 });
    } else {
      setWorkspaceDimensions({ width: 54, height: 86 });
    }
  }, [layout]);

  const addElement = (type) => {
    const newElement = {
      id: elements.length,
      type,
      content: type === 'label' ? 'Label Element' : type === 'input' ? 'Input Element' : type === 'image' ? 'https://via.placeholder.com/150' : '',
      position: { x: 0, y: 0 },
      size: { width: 100, height: 50 },
      styles: {},
      zIndex: elements.length
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElementId === id) {
      setSelectedElementId(null);
      setStyles({});
    }
  };

  const handleDrag = (index) => (e, { x, y }) => {
    const newElements = [...elements];
    newElements[index].position = { x, y };
    setElements(newElements);
  };

  const handleResize = (index) => (e, direction, ref, delta) => {
    const newElements = [...elements];
    const element = newElements[index];

    const newPosition = {
      x: element.position.x + delta.width / 2,
      y: element.position.y + delta.height / 2
    };

    newElements[index] = {
      ...element,
      size: {
        width: ref.offsetWidth,
        height: ref.offsetHeight
      },
      position: newPosition
    };

    setElements(newElements);
  };

  const handleStyleChange = (property, value) => {
    const newElements = elements.map(el => {
      if (el.id === selectedElementId) {
        return {
          ...el,
          styles: {
            ...el.styles,
            [property]: property === 'fontSize' || property === 'margin' || property === 'borderRadius' ? `${value}px` : value
          }
        };
      }
      return el;
    });
    setElements(newElements);
    setStyles(prevStyles => ({ ...prevStyles, [property]: property === 'fontSize' || property === 'margin' || property === 'borderRadius' ? `${value}px` : value }));
  };

  const handleContentChange = (content) => {
    const newElements = elements.map(el => {
      if (el.id === selectedElementId) {
        return { ...el, content };
      }
      return el;
    });
    setElements(newElements);
  };

  const bringForward = () => {
    if (selectedElementId !== null) {
      setElements((prevElements) => {
        const newElements = [...prevElements];
        const index = newElements.findIndex(el => el.id === selectedElementId);
        if (index >= 0) {
          const temp = newElements[index];
          newElements[index]['zIndex'] = temp['zIndex'] + 1;
        }
        return newElements;
      });
    }
  };

  const sendBackward = () => {
    if (selectedElementId !== null) {
      setElements((prevElements) => {
        const newElements = [...prevElements];
        const index = newElements.findIndex(el => el.id === selectedElementId);
        if (index >= 0) {
          const temp = newElements[index];
          newElements[index]['zIndex'] = temp['zIndex'] - 1;
        }
        return newElements;
      });
    }
  };

  const styleOptions = [
    { label: 'Background Color', property: 'backgroundColor', type: 'color' },
    { label: 'Font Size', property: 'fontSize', type: 'number' },
    { label: 'Text Color', property: 'color', type: 'color' },
    { label: 'Margin', property: 'margin', type: 'number' },
    { label: 'Border Radius', property: 'borderRadius', type: 'number' }
  ];

  const generateHTMLTemplate = () => {
    const htmlString = elements.map(el => {
      const style = Object.entries(el.styles).map(([key, value]) => `${key}: ${value}`).join('; ');
      const positionStyle = `position: absolute; left: ${el.position.x}px; top: ${el.position.y}px; width: ${el.size.width}px; height: ${el.size.height}px; z-index: ${el.zIndex};`;

      let elementHTML = '';
      switch (el.type) {
        case 'label':
          elementHTML = `<label style="${style}">${el.content}</label>`;
          break;
        case 'input':
          elementHTML = `<input type="text" placeholder="${el.content}" style="${style}" value="${el.content}" />`;
          break;
        case 'image':
          elementHTML = `<img src="${el.content}" alt="img" style="${style}" />`;
          break;
        case 'box':
          elementHTML = `<div style="${style}"></div>`;
          break;
        default:
          elementHTML = '';
      }

      return `<div style="${positionStyle}">${elementHTML}</div>`;
    }).join('');

    return htmlString;
  };

  const exportHTMLTemplate = () => {
    const htmlTemplate = generateHTMLTemplate();
    const htmlString = `<!DOCTYPE html><html><head><style>body {position: relative;}</style></head><body>${htmlTemplate}</body></html>`;
    const blob = new Blob([htmlString], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'template.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const saveTemplate = () => {
    setTemplates([...templates, { id: templates.length, elements: JSON.parse(JSON.stringify(elements)) }]);
  };

  const loadTemplate = (templateId) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setElements(JSON.parse(JSON.stringify(template.elements)));
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePreview = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };
  return (
    <>
      <div className="App h-100 w-100 d-flex align-items-center">

        <div className="main mb-5">
          <div className="layout mb-5">
            <label htmlFor="">Select Layout</label>
            <ButtonGroup>
              <Button active={layout === 'Horizontal'} outline onClick={() => setLayout('Horizontal')}>
                Horizontal
              </Button>
              <Button active={layout === 'Vertical'} outline onClick={() => setLayout('Vertical')}>
                Vertical
              </Button>
            </ButtonGroup>
          </div>
          <div className="toolbar">
            <button className='button-23' onClick={() => addElement('label')}>Add Label</button>
            <button className='button-23' onClick={() => addElement('input')}>Add Input</button>
            <button className='button-23' onClick={() => addElement('image')}>Add Image</button>
            <button className='button-23' onClick={() => addElement('box')}>Add Box</button>
            <button className='button-23' onClick={() => setElements([])}>Clear All</button>
            <button className='button-23' onClick={bringForward}>Bring Forward</button>
            <button className='button-23' onClick={sendBackward}>Send Backward</button>
            <button className='button-23' onClick={saveTemplate}>Save Template</button>
            <button className='button-23' onClick={togglePreview}>Preview</button>
          </div>

          <div className="background-uploader">
            {backgroundImage ? (
              <div>
                <img src={backgroundImage} alt="Background" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <button className='button-23' onClick={() => setBackgroundImage(null)}>Remove Background</button>
              </div>
            ) : (
              <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
            )}
          </div>
        </div>

        <div style={{ width: '80%', transition: 'margin-right 0.3s ease', marginRight: isOpen ? '20%' : '0' }}>
          <div
            className="workspace"
            style={{
              scale: '2',
              width: `${workspaceDimensions.width}mm`,
              height: `${workspaceDimensions.height}mm`,
              position: 'relative',
              border: '1px solid black',
              margin: '0 auto',
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {elements.map((el, index) => (
              <Draggable
                key={el.id}
                position={el.position}
                onStop={handleDrag(index)}
                bounds="parent"
                grid={[5, 5]}
              >
                <Resizable
                  size={{ width: el.size.width, height: el.size.height }}
                  onResizeStop={handleResize(index)}
                  minWidth={50}
                  minHeight={20}
                  bounds={'parent'}
                  grid={[5, 5]}
                  style={{
                    position: 'absolute',
                    border: '1px solid #ddd',
                    zIndex: el.zIndex,
                    ...el.styles
                  }}
                  onDoubleClick={() => {
                    setSelectedElementId(el.id);
                    toggleOff();
                    setStyles(el.styles);
                  }}
                >
                  <div className={`element ${el.type}`} >
                    {el.type === 'label' && <label style={{ ...el.styles }}>{el.content}</label>}
                    {el.type === 'input' && <input type="text" placeholder={el.content} style={{ ...el.styles, width: '100%', height: '100%' }} />}
                    {el.type === 'image' && <img src={el.content} alt="img" style={{ width: '100%', height: '100%' }} />}
                    {el.type === 'box' && <div style={{ ...el.styles, width: '100%', height: '100%' }}></div>}
                    <CloseOutlined onClick={() => removeElement(el.id)} style={{ position: 'absolute', top: '-8px', right: '-8px', height: '1rem', width: '1rem', zIndex: 10 }} />
                  </div>
                </Resizable>
              </Draggable>
            ))}
          </div>
        </div>

        {selectedElementId !== null && (
          <Offcanvas isOpen={isOpen} toggle={toggleOff} backdrop={true} direction='end' style={{ width: '22%' }} ref={offcanvasRef}>
            <OffcanvasHeader toggle={toggleOff}>
              <h3>Style Settings</h3>
            </OffcanvasHeader>
            <OffcanvasBody>
              <div className="style-panel d-flex flex-column justify-content-center gap-4" style={{ marginLeft: '20px' }}>
                {styleOptions.map(option => (
                  <div key={option.property} className="style-option">
                    <label style={{ marginRight: '20px' }}>{option.label}</label>
                    {option.type === 'color' ? (
                      <input
                        type="color"
                        value={styles[option.property] || ''}
                        onChange={(e) => handleStyleChange(option.property, e.target.value)}
                      />
                    ) : (
                      <input
                        type="number"
                        value={parseInt(styles[option.property], 10) || ''}
                        onChange={(e) => handleStyleChange(option.property, e.target.value)}
                      />
                    )}
                  </div>
                ))}
                {elements.find(el => el.id === selectedElementId)?.type !== 'image' && (
                  <div className="style-option">
                    <label>Content</label>
                    <input
                      type="text"
                      value={elements.find(el => el.id === selectedElementId)?.content || ''}
                      onChange={(e) => handleContentChange(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </OffcanvasBody>
          </Offcanvas>
        )}
      </div>

      <Modal isOpen={isPreviewOpen} toggle={togglePreview} size="lg" centered>
      <ModalHeader toggle={togglePreview}>ID Card Preview</ModalHeader>
      <ModalBody>
        <div
          className="workspace"
          style={{
            width: `${workspaceDimensions.width}mm`,
            height: `${workspaceDimensions.height}mm`,
            position: 'relative',
            border: '1px solid black',
            margin: '0 auto',
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {elements.map((el, index) => (
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
              {el.type === 'label' && <label style={{ ...el.styles }}>{el.content}</label>}
              {el.type === 'input' && <input type="text" placeholder={el.content} style={{ ...el.styles, width: '100%', height: '100%' }} />}
              {el.type === 'image' && <img src={el.content} alt="img" style={{ width: '100%', height: '100%' }} />}
              {el.type === 'box' && <div style={{ ...el.styles, width: '100%', height: '100%' }}></div>}
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>

      <div className="template-list" style={{ marginLeft: '20px' }}>
         <h3>Saved Templates</h3>
         {templates.map(template => (
           <div key={template.id} className="template-item">
             <button onClick={() => loadTemplate(template.id)}>Load Template {template.id}</button>
           </div>
         ))}
       </div>
    </>
  );
};

export default Editor;
