function HelloWorld({ count, hello }: { count: number; hello: string }) {
  return (
    <>
      <h1>
        {count % 2 == 0 ? hello : 'Hello World'} {count}
      </h1>
      <p>Coba Hello World</p>
    </>
  );
}

export default HelloWorld;
