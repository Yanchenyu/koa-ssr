class BasicService {
    constructor() {
        this.instance;
    }
    static getInstance() {
        if (!BasicService.instance) {
            BasicService.instance = new BasicService();
        }
        return BasicService.instance
    }
    init() {
        return Promise.all([
            // 这里初始化一些企业级服务，比如国际化站点的shark, cargo, ares等
        ]);
    }
}

export const basicService = BasicService.getInstance();
