import { Router } from 'express';
export const appRouter = Router();
interface IOptions {
  path: string;
  method: 'get' | 'post' | 'put' | 'delete';
  middlewares?: any[];
}

const RoutesDecorator = (options: IOptions) => {
  return (target: any, propertyKey: string) =>
    (appRouter as any)[options.method](
      options.path,
      options.middlewares
        ? [...options.middlewares]
        : (req: any, res: any, next: any) => next(),
      target[propertyKey]
    );
};
export default RoutesDecorator;
