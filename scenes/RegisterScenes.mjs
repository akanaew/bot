import {Markup, Scenes} from 'telegraf';

const RegisterScenes = new Scenes.BaseScene('register-scene');

const CategoryKeyboard = Markup.inlineKeyboard([
    Markup.button.callback('Выбрать категорию', 'change_category')
])

RegisterScenes.enter(async (ctx) => {
    await ctx.reply('Для начала тебе необходимо выбрать категорию в которой ты хочешь получать свыежие заказы 24/7', CategoryKeyboard);
});

RegisterScenes.hears('change_category', async (ctx) => {
    await ctx.reply('Hello');
});

export default RegisterScenes;
