import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';

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
    // console.log(e.target);
    // console.log(e.currentTarget);
    // if ((e.target as HTMLElement).nodeName === 'SPAN') {
    //   (e.target as HTMLElement).innerHTML = 'YO YO YO !';
    // }
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <AppStateContext.Consumer>
        {state => {
          const itemCount = state.cart.items.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0);
          return (
            <div>
              <button type='button' onClick={this.handleClick}>
                <FiShoppingCart />
                <span>{itemCount} Pizza(s)</span>
              </button>
              <div style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                <ul>
                  {state.cart.items.map(item => {
                    return (
                      <li key={item.id}>
                        {item.name} &times; {item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}
