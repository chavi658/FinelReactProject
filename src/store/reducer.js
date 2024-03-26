import * as actionsName from './action';

const initializeState = {
    user: null,
    recipes: [],
    count: 1,
    countR: 1,
    category:null,
    duratoin:null,
    difficulty:null,
    creator:null,
    shoppingList:[],
    c:null


}

const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case actionsName.SET_USER:
            {
                return {
                    ...state,
                    user: action.user

                }
            }
        case actionsName.ADD_RECIPE:
            {
               
               
                return {
                    ...state,
                    recipes :[...state.recipes,action.data],
                

                }
            }
            case actionsName.SET_RECIPES:
                {
                    const recipes = [...action.data]
                    return {
                        ...state,
                        recipes,
        
                    }
                }
                
             
            case actionsName.ADD_CATEGORY:
                {
                    const categories = [...state.categories]
                    categories.push(action.data)
                    return {
                        ...state,
                        categories,
    
                    }
                }
                            case actionsName.SET_CATEGORY:
                                {
                             
                                    return {
                                        ...state,
                                        category:action.data
                    
                                    }
                                }
                                case actionsName.SET_SHOPPING:
                                    {
                                        const shoppingList = [...action.data]
                                        return {
                                            ...state,
                                            shoppingList,
                            
                                        }
                                    }
                                    case actionsName.SET_SHOPPINGRECIPE:
                                        {
                                           
                                        }
                                    case actionsName.DELETE_RECIPE:
                                    {
                                        console.log("DELETE_RECIPE")
                                        const recipes2 = state.recipes?.filter(x => x.id != action.Recipe)
                                        return {
                                                                                    
                                         ...state, recipes2 
                        
                                        }
                                    }

        default:
            return { ...state }
    }
}
export default reducer;

