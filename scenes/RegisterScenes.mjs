import {Markup, Scenes} from 'telegraf';
import CategoriesService from "../core/servies/categories.service.mjs";

const categoriesService = new CategoriesService();

const RegisterScenes = new Scenes.BaseScene('register-scene');

const CategoryKeyboard = Markup.inlineKeyboard([
    Markup.button.callback('Выбрать категорию', 'change_category')
])

RegisterScenes.enter(async (ctx) => {
    await ctx.reply('Для начала тебе необходимо выбрать категорию в которой ты хочешь получать свыежие заказы 24/7', CategoryKeyboard);
});

let category = '';

RegisterScenes.on('callback_query', async (ctx) => {
    if (ctx.update.callback_query.data === 'change_category') {
        const categories = await categoriesService.getCategories();
        let message = "";
        const buttons = [];
        let buttons_temp = [];

        categories.map((item, index) => {
            if (index % 2) {
                buttons_temp.push(Markup.button.callback(item.name, item.key))
                buttons.push(buttons_temp);
                buttons_temp = []
            } else {
                buttons_temp.push(Markup.button.callback(item.name, item.key))
            }
            message += `🟢 ${item.name} - ${item.description}\n\n`
        });

        await ctx.reply(message, Markup.inlineKeyboard(buttons));
    }
    else {

    }
});

export default RegisterScenes;
