export default async function AsyncCounter() {

  // Random number between 2 and 6
  const random = Math.floor(Math.random() * 5) + 2;
  await new Promise(resolve => setTimeout(resolve, random * 1000));

  const now = Date.now();

  return <div>{now}</div>

}