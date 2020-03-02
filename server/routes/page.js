import Router from 'koa-router';
import page from '../controllers/page';

const router = new Router();

router.get('/home', page.home);
router.get('/list', page.list);

export default router;
