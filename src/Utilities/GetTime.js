export const GetTime = async (api) => {
  const start = Date.now();
  const res = await fetch(api);
  const data = await res.json();
  const end = Date.now();
  return {data, start, end};
};
