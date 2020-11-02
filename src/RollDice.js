import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { dieOneNum: "six", dieTwoNum: "six", isRolling: false };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // Pick two random indices of the sides prop array
    let randOne = Math.floor(Math.random() * this.props.sides.length);
    let randTwo = Math.floor(Math.random() * this.props.sides.length);

    // Set the state with new rolls
    this.setState({
      dieOneNum: this.props.sides[randOne],
      dieTwoNum: this.props.sides[randTwo],
      isRolling: true,
    });

    // Wait for one second and then set isRolling back to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die num={this.state.dieOneNum} animate={this.state.isRolling} />
          <Die num={this.state.dieTwoNum} animate={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
