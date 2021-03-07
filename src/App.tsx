import "./styles.css";
import { VirtualizedPage } from "./VirtualizedPage";

const images = [
  "https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640",
  "https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640",
  "https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640",
];
export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 200, height: 200 }}>
        <VirtualizedPage>
          {({ index }) => {
            const modulo = index % images.length;
            const imageIndex = modulo < 0 ? images.length + modulo : modulo;
            return (
              <img
                alt="Mountain"
                style={{ height: "100%", width: "100%" }}
                src={images[imageIndex]}
              />
            );
          }}
        </VirtualizedPage>
      </div>
    </div>
  );
}
