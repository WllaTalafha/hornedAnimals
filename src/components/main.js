import React from "react";
import HornedBeast from "./HornedBeast";
import Emages from "../data.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
  render() {
    return (
        <Row xs={2} md={3} className="g-4">
    {Emages.map((item) => 
        {
            return (
                <Col>
                <HornedBeast  imgUrl={item.image_url} title={item.title} description={item.description} />
                </Col>
            )
        }
        )
    }
        </Row>
    )
    }}
    
export default Main;