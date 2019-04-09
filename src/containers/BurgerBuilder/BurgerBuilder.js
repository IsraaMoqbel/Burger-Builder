import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from './../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/OrderSummery/OrderSummery';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:1.2,
    meat:2,
    bacon:1
}
class BurgerBuilder extends Component {

    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchaseable:false,
        purchasing:false
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
                    .map(ingKey => {
                        return ingredients[ingKey]
                    })
                    .reduce((sum,el)=>{
                        return sum + el
                    },0);

                    this.setState({purchaseable: sum > 0})
    }

    purchaseHandler = ()=> {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = ()=> {
        this.setState({purchasing:false});
    }

    purchaseContinued = ()=> {
         alert('You Continue!');
    }

    addIngredientHandler = (type)=> {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            if(disabledInfo[key] <= 0) disabledInfo[key] =true
            else disabledInfo[key] =false
                }
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                 />
                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                     <OrderSummery 
                     ingredients={this.state.ingredients}
                     purchaseCanceled={this.purchaseCancelHandler}
                     purchaseContinued={this.purchaseContinued}
                     price={this.state.totalPrice} />
                 </Modal>
            </React.Fragment>
        );
    }

}

export default BurgerBuilder;