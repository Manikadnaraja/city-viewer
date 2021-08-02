import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Map from './components/Map';

function App() {
  return (
    <Container>
      <Row>
        <Header></Header>
      </Row>
      <Row>
        <Map></Map>
      </Row>
    </Container>
  );
}

export default App;
