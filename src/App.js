import React, { Component } from "react";
import ClickItem from "./components/click-item";
import Wrapper from "./components/wrapper";
import Title from "./components/title";

class App extends Component {
    state = {
        //clickables
    };

    render() {
        return (
            <Wrapper>
                <Title>Clicky Game</Title>
                <ClickItem></ClickItem>
            </Wrapper>
        );
    }
}

export default App;