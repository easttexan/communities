import Logo from "./logo";

export default function Layout({ children }) {
  return (
    <>
      <div className="max-w-prose m-auto">
        <Logo />

        {children}
      </div>
    </>
  );
}
