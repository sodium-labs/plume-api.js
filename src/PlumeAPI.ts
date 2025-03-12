import PlumeAPIREST, { PlumeAPIRESTOptions } from "./PlumeAPIREST";
import {
    CryptoData,
    DecodeData,
    DecodeType,
    DefinitionData,
    EmojiMixData,
    EncodeData,
    EncodeType,
    ExecData,
    ExecLanguage,
    FreeGamesData,
    FunFactData,
    GitHubRepository,
    GitHubUser,
    HeightBallData,
    InteractionData,
    InteractionType,
    IPInfoData,
    ISSData,
    JokeData,
    MathData,
    MemeData,
    NasaAPOD,
    NPMData,
    QuoteData,
    RandomEmojiMixData,
    ReverseTextData,
    TranslateData,
    UpsideDownTextData,
    UrbanData,
    WeatherData,
    WikipediaData,
} from "./routes";
import { ColorData, Locale } from "./shared";
import { queryfy } from "./utils";

export interface PlumeAPIOptions extends PlumeAPIRESTOptions {}

/**
 * The client to interact with Plume API
 */
export default class PlumeAPI {
    public readonly rest: PlumeAPIREST;

    public constructor(options?: PlumeAPIOptions) {
        this.rest = new PlumeAPIREST(options);
    }

    // Fun

    public async eightBall(locale?: Locale): Promise<HeightBallData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/8ball${params}`);
    }

    /**
     * @deprecated Use `eightBall` instead
     */
    public async heightBall(locale?: Locale): Promise<HeightBallData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/8ball${params}`);
    }

    public async emojiMix(left: string, right: string): Promise<EmojiMixData> {
        const params = queryfy({ left, right });
        return await this.rest.get(`/emoji-mix${params}`);
    }

    public async funFact(locale?: Locale): Promise<FunFactData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/funfact${params}`);
    }

    public async issImage(circle?: boolean): Promise<Buffer> {
        const params = queryfy({ circle });
        return await this.rest.file(`/iss-image${params}`);
    }

    public async iss(): Promise<ISSData> {
        return await this.rest.get("/iss");
    }

    public async joke(locale?: Locale): Promise<JokeData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/joke${params}`);
    }

    public async math(expr: string): Promise<MathData> {
        const params = queryfy({ expr });
        return await this.rest.get(`/math${params}`);
    }

    public async meme(): Promise<MemeData> {
        return await this.rest.get("/meme");
    }

    public async nasaAPOD(): Promise<NasaAPOD> {
        return await this.rest.get("/nasa-apod");
    }

    public async npm(name: string): Promise<NPMData> {
        const params = queryfy({ name });
        return await this.rest.get(`/npm${params}`);
    }

    public async quote(locale?: Locale): Promise<QuoteData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/quote${params}`);
    }

    public async randomEmojiMix(): Promise<RandomEmojiMixData> {
        return await this.rest.get("/random-emoji-mix");
    }

    public async upsideDown(text: string): Promise<UpsideDownTextData> {
        const params = queryfy({ text });
        return await this.rest.get(`/upside-down${params}`);
    }

    public async urban(word: string): Promise<UrbanData> {
        const params = queryfy({ word });
        return await this.rest.get(`/urban${params}`);
    }

    public async color(hex: string): Promise<ColorData> {
        const params = queryfy({ hex });
        return await this.rest.get(`/color${params}`);
    }

    public async colorImage(hex: string): Promise<Buffer> {
        return await this.rest.file(`/color/image/${hex}`);
    }

    public async randomColor(): Promise<ColorData> {
        return await this.rest.get("/color/random");
    }

    public async decode(type: DecodeType, text: string): Promise<DecodeData> {
        const params = queryfy({ text });
        return await this.rest.get(`/decode/${type}${params}`);
    }

    public async encode(type: EncodeType, text: string): Promise<EncodeData> {
        const params = queryfy({ text });
        return await this.rest.get(`/encode/${type}${params}`);
    }

    public async githubRepository(name: string): Promise<GitHubRepository> {
        const params = queryfy({ name });
        return await this.rest.get(`/github/repository${params}`);
    }

    public async githubUser(name: string): Promise<GitHubUser> {
        const params = queryfy({ name });
        return await this.rest.get(`/github/user${params}`);
    }

    // Utility

    public async captcha(): Promise<{ code: string; image: Buffer }> {
        const res = await this.rest.request("GET", "/captcha");

        const code = res.headers.get("X-Captcha-Code");
        if (!code) throw new Error("X-Captcha-Code missing in response");

        const image = Buffer.from(await res.arrayBuffer());

        return { code, image };
    }

    public async crypto(name: string, currency: "usd" | "eur"): Promise<CryptoData> {
        const params = queryfy({ name, currency });
        return await this.rest.get(`/crypto${params}`);
    }

    public async definition(locale: Locale, word: string): Promise<DefinitionData> {
        const params = queryfy({ locale, word });
        return await this.rest.get(`/definition${params}`);
    }

    public async exec(language: ExecLanguage, code: string): Promise<ExecData> {
        const params = queryfy({ language, code });
        return await this.rest.get(`/exec${params}`);
    }

    public async freeGames(locale?: Locale): Promise<FreeGamesData> {
        const params = queryfy({ locale });
        return await this.rest.get(`/free-games${params}`);
    }

    public async ipInfo(ip: string): Promise<IPInfoData> {
        const params = queryfy({ ip });
        return await this.rest.get(`/ipinfo${params}`);
    }

    public async qrcode(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/qrcode${params}`);
    }

    public async reverseText(text: string): Promise<ReverseTextData> {
        const params = queryfy({ text });
        return await this.rest.get(`/reverse-text${params}`);
    }

    public async translate(text: string, to: string): Promise<TranslateData> {
        const params = queryfy({ text, to });
        return await this.rest.get(`/translate${params}`);
    }

    public async weather(city: string): Promise<WeatherData> {
        const params = queryfy({ city });
        return await this.rest.get(`/weather${params}`);
    }

    public async wikipedia(page: string, locale?: Locale): Promise<WikipediaData> {
        const params = queryfy({ page, locale });
        return await this.rest.get(`/wikipedia${params}`);
    }

    // Interactions

    public async interaction(type: InteractionType): Promise<InteractionData> {
        return await this.rest.get(`/interactions/${type}`);
    }

    // Image Creation

    public async achievement(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/images/achievement${params}`);
    }

    public async alert(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/images/alert${params}`);
    }

    public async caution(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/images/caution${params}`);
    }

    public async challenge(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/images/challenge${params}`);
    }

    public async jail(avatar: string): Promise<Buffer> {
        const params = queryfy({ avatar });
        return await this.rest.file(`/images/jail${params}`);
    }

    public async nokia(url: string): Promise<Buffer> {
        const params = queryfy({ url });
        return await this.rest.file(`/images/nokia${params}`);
    }

    public async tweet(
        avatar: string,
        name: string,
        username: string,
        text: string,
        retweets?: number,
        quote_tweets?: number,
        likes?: number,
    ): Promise<Buffer> {
        const params = queryfy({ avatar, name, username, text, retweets, quote_tweets, likes });
        return await this.rest.file(`/images/tweet${params}`);
    }

    public async wanted(avatar: string): Promise<Buffer> {
        const params = queryfy({ avatar });
        return await this.rest.file(`/images/wanted${params}`);
    }

    // Image Manipulation

    public async blur(url: string): Promise<Buffer> {
        const params = queryfy({ url });
        return await this.rest.file(`/images/blur${params}`);
    }

    public async colorify(url: string, color: string): Promise<Buffer> {
        const params = queryfy({ url, color });
        return await this.rest.file(`/images/colorify${params}`);
    }

    public async grayscale(url: string): Promise<Buffer> {
        const params = queryfy({ url });
        return await this.rest.file(`/images/grayscale${params}`);
    }

    public async invert(url: string): Promise<Buffer> {
        const params = queryfy({ url });
        return await this.rest.file(`/images/invert${params}`);
    }

    public async rotate(url: string, deg: number): Promise<Buffer> {
        const params = queryfy({ url, deg });
        return await this.rest.file(`/images/rotate${params}`);
    }

    // Meme Creation

    public async changeMyMind(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/changemymind${params}`);
    }

    public async didYouMean(search: string, correction: string): Promise<Buffer> {
        const params = queryfy({ search, correction });
        return await this.rest.file(`/memes/didyoumean${params}`);
    }

    public async drake(top: string, bottom: string): Promise<Buffer> {
        const params = queryfy({ top, bottom });
        return await this.rest.file(`/memes/drake${params}`);
    }

    public async duolingo(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/duolingo${params}`);
    }

    public async facts(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/facts${params}`);
    }

    public async fuze3(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/fuze3${params}`);
    }

    public async hugo(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/hugo${params}`);
    }

    public async nothing(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/nothing${params}`);
    }

    public async oogway(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/oogway${params}`);
    }

    public async pepeHug(avatar: string): Promise<Buffer> {
        const params = queryfy({ avatar });
        return await this.rest.file(`/memes/pepe-hug${params}`);
    }

    public async sadcat(top: string, bottom: string): Promise<Buffer> {
        const params = queryfy({ top, bottom });
        return await this.rest.file(`/memes/sadcat${params}`);
    }

    public async stonks(avatar: string, stonks?: boolean): Promise<Buffer> {
        const params = queryfy({ avatar, stonks });
        return await this.rest.file(`/memes/stonks${params}`);
    }

    public async tableFlip(avatar: string): Promise<Buffer> {
        const params = queryfy({ avatar });
        return await this.rest.file(`/memes/tableflip${params}`);
    }

    public async water(text: string): Promise<Buffer> {
        const params = queryfy({ text });
        return await this.rest.file(`/memes/water${params}`);
    }

    public async woosh(avatar: string): Promise<Buffer> {
        const params = queryfy({ avatar });
        return await this.rest.file(`/memes/woosh${params}`);
    }

    // Cards

    public async boost(avatar: string, username: string, text?: string): Promise<Buffer> {
        const params = queryfy({ avatar, username, text });
        return await this.rest.file(`/cards/boost${params}`);
    }

    public async couple(
        avatar1: string,
        avatar2: string,
        percentage?: number,
        primary_color?: string,
    ): Promise<Buffer> {
        const params = queryfy({ avatar1, avatar2, percentage, primary_color });
        return await this.rest.file(`/cards/couple${params}`);
    }

    public async rank(
        avatar: string,
        global_name: string,
        username: string,
        level: number,
        xp: number,
        max_xp: number,
        rank?: number,
        bg_url?: string,
        bg_color?: string,
        blur?: boolean,
        color?: string,
    ): Promise<Buffer> {
        const params = queryfy({
            avatar,
            global_name,
            username,
            level,
            xp,
            max_xp,
            rank,
            bg_url,
            bg_color,
            blur,
            color,
        });
        return await this.rest.file(`/cards/rank${params}`);
    }

    public async welcome(
        avatar: string,
        text1: string,
        text2?: string,
        text3?: string,
        bg_url?: string,
        bg_color?: string,
        font_color?: string,
        blur?: boolean,
    ): Promise<Buffer> {
        const params = queryfy({ avatar, text1, text2, text3, bg_url, bg_color, font_color, blur });
        return await this.rest.file(`/cards/welcome${params}`);
    }
}
