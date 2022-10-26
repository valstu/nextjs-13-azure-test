async function getData(id: string) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  // console.log(props);
  const data = await getData(params.id);

  return (
    <p>
      <h1>Hello, Next.js!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </p>
  );
}
