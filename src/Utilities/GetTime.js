export const GetTime = async () => {
  const start = Date.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  const end = Date.now();
  return {data, start, end};
};
