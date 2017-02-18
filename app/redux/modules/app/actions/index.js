export default function login(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign(...state, {authenticated: true});
        default:
            return state;
    }
}
