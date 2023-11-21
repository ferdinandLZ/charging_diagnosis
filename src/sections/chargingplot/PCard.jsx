import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


function PCard({title,valuename,value,showRedBackground}) {
   // Define a CSS class based on the parameter value
   const cardClass = showRedBackground ? "warning" : "";
  
  return (  

        <Card bg={cardClass} >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {valuename}
        </Card.Text>
        <Card.Text>
        {value}
        </Card.Text>
      </Card.Body>

    </Card>
  );
}
export default PCard;

PCard.propTypes = {
  title: PropTypes.string,
  valuename: PropTypes.string,
  value: PropTypes.number,
  showRedBackground: PropTypes.bool

};