import React, { useState, useEffect } from 'react';
import { Select, Table, Button, Form, Input, InputNumber, Row, Modal } from 'antd';
import { getAllSchool, getAllStudentBySchool } from '../../service/student';
import { getAllTemplate } from '../../service/idcard';
import IDcard from '../../Components/IDCARD/IDcard';
import ReactDOMServer from 'react-dom/server';
import ModalPopup from '../../Components/Modal/Modal';
import { Col, Container } from 'reactstrap';
const { Option } = Select;

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [open, setOpen] = useState(false);
  const [openTemplates, setopenTemplates] = useState(false)
  const [setting, setSettings] = useState({
    pageType: 'A4',
    Layout: 'Landscape',
    Margin: '3'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    school: '',
    class: '',
    section: ''
  });

  function handleSettingsChange(name, value) {
    debugger
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value
    }));
  }

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await getAllSchool();
        const data = response.schools;
        setSchools(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchTemplates = async () => {
      try {
        const response = await getAllTemplate();
        const data = response;
        setTemplates(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSchools();
    fetchTemplates();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      if (filters.school) {
        try {
          const response = await getAllStudentBySchool(filters.school);
          const studentsData = response.students;
          setStudents(studentsData);

          const distinctClasses = [...new Set(studentsData.map(student => student.class))];
          const distinctSections = [...new Set(studentsData.map(student => student.section))];
          setClasses(distinctClasses);
          setSections(distinctSections);
        } catch (error) {
          console.error('Error:', error);
        }
      } else {
        setStudents([]);
        setClasses([]);
        setSections([]);
      }
    };

    fetchStudents();
  }, [filters.school]);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue || ''
    }));
  };

  const handleTemplateChange = (value) => {
    setSelectedTemplate(value);
    setopenTemplates(false);
  };

  const handlePrintAllIDCards = () => {
    if (!selectedTemplate) {
      alert('Please select a template.');
      return;
    }

    setIsLoading(true);
    const template = templates.find(tpl => tpl.id === selectedTemplate);

    const idCardsHtml = filteredStudents.map(student => `
      <div class="id-card">
        ${ReactDOMServer.renderToStaticMarkup(
      <IDcard
        size={template.layout == 'Vertical' ? { width: 55, height: 87 } : { width: 87, height: 55 }}
        backgroundImage={template.backgroundImage}
        elements={template.elements}
        data={student}
      />
    )}
      </div>
    `).join('');

    const printHtml = `
      <html>
        <head>
          <style>
            @page {
              size: ${setting.pageType};
              margin: ${setting.Margin}mm;
            }
            body {
              margin: 0;
              display: grid;
              grid-template-columns: repeat(${setting.pageType == 'A3' ? 3 : 2}, 1fr);
              grid-template-rows: repeat(${setting.pageType == 'A3' ? 6 : 5}, 1fr);
              gap: 10px;
              height: 100%;
              box-sizing: border-box;
            }
            .id-card {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              page-break-inside: avoid;
            }
          </style>
        </head>
        <body>
          ${idCardsHtml}
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printHtml);
    printWindow.document.close();

    // Wait until the content is fully loaded before printing
    printWindow.onload = () => {
      setIsLoading(false);
      printWindow.print();
    };
  };


  const handlePrintIDCards = (id) => {
    if (!selectedTemplate) {
      alert('Please select a template.');
      return;
    }

    setIsLoading(true);
    const template = templates.find(tpl => tpl.id === selectedTemplate);
    const student_data = students.filter(student => {
      return student.id === id;
    });
    const idCardsHtml = student_data.map(student => `
      <div class="id-card">
        ${ReactDOMServer.renderToStaticMarkup(
      <IDcard
        size={template.layout == 'Vertical' ? { width: 55, height: 87 } : { width: 87, height: 55 }}
        backgroundImage={template.backgroundImage}
        elements={template.elements}
        data={student}
      />
    )}
      </div>
    `).join('');

    const printHtml = `
      <html>
        <head>
          <style>
            @page {
              size: ${setting.pageType};
              margin: ${setting.Margin}mm;
            }
            body {
              margin: 0;
              display: grid;
              grid-template-columns: repeat(${setting.pageType == 'A3' ? 3 : 2}, 1fr);
              grid-template-rows: repeat(${setting.pageType == 'A3' ? 6 : 5}, 1fr);
              gap: 10px;
              height: 100%;
              box-sizing: border-box;
            }
            .id-card {
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              page-break-inside: avoid;
            }
          </style>
        </head>
        <body>
          ${idCardsHtml}
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printHtml);
    printWindow.document.close();

    // Wait until the content is fully loaded before printing
    printWindow.onload = () => {
      setIsLoading(false);
      printWindow.print();
    };
  };


  const filteredStudents = students.filter(student => {
    return (
      (!filters.class || student.class === filters.class) &&
      (!filters.section || student.section === filters.section)
    );
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'studentname',
      key: 'studentname',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobilenumber',
      key: 'mobilenumber',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, student) => (
        <Button onClick={() => handlePrintIDCards(student.id)}>Print ID Card</Button>
      )
    }
  ];

  const selected_template = templates.find(tpl => tpl.id === selectedTemplate);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Student List</h3>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <Select
          placeholder="Select School"
          style={{ width: 200 }}
          value={filters.school}
          onChange={(value) => handleFilterChange('school', value)}
          allowClear
        >
          <Option value="">Select School</Option>
          {schools.map(school => (
            <Option key={school.schoolcode} value={school.schoolcode}>{school.schoolname}</Option>
          ))}
        </Select>
        <Select
          placeholder="Select Class"
          style={{ width: 200 }}
          value={filters.class}
          onChange={(value) => handleFilterChange('class', value)}
          allowClear
          required
        >
          <Option value="">Select Class</Option>
          {classes.map(cls => (
            <Option key={cls} value={cls}>{cls}</Option>
          ))}
        </Select>
        {/*<Select
          placeholder="Select Section"
          style={{ width: 200 }}
          value={filters.section}
          onChange={(value) => handleFilterChange('section', value)}
          allowClear
        >
          <Option value="">Select Section</Option>
          {sections.map(section => (
            <Option key={section} value={section}>{section}</Option>
          ))}
        </Select>*/}
        <Button type="primary" onClick={() => setopenTemplates(true)}>Select Template</Button>
        <Button type="primary" onClick={handlePrintAllIDCards} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Print All ID Cards'}
        </Button>
        <Button type='primary' onClick={() => setOpen(true)} >Page Settings</Button>

        {open && <div>
          <ModalPopup open={open} setOpen={setOpen} title="Page Settings">
            <Container>
              <Form
                layout='vertical'
                name="pageSettings"
                initialValues={{ pageType: setting.pageType, Layout: setting.Layout, Margin: setting.Margin }}

              >
                <Form.Item
                  label="Page Type"
                  name="pageType"
                  rules={[{ required: false, message: 'Please select a page type!' }]}
                >
                  <Select value={setting.pageType} name="pageType" onChange={(val) => handleSettingsChange('pageType', val)}>
                    <Option value="A4">A4</Option>
                    <Option value="A3">A3</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Layout"
                  name="Layout"
                  rules={[{ required: false, message: 'Please select a page type!' }]}
                >
                  <Select value={setting.Layout} name="Layout" onChange={(val) => handleSettingsChange('Layout', val)}>
                    <Option value="Portrait">Portrait</Option>
                    <Option value="Landscape">Landscape</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Margin (In mm)"
                  name="Margin"
                  rules={[{ required: false, message: 'Please input!' }]}

                >
                  <InputNumber value={setting.Margin} name="Margin" onChange={(val) => handleSettingsChange('Margin', val)} style={{ width: '100%' }} />
                </Form.Item>


              </Form>
            </Container>
          </ModalPopup>
        </div>}

        {openTemplates && <div>
          <Modal width={1000} open={openTemplates} onCancel={() => setopenTemplates(false)} title="Select Template">
            <Container>
              <Row>
                {templates.map(template => (
                  <Col lg={4} md={4}>
                    <div onClick={() => handleTemplateChange(template.id)} style={{ scale: '0.7' }}>
                      <IDcard
                        size={template.layout == 'Vertical' ? { width: 55, height: 87 } : { width: 87, height: 55 }}
                        backgroundImage={template.backgroundImage}
                        elements={template.elements}
                        isPreview={true}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </Modal>
        </div>}
      </div>
      <Table dataSource={filteredStudents} columns={columns} rowKey="id" pagination={true} size='small' />
    </div>
  );
};

export default StudentList;
