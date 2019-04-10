import React from 'react';
import Button from './../../components/UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
                              .map(ingKey => {
                                  return <li key={ingKey}><span style={{textTransform:'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]} </li>
                              })
    return(
        <React.Fragment>
            <h3>Your order</h3>
            <p>
                A delicious burger with the following ingredients
            </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong> </p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    )

}

export default orderSummery;

