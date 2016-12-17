export default async function resolve(renderProps) {
  const { components, params } = renderProps;
  const valid = components.filter((component) => component);
  if (!valid) return null;
  const withFunction = valid.filter((component) => component.getInitialProps);
  if (!withFunction[0] || !withFunction[0].getInitialProps) return null;
  // Return the first one found
  return await withFunction[0].getInitialProps(params);
}