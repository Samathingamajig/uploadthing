import { createNextRouteHandler } from 'uploadthing/next';

import { uploadRouter } from '~/server/uploadthing.ts';

export const runtime = 'edge';

export const { GET, POST } = createNextRouteHandler({
  router: uploadRouter,
});
