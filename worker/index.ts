/*
 * Copyright (c) Zensical LLC <https://zensical.org>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Environment
 */
interface Env {
  ASSETS: any;
}

/* ----------------------------------------------------------------------------
 * Worker
 * ------------------------------------------------------------------------- */

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    // Strip docs prefix for asset fetching
    const pathname = url.pathname.replace(/^\/docs/, '')
    const res = await env.ASSETS.fetch(`${url.origin}${pathname || "/"}`)
    if (res.status === 404) {
      const notfound = await env.ASSETS.fetch(`${url.origin}/404`, req)

      // Return the 404.html content with a 404 status code
      if (notfound.ok) {
        return new Response(await notfound.text(), {
          status: 404,
          headers: { "Content-Type": "text/html" },
        });
      }
    } else {
      const type = res.headers.get("Content-Type") || "";

      // Redirect to path with trailing slash for HTML content
      if (type.includes("text/html")) {
        const url = new URL(req.url);
        if (!url.pathname.endsWith("/")) {
          url.pathname += "/";
          return Response.redirect(url, 301);
        }
      }

      // Set cache headers for static assets
      if (
        type.includes("text/css") ||
        type.includes("text/javascript") ||
        type.includes("application/json") ||
        type.includes("image/")
      ) {
        const response = new Response(res.body, res);
        response.headers.set(
          "Cache-Control",
          "public, max-age=3600, stale-while-revalidate=86400"
        )
        return response
      }
    }
    return res
  }
}
