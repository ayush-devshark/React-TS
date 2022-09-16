import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

interface Props {}

interface State {
  isOpen: boolean;
}

export default class Cart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
    console.log(e.currentTarget);
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      (e.target as HTMLElement).innerHTML = 'YO YO YO !';
    }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div>
        <button type='button' onClick={this.handleClick}>
          <FiShoppingCart />
          <span>2 Pizza(s)</span>
        </button>
        <div style={{ display: this.state.isOpen ? 'block' : 'none' }}>
          <li>Napo</li>
          <li>Mapo</li>
        </div>
      </div>
    );
  }
}
