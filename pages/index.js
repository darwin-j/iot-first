import { db } from "../firebase";
import { ref, set } from "firebase/database";
export default function Home() {
  const database = db;

  return (
    <div>
      <button
        onClick={() => {
          set(ref(database, "led"), {
            state: true,
          });
        }}
      >
        on
      </button>
      <button
        onClick={() => {
          set(ref(database, "led"), {
            state: false,
          });
        }}
      >
        off
      </button>
    </div>
  );
}
