export class BaseResponse<T>{
    data: T | null;
    message: string;
    iSuccess: boolean;
    constructor(data: T | null = null, message = 'Success', isSuccess = true) {
        this.iSuccess = true;
        this.message = message;
        this.data = data;
    }
}


export class Pagination<T> {
    data: T[]
    totalRecord: number;
    constructor(data: T[] = [], totalRecord: number = 0) {
        this.data = data;
        this.totalRecord = totalRecord;
    }
}

export class BadRequest extends Error {
    status: number;
    constructor(message: string, status = 500) {
        super(message);
        this.status = status
    }
}