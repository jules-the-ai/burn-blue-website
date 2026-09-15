export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.burn.blue") {
    url.hostname = "burn.blue";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
