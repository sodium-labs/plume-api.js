export default class PlumeAPIError extends Error {
    public constructor(
        message: string,
        options?: ErrorOptions | undefined,
        public res?: Response | null,
    ) {
        super(message, options);
        this.res = res || null;
    }
}
