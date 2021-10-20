export default class ResponseDto{
    private message
    private data
    private status
    constructor(message:string,data:any,status:string){
        this.message = message
        this.data = data
        this.status = status

    }
}