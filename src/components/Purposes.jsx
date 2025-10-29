export function Purposes({ title, paragraph }) {
  return (
    <section className="purposes-block">
      <h3 className="purposes-title">{title}</h3>
      <div className="purposes-text">
        {paragraph.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  );
}
