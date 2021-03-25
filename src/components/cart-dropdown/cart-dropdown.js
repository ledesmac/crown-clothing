import React from 'react';
import { connect }  from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => {
                        return(
                            <CartItem 
                                key={cartItem.id} 
                                item={cartItem} />
                        );
                    })
                }
            </div>
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => {
    return({
        cartItems
    });  
};

export default connect(mapStateToProps)(CartDropdown);