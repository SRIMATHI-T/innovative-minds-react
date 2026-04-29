import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setErrors({});
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <Container>
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={4} className="mb-4">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@innovativeminds.org</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                <div>
                  <h4>Address</h4>
                  <p>123 Science Communication Ave<br />
                  Innovation City, IC 12345</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faClock} className="info-icon" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={8} className="mb-4">
            <div className="contact-form">
              <h3>Send us a Message</h3>
              
              {success && (
                <Alert variant="success" className="mb-4">
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        isInvalid={!!errors.name}
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        isInvalid={!!errors.email}
                        className="form-control-lg"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    isInvalid={!!errors.subject}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows={5}
                    isInvalid={!!errors.message}
                    className="form-control-lg"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button type="submit" variant="primary" size="lg" className="submit-btn">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="map-container">
              <h3>Find Us</h3>
              <div className="map-placeholder">
                <div className="map-content">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />
                  <h4>Interactive Map</h4>
                  <p>Map integration will be available soon</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
