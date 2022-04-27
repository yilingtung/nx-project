export const pagePathParser = (pathname: string) => {
  if (pathname.match(/^\/$/)) {
    return 'HOME';
  }
  if (pathname.match(/^\/posts$/)) {
    return 'POSTS';
  }
  if (pathname.match(/^\/posts\/([^\\/]+)$/)) {
    return 'POST';
  }
  return 'NOT_FOUND';
};
