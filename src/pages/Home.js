import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      {user && (
        <div className="welcome-banner bg-light p-4 rounded shadow-sm mb-4">
          <Container className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <div>
              <h4 className="mb-2">Welcome back, {user.username}!</h4>
              <p className="mb-0">You are signed in. Explore the site with the logout button in the top navigation.</p>
            </div>
          </Container>
        </div>
      )}
      <div className="jumbotron text-center jumbotron-custom">
        <h2>Increase your impact with strategic and creative science communication!</h2>
      </div>
      
      <Container className="mt-4">
        <Row>
          <Col md={4} className="mb-4 feature-card">
            <h4>
              We help you take your ideas to the next level and we realize them by creating unique websites, infographics, animated videos, & scrollytelling campaigns.
            </h4>
            <h5>
              We can also teach you (and your colleagues) how to become better science communicators with one of our workshops.
            </h5>
            <p className="mt-4">
              Liesbeth and Stephan master the art of clearly presenting complex concepts. Their work on infographics and websites for my projects has made my activities and projects more meaningful for use in schools on a daily basis.
            </p>
          </Col>
          
          <Col md={4} className="text-center mb-4 feature-card">
            <img 
              src={require('../assets/images/bootstrap image 1.png')} 
              alt="Science Communication" 
              className="img-fluid project-image"
            />
          </Col>
          
          <Col md={4} className="mb-4 feature-card">
            <h3>For researchers at every step of their career:</h3>
            <h2>PHD</h2>
            <p>
              Do you want your (poster) presentation to get noticed? Book our workshops for your PhD retreat or department.
            </p>
            <p>
              Create true impact by working with us on your oration and presentations, or let us help you prepare for the media.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="jumbotron text-center mt-5">
        <h3>See how we work by reading about three scientists and their requests for science communication:</h3>
      </div>

      <Container className="mt-4">
        <h3 className="text-center mb-4">1. It starts with a scientist's question</h3>
        <Row>
          <Col md={4} className="mb-4">
            <h4>Science communication</h4>
            <p>
              I take part in an EU research project or received a grant for my work. How do inform our public about the research?
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Impact on society</h4>
            <p>
              I would like to inspire decision makers with my newest research findings. How do I tell my story to maximize the chances of making an impact on society?
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h4>Presentation</h4>
            <p>
              I have to give an important lecture. How do I write my story and make my presentation, so that I will be the talk of the day?
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h4 className="text-center mb-4">2. Discuss your project with The Online Scientist</h4>
        <p className="text-center">
          And benefit from over ten years of experience in science communication. We have dedicated our careers to science communication, and worked with a wide variety of scientists with all kinds of goals. So when you come to us with your question we help you with the most time- and cost-effective solution for your project, while making sure that the science stays accurate.
        </p>
        
        <h4 className="text-center mt-5 mb-4">3. A result to be proud of</h4>
        <Row>
          <Col md={4} className="mb-4 project-card">
            <img 
              src={require('../assets/images/bootstrap 1.jpg')} 
              alt="Website Project" 
              className="img-fluid project-image mb-3"
            />
            <h4>Website & animated video for a research group</h4>
            <p>
              Prof. Michel Vols received an ERC Starting Grant and wanted to showcase his research and team, and to build a network with other researchers. We build a unique website for him with a blog functionality and a team page eviction.eu. There they frequently post updates on the latest research. We also created an animated video that tells the story of what their research is trying to achieve.
            </p>
          </Col>
          <Col md={4} className="mb-4 project-card">
            <img 
              src={require('../assets/images/bootstrap 2.jpg')} 
              alt="Infographic Project" 
              className="img-fluid project-image mb-3"
            />
            <h4>Infographic & scrollytelling website campaign</h4>
            <p>
              We've worked with dr. Famke Mölenberg before to create engaging infographics and videos. This time, Famke wanted to create more impact with her research on the effects of second-hand smoking in children. We helped to write a story and created an infographic that captured the essence of her research.
            </p>
          </Col>
          <Col md={4} className="mb-4 project-card">
            <img 
              src={require('../assets/images/bootstrap3.jpg')} 
              alt="Writing Project" 
              className="img-fluid project-image mb-3"
            />
            <h4>Writing & design for a professor's farewell address</h4>
            <p>
              For every scientist, also the highly regarded profs, there comes a time to say goodbye when they retire. Prof. René Bindels was no exception, and he had a nice parting event to look forward to. We worked with him to shape his story as well as the presentation slides, and the result is a clear presentation that earned him a huge applause.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
