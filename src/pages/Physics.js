import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Physics.css';

const Physics = () => {
  return (
    <div className="physics-page">
      <div className="jumbotron text-center jumbotron-physics">
        <h2>THE NOBEL PRIZE</h2>
        <h3>Nomination and selection of physics laureates</h3>
        <p>
          Nomination to the Nobel Prize in Physics is by invitation only. The names of the nominees and other information about the nominations cannot be revealed until 50 years later.
        </p>
      </div>
      
      <div className="text-center mb-4">
        <h4>
          Awarded the first Nobel Prize in Physics, Wilhelm Rontgen discovered X-radiation. This X-ray tube became a frequently used instrument in medicine after this discovery.
        </h4>
      </div>
      
      <Container className="mb-5">
        <Row>
          <Col md={4} className="mb-4">
            <h3>Process of nomination and selection</h3>
            <p>
              The Nobel Committee for Physics sends confidential forms to persons who are competent and qualified to nominate. The right to submit proposals for the award of a Nobel Prize in Physics shall, by statute, be enjoyed by:
            </p>
            <ol>
              <li>Members of the Nobel Committee for Physics;</li>
              <li>Nobel Prize laureates in physics;</li>
              <li>Swedish and foreign members of the Royal Swedish Academy of Sciences;</li>
            </ol>
          </Col>
          
          <Col md={4} className="mb-4">
            <h3>Selection of Nobel Prize laureates</h3>
            <p>
              The Royal Swedish Academy of Sciences is responsible for the selection of the Nobel Prize laureates in physics. The Academy appoints a working body, the Nobel Committee for Physics, which screens the nominations and presents a proposal for final candidates. The committee consists nominally of five voting members, but since many years, it also includes voting adjunct members. The Committee's proposal is discussed in a larger body, the Physics Class of the Academy, who may suggest a modification or forward a different proposal to the Academy.
            </p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h3>Who is eligible for the Nobel Prize in Physics?</h3>
            <p>
              The candidates eligible for the Physics Prize are those nominated by qualified persons who have received an invitation from the Nobel Committee to submit names for consideration. No one can nominate himself or herself.
            </p>
          </Col>
        </Row>
      </Container>
      
      <div className="jumbotron text-center jumbotron-laureates">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-content">
            <h2>The 2023 physics Laureates</h2>
            <p>
              The Royal Swedish Academy of Sciences has decided to award the Nobel Prize in Physics 2023 to Pierre Agostini, Ferenc Krausz and Anne L'Huillier "for experimental methods that generate attosecond pulses of light for the study of electron dynamics in matter."
            </p>
          </div>
          <Image 
            src={require('../assets/images/physics img.jpg')} 
            roundedCircle
            className="laureate-image"
          />
        </div>
      </div>
      
      <div className="text-center mt-5">
        <h2>Exploring the world of electrons</h2>
        <h4>
          How can you capture what takes place inside an atom?<br />
          To photograph high speed motion you need a very fast camera.<br />
          But to photograph what's going on inside an atom you need something much, much faster.
        </h4>
              </div>
    </div>
  );
};

export default Physics;
