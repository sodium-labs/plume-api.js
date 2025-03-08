export type Locale = "en" | "fr";

export interface ColorData {
    rgb: {
        r: number;
        g: number;
        b: number;
        value: string;
    };
    hsl: {
        h: number;
        s: number;
        l: number;
        value: string;
    };
    hsv: {
        h: number;
        s: number;
        v: number;
        value: string;
    };
    cmyk: {
        c: number;
        m: number;
        y: number;
        k: number;
        value: string;
    };
    name: string;
    hex: {
        value: string;
        clean: string;
    };
    url: string;
}
