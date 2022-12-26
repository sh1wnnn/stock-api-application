import './App.css';
import Status from './components/MarketStatus';
import Ticker from './components/TickerData';
import Holiday from './components/MarketHoliday';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <Container fluid className="App">
    <Row className="Header">
      <h6 className="HeaderText">US Stock Market API Application</h6>
    </Row>
    <Row className="StatusRow">
      <Col className="LeftColumn">
        <h1 className="StatusText"> Current Market Status: </h1>
      </Col>
      <Col>
        <Status></Status>
      </Col>
    </Row>
    <Row className="HolidayRow">
      <Col className="LeftColumn">
        <h1 className="HolidayText"> Upcoming Market Holiday: </h1>
      </Col>
      <Col>
        <Holiday></Holiday>
      </Col>
    </Row>
    <Row className="TickerRow">
      <Col className="LeftColumn">
        <h1 className="TickerText"> Ticker Previous Day: </h1>
      </Col>
      <Col>
        <Ticker></Ticker>
      </Col>
    </Row>
  </Container>
  )
}

export default App;
