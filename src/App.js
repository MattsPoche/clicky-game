import React, { Component } from "react";
import ClickItem from "./components/click-item";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import _clickables from "./data.json";

class App extends Component {
    state = {
        clickables: _clickables,
        count: 0
    };

    shuffleArray(arr) {
        let j, x, i;
        for(i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    handleOnClick = click => {
        if(!click.state.clicked) {
            this.setState({
                clickables: this.shuffleArray(this.state.clickables),
                count: this.state.count + 1
            });
            click.setState({
                clicked: true
            });
        }
    };

    render() {
        return (
            <Wrapper>
                <Title>Clicky Game</Title>
                <div className="container">
                    { this.state.count }
                </div>
                {this.state.clickables.map(click => (
                    <ClickItem 
                        name={click.name} 
                        image={click.img}
                        handleOnClick={this.handleOnClick}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;