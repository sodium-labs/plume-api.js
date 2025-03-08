import PlumeAPIError from "./PlumeAPIError";
import { version } from "@/../package.json";

export interface PlumeAPIRESTOptions {
    userAgent?: string;
}

export default class PlumeAPIREST {
    public static readonly baseURL = "https://plume.ptarmigan.xyz/api";
    public static readonly defaultUserAgent = `plume-api.js/${version}`;

    public constructor(public readonly options: PlumeAPIRESTOptions = {}) {
        this.options = options;
    }

    public async request(method: string, path: string, body?: object): Promise<Response> {
        if (!path.startsWith("/")) {
            throw new Error(`Invalid path: ${path}`);
        }

        const url = `${PlumeAPIREST.baseURL}${path}`;
        try {
            const headers = new Headers({
                "User-Agent": `${PlumeAPIREST.defaultUserAgent} ${this.options.userAgent || ""}`.trim(),
            });

            const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
            if (!res.ok) {
                throw new PlumeAPIError(`Failed to fetch ${url}: ${res.statusText}`, undefined, res);
            }

            return res;
        } catch (err) {
            throw new PlumeAPIError(`Failed to fetch ${url}`, { cause: err });
        }
    }

    public async get<T = unknown>(path: string): Promise<T> {
        const res = await this.request("GET", path);
        return (await res.json()) as T;
    }

    public async file(path: string): Promise<Buffer> {
        const res = await this.request("GET", path);
        return Buffer.from(await res.arrayBuffer());
    }
}
