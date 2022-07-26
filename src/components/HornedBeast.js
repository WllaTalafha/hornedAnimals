import React from "react";
import Card from 'react-bootstrap/Card';



class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        };
      }
    
      handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        return (
                <Card style={{ width: '18rem', display: 'inline-block' , margin:'1rem'}}>
                <Card.Img variant="top" src={this.props.imgUrl} style={{ hieght:'10vh' }} onClick={this.handleClick} />
                <Card.Body>
                <Card.Title>{this.props.title} 👍 {this.state.counter}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeast;