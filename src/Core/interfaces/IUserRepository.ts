
export default interface IUserRepository {
    createUser<T>(user:T):void
    findUser<T>(user:T):void
}