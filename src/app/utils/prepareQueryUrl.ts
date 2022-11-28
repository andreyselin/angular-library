export function prepareQueryUrl(basicPath: string, params: Record<string, string | number | undefined>): string {
  const querySubString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${basicPath}?${querySubString}`;
}
