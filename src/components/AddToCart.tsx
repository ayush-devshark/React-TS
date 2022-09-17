import React from 'react';
import { CartItem, useStateDispatch } from './AppState';

export interface AddToCartProps {
  addToCart(item: Omit<CartItem, 'quantity'>): void;
}

export function withAddToCart<T extends AddToCartProps>(
  ChildComponent: React.ComponentType<T>,
) {
  const AddToCartHOC: React.FC<Omit<T, keyof AddToCartProps>> = props => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: AddToCartProps['addToCart'] = item => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComponent {...(props as T)} addToCart={handleAddToCartClick} />
    );
  };

  return AddToCartHOC;
}

export const WithAddToCartProps: React.FC<{
  children: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps['addToCart'] = item => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};
