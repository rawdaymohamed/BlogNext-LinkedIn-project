export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>BlogNext</h1>
      <hr/>
      <div>{children}</div>
    </>
  );
}
