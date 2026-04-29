import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import WorkshopModal from '../components/WorkshopModal';
import '../styles/Workshops.css';

const Workshops = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const workshops = [
    {
      id: 1,
      title: 'IMPACT with science communication',
      subtitle: 'Do you want to have a positive effect on the world? We will make you think about your goal, audience! Also available as a keynote lecture.',
      image: require('../assets/images/worshop 1 .jpg'),
      modalTitle: 'Get creative with your science communication for impact!',
      modalContent: `
        <p>What do you consider impact? Is it publishing a peer-reviewed paper, and hoping a lot of people will read it? In this workshop we look beyond academia and make you think about your goal, audience and the message you are sending. How do you plan to achieve that people want to pay attention to what you are saying?</p>
        <h4>"Motivate yourself to get more out of your research!"</h4>
        <p>Using short interactive exercises, we help you determine your message and goal (spoiler alert: it's never just 'informing' the public). We then zoom in to help you step into the shoes of your target audience, and teach you what steps you need to take to prevent your message from being misunderstood. We briefly cover all aspects of science communication and how they can contribute to your impact as a scientist.</p>
        <p>Available as keynote or workshop. If you choose this workshop in a 2-3 hour interactive lecture format you will get creative yourself and design new ways of science communication in smaller groups.</p>
      `
    },
    {
      id: 2,
      title: 'Pitch your science to any audience',
      subtitle: 'By understanding your audience and aligning your message to their needs, you can really get your point across. In this workshop you will create a short pitch or article to practice just that.',
      image: require('../assets/images/worshop 2.jpg'),
      modalTitle: 'Learn how to engage your audience effectively',
      modalContent: `
        <p>Writing a short pitch or article is often the best start to any kind of science communication. To help you get on with this, we aim this workshop at defining your message, goal and target audience. But we will also cover some ways to formulate your message clearly, and explain why this is so important.</p>
        <h4>"Create a pitch to blow away any audience!"</h4>
        <p>You'll learn how to really understand your target audience, and to adapt your message for optimal communication with them. The end product is a short pitch/article. Of course, you could also use this text as the stepping stone for something much larger.</p>
      `
    },
    {
      id: 3,
      title: 'Science and the media',
      subtitle: 'Do you want to be more confident around journalists or the media? Or do you want to take advantage of the opportunities that social media offer for scientists? We will get you started!',
      image: require('../assets/images/worshop 3.jpg'),
      modalTitle: 'How to engage media with confidence',
      modalContent: `
        <p>Like it or not: (social) media are becoming an integral part of scientific success. This workshop will help you understand how the media work, and how you can use them to your advantage. It's also very useful for scientists who want to prepare for interviews with journalists, and for those who want to use social media to showcase their work.</p>
        <h4>"Understanding (social) media and using them to your advantage"</h4>
        <p>We include a section on the various social media and how you can use them creatively for science communication.</p>
      `
    }
  ];

  const handleShowModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="workshops-page">
      <div className="curved-background">
        <div className="content">
          <p>Do you want to have a bigger impact with science?</p>
          <h1>Workshops & lectures on science communication</h1>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          <h2>
            Invite us to your university (of applied science), institute, PhD day, conference or summer school and we will inspire you and your colleagues or students to get your message across in more attractive, contemporary and effective ways.
          </h2>
        </div>
      </div>

      <Container className="mt-4">
        <div className="workshop-features">
          <h4>
            <li>Choose between English or Dutch</li>
            <li>Opt for online or in-house sessions</li>
            <li>No bullet-points, guaranteed!</li>
            <li>Suitable for all levels: from PhD students to full professors, and from support staff to seasoned communicators</li>
          </h4>
        </div>

        <div className="text-center mb-5">
          <h2 className="workshop-title">Choose from our science communication workshops</h2>
          <h4 className="workshop-subtitle">
            All our workshops are about science communication. However, for each workshop we chose a different focus: strategic thinking about the basic questions, performing a pitch, telling a story, writing a social media post, creating a presentation, or designing a graphical abstract.
          </h4>
        </div>

        <Row>
          {workshops.map((workshop) => (
            <Col key={workshop.id} md={12} className="mb-5">
              <div className="workshop-item">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="workshop-image"
                />
                <div className="workshop-content">
                  <h3 className="workshop-title-text">{workshop.title}</h3>
                  <h4 className="workshop-description">{workshop.subtitle}</h4>
                  <Button 
                    variant="success" 
                    onClick={() => handleShowModal(workshop.modalTitle, workshop.modalContent)}
                    className="read-more-btn"
                  >
                    READ MORE!!
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="carousel-section">
          <ImageCarousel />
        </div>

        <div className="comments-section mt-5">
          <h2>COMMENTS:</h2>
          <div className="comments-container">
            <div className="comment-box">
              "The success of my poster and my pitch is the result of what I learned in your extraordinary workshop. The outcome was exactly what I wanted. I couldn't ask for more! THANK YOU!!!"
            </div>
            <div className="comment-box">
              "Our research team enjoyed the IMPACT workshop very much! We learned how we can create more impact with our research by thinking one step further. An interactive workshop with a lot of positive energy!"
            </div>
            <div className="comment-box">
              "Last week I received the "1st Excellence Poster Award" at the 10th Manufacturing Engineering Society International Conference (out of 100 posters!!). I would like to thank you for the help with the work and for planning a great course!"
            </div>
          </div>
        </div>

              </Container>

      <WorkshopModal 
        show={showModal} 
        handleClose={handleCloseModal} 
        title={modalContent.title} 
        content={modalContent.content} 
      />
    </div>
  );
};

export default Workshops;
