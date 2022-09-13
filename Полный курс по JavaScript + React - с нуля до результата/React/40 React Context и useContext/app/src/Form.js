import { Container } from 'react-bootstrap'
import { Form }  from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import InputComponent from './Input';

const Forma = (props) => {

    return (
      <Container>
        <InputGroup className="mb-3 mt-3" >
            <InputComponent />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>
  
        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" value={props.text} />
        </InputGroup>
      </Container>
    )
  }

  export default Forma