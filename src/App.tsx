import "./styles.css";
import { VirtualizedPage } from "./VirtualizedPage";

export default function App() {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ width: 200, height: 200 }}>
        <VirtualizedPage>
          {({ index }) => {
            return (
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: ["blue", "green", "yellow", "purple"][
                    Math.min(Math.abs(index), 2)
                  ]
                }}
              ></div>
            );
          }}
        </VirtualizedPage>
      </div>
    </div>
  );
}
