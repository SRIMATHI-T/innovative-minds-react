import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Global.css';

const Chemistry = () => {
  return (
    <div className="chemistry-page">
      <div className="jumbotron text-center bg-light py-5 mb-5">
        <h2>THE NOBEL PRIZE</h2>
        <h3>Nomination and selection of chemistry laureates</h3>
        <p>
          Nomination to the Nobel Prize in Chemistry is by invitation only. The names of the nominees and other information about the nominations cannot be revealed until 50 years later.
        </p>
      </div>

      <div className="text-center mb-4">
        <h4>
          The first Nobel Prize in Chemistry was awarded to Jacobus Henricus van 't Hoff for his discovery of the laws of chemical dynamics and osmotic pressure in solutions.
        </h4>
      </div>

      <Container className="mb-5">
        <Row>
          <Col md={4} className="mb-4">
            <h3>Process of nomination and selection</h3>
            <p>
              The Nobel Committee for Chemistry sends confidential forms to experts and qualified nominators around the world. The right to submit proposals for the award of a Nobel Prize in Chemistry includes:
            </p>
            <ol>
              <li>Members of the Nobel Committee for Chemistry;</li>
              <li>Nobel Prize laureates in chemistry;</li>
              <li>Swedish and foreign members of the Royal Swedish Academy of Sciences;</li>
            </ol>
          </Col>

          <Col md={4} className="mb-4">
            <h3>Selection of Nobel Prize laureates</h3>
            <p>
              The Royal Swedish Academy of Sciences is responsible for selecting the Nobel Prize laureates in chemistry. It appoints the Nobel Committee for Chemistry, which evaluates nominations and makes a recommendation for the final candidates. The committee's proposal is reviewed by the Academy before the final laureates are chosen.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h3>Who is eligible for the Nobel Prize in Chemistry?</h3>
            <p>
              Candidates eligible for the Chemistry Prize are those nominated by qualified persons invited by the Nobel Committee. Self-nominations are not permitted, and nominations are kept confidential for 50 years.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="jumbotron text-center bg-secondary text-white py-5 rounded mb-5">
        <h2>The 2023 chemistry Laureates</h2>
        <p>
          The Royal Swedish Academy of Sciences awarded the Nobel Prize in Chemistry 2023 to Moungi Bawendi, Louis Brus and Alexei Ekimov "for the discovery and synthesis of quantum dots", which have revolutionized the field of nanotechnology and optical materials.
        </p>
      </div>

      <div className="text-center mt-5">
        <h2>Exploring the world of molecules</h2>
        <h4>
          Chemistry reveals how atoms connect to form the materials around us. Understanding molecular behavior helps us design new medicines, materials, and energy solutions.
        </h4>
      </div>
    </div>
  );
};

export default Chemistry;
