const favorites = (state = [] , action) =>
{
    switch(action.type)
    {
        case "ADD_TO_FAVORITES":
            {
                let fav = state;
                fav.push(action.payload)
                return fav;
            }
         
        case "DELETE_ FROM_FAVORITES":
            {
                return state.filter (x=> x.city !== action.payload)
            }
        default: {
            return state;
        }    
    }
}

export default favorites