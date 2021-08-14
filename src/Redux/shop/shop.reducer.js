import SHOP_DATA from '../../page/Shop/Shop_data'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

export const shopReducer = (state = INITIAL_STATE, action) =>{
switch(action.types){
    default:
        return state;
}

}