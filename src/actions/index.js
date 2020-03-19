import { INCREASE, DECREASE } from './type';

export const counterIncrease = () => dispatch => {
    return fetch('http://vunamweb.com/test.php')
            .then((response) => response.json())
            .then((responseData) => {
                dispatch({ type: 'increase' })
            })
            .catch((error) => {
                console.log(error);
            }); 
};

export const counterDecrease = () => ({ type: DECREASE });