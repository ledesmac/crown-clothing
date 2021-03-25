import { createSelector } from 'reselect';
//selectors make components memoized, and will not re-render
//components when state changes do not effect them
//input selector doesnt use create selector
const selectCart = state => state.cart;

//output selector uses create selector

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce((accumalatedQuantity, cartItem) =>{
                return accumalatedQuantity + cartItem.quantity;
                }, 0)
        );
    }
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => {
        return(
            cartItems.reduce((accumalatedQuantity, cartItem) =>{
                return accumalatedQuantity + (cartItem.quantity*cartItem.price);
                }, 0)
        );
    }
)


