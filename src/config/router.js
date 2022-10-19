import indexRouter from '@/routes/index';
import todoRouter from '@/routes/todo.router';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/', todoRouter);
}
