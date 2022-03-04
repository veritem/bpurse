import { UserInterface } from "../../interfaces/UserInterface";

export const setAuthUser = (user:UserInterface) => {
    return {
        type: 'SET_AUTH_USER',
        payload: user,
    }
}
