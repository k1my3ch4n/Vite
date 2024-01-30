import { Params } from 'react-router';

export const replaceParam = ({ path, params }: { path?: string; params: Params }) => {
  Object.keys(params).forEach((param) => {
    path = path?.replace(`:${param}`, params[param] ?? '');
  });

  return path ?? '';
};
