import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.js';

function Detail() {

    let { id } = useParams();
    let item = data[id];

    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} alt="no image" 
                style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 auto' }}/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.content}
                        <br></br>
                        {item.opinion}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Detail;