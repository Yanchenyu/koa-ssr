const home = async (ctx, next) => {
    ctx.context = {
        name: 'home'
    };
    await next();
};

const list = async (ctx, next) => {
    ctx.context = {
        name: 'list'
    };
    await next();
};

export default {
    home,
    list
};
