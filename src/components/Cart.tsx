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

  render() {
    return (
      <div>
        <button
          type='button'
          onClick={() => {
            this.setState(prevState => ({
              isOpen: !prevState.isOpen,
            }));
          }}
        >
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
