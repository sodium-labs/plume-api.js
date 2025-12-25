export type ExecLanguage =
    | "javascript"
    | "typescript"
    | "python"
    | "cpp"
    | "go"
    | "rust"
    | "java"
    | "shell"
    | "php"
    | "ruby"
    | "lua"
    | "elixir"
    | "zig"
    | "postgres"
    | "mysql"
    | "sqlite";

export type InteractionType =
    | "bite"
    | "blush"
    | "cry"
    | "hug"
    | "kiss"
    | "lick"
    | "pat"
    | "poke"
    | "slap"
    | "smile"
    | "tickle";

export type AsciiFont = "standard" | "isometric" | "3d" | "letters";

export type DecodeType = "base64" | "binary" | "hex" | "morse" | "unicode";

export interface DecodeData {
    decoded: string;
}

export type EncodeType = "base64" | "binary" | "hex" | "morse" | "unicode";

export interface EncodeData {
    encoded: string;
}

export interface EightBallData {
    answer: string;
}

/**
 * @deprecated Use `EightBallData` instead
 */
export interface HeightBallData {
    answer: string;
}

export interface EmojiMixData {
    emoji_url: string;
}

export interface FunFactData {
    text: string;
    source_url: string;
    language: string;
}

export interface JokeData {
    question: string;
    answer: string;
}

export interface MathData {
    result: string | null;
}

export interface MemeData {
    title: string;
    downvotes: number;
    upvotes: number;
    url: string;
    image_url: string;
    comments: number;
    author: string;
}

export interface NasaAPOD {
    date: string;
    title: string;
    url: string;
    hd_url?: string;
    media_type: string;
    explanation: string;
    page_url: string;
}

export interface NPMData {
    name: string;
    description: string;
    version: string;
    keywords: string[];
    author_username: string;
    author_email: string;
    repository_url?: string;
    npm_url: string;
    dependents: number;
    search_score: number;
    downloads_monthly: number;
    downloads_weekly: number;
    last_published_date: string;
    last_published: number;
}

export interface QuoteData {
    quote: string;
    author: string;
}

export interface RandomEmojiMixData {
    emoji_url: string;
}

export interface UpsideDownTextData {
    text: string;
}

export interface UrbanData {
    word: string;
    url: string;
    definition: string;
    example: string;
    author: string;
    thumbs_up: number;
    thumbs_down: number;
}

export interface GitHubRepository {
    name: string;
    full_name: string;
    description: string;
    url: string;
    owner_username: string;
    owner_avatar_url: string;
    language?: string;
    license_name?: string;
    disabled?: boolean;
    archived?: boolean;
    fork?: boolean;
    created_at_date?: string;
    created_at?: number;
    updated_at_date?: string;
    updated_at?: number;
    stargazers_count?: number;
    forks_count?: number;
    open_issues_count?: number;
}

export interface GitHubUser {
    id: number;
    username: string;
    avatar_url: string;
    page_url: string;
    followers_page_url: string;
    following_page_url: string;
    stars_page_url: string;
    repos_page_url: string;
    is_admin: boolean;
}

export interface CryptoData {
    name: string;
    currency: string;
    price: number;
    market_cap: number;
    volume_24h: number;
    change_24h: number;
}

export interface DefinitionData {
    word: string;
    phonetic?: string;
    definitions: {
        part_of_speech: string;
        definitions: {
            definition: string;
            example?: string;
        }[];
        synonyms: string[];
        antonyms: string[];
    }[];
}

export interface ExecData {
    success: boolean;
    timeout: boolean;
    duration: number;
    stdout: string | null;
    stderr: string | null;
}

export interface FreeGamesData {
    games: {
        store: string;
        id: string;
        title: string;
        description: string;
        image?: string;
        original_price: number;
        currency: string;
        free_until: number;
    }[];
}

export interface IPInfoData {
    ip: string;
    city: string;
    region: string;
    country: string;
    latitude: number;
    longitude: number;
    postal: string;
    timezone: string;
}

export interface ISSData {
    latitude: number;
    longitude: number;
    altitude: number;
    timestamp: number;
    velocity: number;
}

export interface ReverseTextData {
    text: string;
}

export interface TranslateData {
    text: string;
}

export interface WeatherData {
    city_name: string;
    full_city_name: string;
    latitude: number;
    longitude: number;
    temperature: number;
    humidity: number;
    wind_speed: number;
    hourly: {
        time: number[];
        temperature_2m: number[];
        relative_humidity_2m: number[];
        wind_speed_10m: number[];
    };
}

export interface WikipediaData {
    title: string;
    page_id: number;
    thumbnail: {
        source: string;
        width: number;
        height: number;
    };
    original_image: {
        source: string;
        width: number;
        height: number;
    };
    lang: string;
    description: string;
    content_urls: {
        desktop: {
            page: string;
            revisions: string;
            edit: string;
            talk: string;
        };
        mobile: {
            page: string;
            revisions: string;
            edit: string;
            talk: string;
        };
    };
    extract: string;
}

export interface InteractionData {
    url: string;
}

export interface AdviceData {
    advice: string;
}

export interface AgifyData {
    age: number;
    name: string;
    count: number;
}

export interface AsciiData {
    text: string;
}

export interface EmojifyData {
    text: string;
}

export interface UUIDData {
    uuid: string;
}

export interface FortniteMapData {
    images: {
        map: string;
        map_with_pois: string;
    };
    pois: {
        id: string;
        name: string;
        location: {
            x: number;
            y: number;
            z: number;
        };
    }[];
}

export interface MinecraftIDData {
    id: string;
    name: string;
}

export interface MinecraftNameData {
    id: string;
    name: string;
}

export interface MinecraftSkinData {
    id: string;
    name: string;
    skin_url: string;
    cape_url: string;
    avatar_url: string;
    body_url: string;
}

export interface RobloxIDData {
    id: number;
    name: string;
}

export interface RobloxUserAvatarAssetData {
    id: number;
    name: string;
    type_id: number;
    type_name: string;
}

export type RobloxUserAvatarType = "R6" | "R15";

export interface RobloxUserData {
    id: number;
    name: string;
    display_name: string;
    description: string | null;
    created_at: number;
    is_banned: boolean;
    has_verified_badge: boolean;
    friend_count: number;
    thumbnail_url: string | null;
    avatar_type: RobloxUserAvatarType;
    avatar_assets: RobloxUserAvatarAssetData[];
}

export interface MinecraftLatestVersions {
    release: string;
    snapshot: string;
}

export type MinecraftVersionType = "release" | "snapshot" | "old_beta" | "old_alpha";

export interface MinecraftVersion {
    id: string;
    type: MinecraftVersionType;
    url: string;
    update_time: number;
    release_time: number;
    sha1: string;
    compliance_level: 0 | 1;
}

export interface MinecraftVersions {
    latest: MinecraftLatestVersions;
    versions: MinecraftVersion[];
}

export type MinecraftBedrockServerEdition = "MCPE" | "MCEE";

export interface MinecraftBedrockServerVersion {
    name: string | null;
    protocol: number | null;
}

export interface MinecraftBedrockServerPlayers {
    online: number | null;
    max: number | null;
}

export interface MinecraftBedrockServerMotd {
    raw: string;
    clean: string;
}

export interface MinecraftBedrockServerStatus {
    host: string;
    port: number;
    ip_address: string | null;
    eula_blocked: boolean;
    updated_at: number;
    version: MinecraftBedrockServerVersion;
    players: MinecraftBedrockServerPlayers;
    motd: MinecraftBedrockServerMotd;
    gamemode: string | null;
    edition: MinecraftBedrockServerEdition | null;
}

export interface MinecraftJavaServerVersion {
    name_raw: string;
    name_clean: string;
    protocol: number;
}

export interface MinecraftJavaServerPlayers {
    online: number;
    max: number;
}

export interface MinecraftJavaServerMotd {
    raw: string;
    clean: string;
}

export interface MinecraftJavaServerStatus {
    host: string;
    port: number;
    ip_address: string | null;
    eula_blocked: boolean;
    updated_at: number;
    version: MinecraftJavaServerVersion;
    players: MinecraftJavaServerPlayers;
    motd: MinecraftJavaServerMotd;
    icon: string | null;
}

export interface PlusCodeData {
    code: string;
    length: number;
}

export type PlusCodeLength = 4 | 6 | 8 | 10 | 11 | 12 | 13 | 14 | 15;
