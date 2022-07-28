import {Scenes, session, Telegraf} from "telegraf";
import dotenv from "dotenv";
import ClientsService from "./core/servies/clients.service.mjs";
import RegisterScenes from "./scenes/RegisterScenes.mjs";

dotenv.config();

const TOKEN = process.env.BOT_TOKEN
const bot = new Telegraf(TOKEN);
const clientsService = new ClientsService();

const stage = new Scenes.Stage([RegisterScenes]);

bot.use(session());
bot.use(stage.middleware());

bot.start(async ctx => {
    const user_id = ctx.update.message.from.id;
    const user = await clientsService.checkClient(user_id);
    if (user) {
        ctx.reply('Существует');
        return 0;
    }

    await ctx.scene.enter('register-scene')
});

(async () => {
    await bot.launch()
})()
