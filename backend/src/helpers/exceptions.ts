export default class ApplicationError extends Error {
    status: number | undefined;
    constructor(message: string, status: number) {
        super();
        this.name = this.constructor.name;
        this.message = message || 
            'Something went wrong. Please try again.';
        this.status = status || 500;
    }
}