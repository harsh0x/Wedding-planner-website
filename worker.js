export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      // Fetch static asset from frontend/dist
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // Fallback to index.html for Single Page Application client routing
        return await env.ASSETS.fetch(new URL('/', request.url));
      }
      return response;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
