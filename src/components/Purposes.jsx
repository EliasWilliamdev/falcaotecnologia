export function Purposes({ title, paragraph }) {
  return (
    <div className="bg-green p-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>
        {paragraph.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
