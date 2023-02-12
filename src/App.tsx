import VideoDownload from "./components/VideoDownload";

function App() {
  const abortController = new AbortController();

  console.log(abortController);

  return (
    <>
      <VideoDownload />
    </>
  );
}

export default App;
