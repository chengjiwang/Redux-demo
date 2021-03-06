var initialState = [{
    name: "alivn",
    message: "good",
    likeNum: 0,
    dislikeNum: 0 
}];

export default function(state = initialState, action) {
    switch(action.type) {
    case 'ADD_COMMENT':
    	state.push(action.payload);
        return [ ...state ];
    case 'DELETE_COMMENT':
    	state.splice(action.payload , 1);
        return [ ...state ];
    case 'EDIT_COMMENT':
        state[action.id].message = action.payload ;
        return [ ...state ];
    case 'LIKE_NUM':
        state[action.id].likeNum = action.payload ;
        return [ ...state ];
    case 'DISLIKE_NUM':
        state[action.id].dislikeNum = action.payload ;
        return [ ...state ];
    default:
        return state;
    }
} 