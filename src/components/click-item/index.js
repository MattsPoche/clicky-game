import React, { Component } from "react";
import "./style.css"

class ClickItem extends Component {
    state = {
        clicked: false,
    };

    render() {
        return (
            <div className="container">
                    <img 
                        className="img-thumbnail" 
                        alt={this.props.name} 
                        src={this.props.image} 
                        onClick={ () => this.props.handleOnClick(this) }
                    />
            </div>
        );
    }
}

export default ClickItem;