import Cv from "./Cv";
import '../input.css';

export default function OnlyCV() {
  return (
    <div>
      <main style={{ backgroundColor: "gray", padding: "30px 10px" }}>
        <div
          className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8"
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <Cv />
        </div>
      </main>
    </div>
  );
}
