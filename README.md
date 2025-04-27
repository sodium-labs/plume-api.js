<div align="center">
<br />
    <h1>Plume API.js</h1>
    <br />
    <p>
        <a href="https://discord.gg/8PDXWSHH7k"><img src="https://img.shields.io/discord/1336303640725553213?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/plume-api"><img src="https://img.shields.io/npm/v/@sodiumlabs/plume-api.svg?maxAge=3600" alt="npm version" /></a>
        <a href="https://www.npmjs.com/package/@sodiumlabs/plume-api"><img src="https://img.shields.io/npm/dt/@sodiumlabs/plume-api.svg?maxAge=3600" alt="npm downloads" /></a>
        <a href="https://github.com/sodium-labs/plume-api.js/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/sodium-labs/plume-api.js?logo=github&logoColor=ffffff" /></a>
    </p>
</div>

# About

`@sodiumlabs/plume-api` is a module that allows you to easily use Plume API.

# Installation

```sh
npm install @sodiumlabs/plume-api
```

# Links

- [Plume API](https://plume.sodiumlabs.xyz)
- [Plume API documentation](https://plume.sodiumlabs.xyz/docs)
- [Module references](#references)
- [Discord server](https://discord.gg/8PDXWSHH7k)
- [GitHub](https://github.com/sodium-labs/plume-api.js)
- [npm](https://npmjs.com/package/@sodiumlabs/plume-api)
- [Sodium Labs](https://sodiumlabs.xyz)

# Examples

If you are developing a Discord bot using `discord.js`, here is how to use Plume API:

```js
const { Client } = require("discord.js");
const { PlumeAPI } = require("@sodiumlabs/plume-api");

// Your discord.js client
const client = new Client({
    /* ... */
});

// Attach PlumeAPI to your client
client.plumeAPI = new PlumeAPI();
```

You can now use Plume API anywhere in your bot. <br/>For example, in a slash command:

```js
const joke = await client.plumeAPI.joke();

await interaction.reply(`Question: ${joke.question}` + `\nAnswer: ||${joke.answer}||`);
```

To send an image received from the API, you can use the `AttachmentBuilder` class from `discord.js`:

```js
const { AttachmentBuilder } = require("discord.js");

// Since downloading the image can take some time
// depending on your connection speed, you should defer.
await interaction.deferReply();

const buffer = await client.plumeAPI.facts("PlumeAPI is the best API");
const attachment = new AttachmentBuilder(buffer, { name: "image.png" });

await interaction.editReply({ files: [attachment] });
```

# References

PlumeAPI class methods. <br/> You can find the types definitions on the [API documentation](https://plume.sodiumlabs.xyz/docs).

```js
// Fun
eightBall(locale?: Locale): Promise<HeightBallData>;
advice(locale?: Locale): Promise<AdviceData>;
agify(name: string): Promise<AgifyData>;
emojiMix(left: string, right: string): Promise<EmojiMixData>;
emojify(text: string): Promise<EmojifyData>;
funFact(locale?: Locale): Promise<FunFactData>;
issImage(circle?: boolean): Promise<Buffer>;
iss(): Promise<ISSData>;
joke(locale?: Locale): Promise<JokeData>;
math(expr: string): Promise<MathData>;
meme(): Promise<MemeData>;
nasaAPOD(): Promise<NasaAPOD>;
npm(name: string): Promise<NPMData>;
quote(locale?: Locale): Promise<QuoteData>;
randomEmojiMix(): Promise<RandomEmojiMixData>;
upsideDown(): Promise<UpsideDownTextData>;
urban(word: string): Promise<UrbanData>;
color(hex: string): Promise<ColorData>;
colorImage(hex: string): Promise<Buffer>;
randomColor(): Promise<ColorData>;
githubRepository(name: string): Promise<GitHubRepository>;
githubUser(name: string): Promise<GitHubUser>;

// Utility
captcha(): Promise<{
    code: string;
    image: Buffer;
}>;
crypto(name: string, currency: "usd" | "eur"): Promise<CryptoData>;
definition(locale: Locale, word: string): Promise<DefinitionData>;
exec(language: ExecLanguage, code: string): Promise<ExecData>;
freeGames(locale?: Locale): Promise<FreeGamesData>;
ipInfo(ip: string): Promise<IPInfoData>;
qrcode(text: string): Promise<Buffer>;
reverseText(text: string): Promise<ReverseTextData>;
screenshot(url: string): Promise<Buffer>;
translate(text: string, to: string): Promise<TranslateData>;
uuid(): Promise<UUIDData>
weather(city: string): Promise<WeatherData>;
wikipedia(page: string, locale?: Locale): Promise<WikipediaData>;

// Animals
duck(): Promise<Buffer>;
fox(): Promise<Buffer>;

// Encode
decode(type: DecodeType, text: string): Promise<DecodeData>;

// Decode
encode(type: EncodeType, text: string): Promise<EncodeData>;

// Fortnite
fortniteMapImagePois(locale?: Locale): Promise<Buffer>;
fortniteMapImage(): Promise<Buffer>;
fortniteMap(locale?: Locale): Promise<FortniteMapData>;

// Minecraft
minecraftAvatar(name: string): Promise<Buffer>;
minecraftBody(name: string): Promise<Buffer>;
minecraftID(name: string): Promise<MinecraftIDData>;
minecraftName(id: string): Promise<MinecraftNameData>;
minecraftSkin(name: string): Promise<MinecraftSkinData>;

// Interactions
interaction(type: InteractionType): Promise<InteractionData>;

// Image Creation
achievement(text: string): Promise<Buffer>;
alert(text: string): Promise<Buffer>;
caution(text: string): Promise<Buffer>;
challenge(text: string): Promise<Buffer>;
jail(avatar: string): Promise<Buffer>;
nokia(url: string): Promise<Buffer>;
tweet(avatar: string, name: string, username: string, text: string, retweets?: number, quote_tweets?: number, likes?: number): Promise<Buffer>;
wanted(avatar: string): Promise<Buffer>;

// Image Manipulation
blur(url: string): Promise<Buffer>;
colorify(url: string, color: string): Promise<Buffer>;
grayscale(url: string): Promise<Buffer>;
invert(url: string): Promise<Buffer>;
rotate(url: string, deg: number): Promise<Buffer>;

// Meme Creation
changeMyMind(text: string): Promise<Buffer>;
didYouMean(search: string, correction: string): Promise<Buffer>;
drake(top: string, bottom: string): Promise<Buffer>;
duolingo(text: string): Promise<Buffer>;
facts(text: string): Promise<Buffer>;
fuze3(text: string): Promise<Buffer>;
hugo(text: string): Promise<Buffer>;
nothing(text: string): Promise<Buffer>;
oogway(text: string): Promise<Buffer>;
pepeHug(avatar: string): Promise<Buffer>;
sadcat(top: string, bottom: string): Promise<Buffer>;
stonks(avatar: string, stonks?: boolean): Promise<Buffer>;
tableFlip(avatar: string): Promise<Buffer>;
water(text: string): Promise<Buffer>;
woosh(avatar: string): Promise<Buffer>;

// Cards
boost(avatar: string, username: string, text?: string): Promise<Buffer>;
couple(avatar1: string, avatar2: string, percentage?: number, primary_color?: string): Promise<Buffer>;
rank(avatar: string, global_name: string, username: string, level: number, xp: number, max_xp: number, rank?: number, bg_url?: string, bg_color?: string, blur?: boolean, color?: string): Promise<Buffer>;
welcome(avatar: string, text1: string, text2?: string, text3?: string, bg_url?: string, bg_color?: string, font_color?: string, blur?: boolean, avatar_border?: boolean, avatar_border_color?: string): Promise<Buffer>;
```

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://discord.gg/8PDXWSHH7k).
