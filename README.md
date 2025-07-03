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
- [Module documentation](https://docs.sodiumlabs.xyz/plume-api.js)
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

# Documentation

Plume API provides two main resources for documentation:

- **API Reference:**  
   [Plume API Documentation](https://plume.sodiumlabs.xyz/docs)  
   This documentation covers all available endpoints, types, and detailed comments for the API.

- **Module Reference:**  
   [Module Documentation](https://docs.sodiumlabs.xyz/plume-api.js)  
   This documentation explains how to use the `@sodiumlabs/plume-api` npm package, with all available methods and types.

For most use cases, you'll want to refer to the [`PlumeAPI` class page](https://docs.sodiumlabs.xyz/plume-api.js/classes/PlumeAPI), which lists all available methods for interacting with the API through this module.

# Help

If you don't understand something in the documentation, are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [Discord Server](https://discord.gg/8PDXWSHH7k).
