export default function Section({ title, children }) {
  return (
    <>
      <h2 className="p-4 pb-0 font-aria text-4xl">{title}</h2>
      <div className="p-4 text-base">{children}</div>
    </>
  );
}
