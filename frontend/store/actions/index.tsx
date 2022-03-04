import { SystemUser } from "../../interfaces/SystemUser";

export const setAuthUser = (user:SystemUser) => {
    return {
        type: 'SET_AUTH_USER',
        payload: user,
    }
}
