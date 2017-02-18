export default (state = {title: 'TapGoods'}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign(...state, {authenticated: true});
        default: {
            return state;
        }
    }
};
