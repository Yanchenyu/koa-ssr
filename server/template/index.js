import path from 'path';
import nunjucks from 'koa-nunjucks-2';

class Template {
    constructor() {
        this.instance;
    }
    static getInstance() {
        if (!Template.instance) {
            Template.instance = new Template();
        }
        return Template.instance;
    }
    init(app) {
        app.use(nunjucks({
            ext: 'njk',
            path: path.resolve(__dirname, 'views'),
            nunjucksConfig: {
                trimBlocks: true
            }
        }));
    }
}

export const template = Template.getInstance();
