export interface SystemUser{
    authUser:AuthUser
}

interface AuthUser{
    imageUrl:string,
    fullNames:string,
    username:string,
    email:string
}