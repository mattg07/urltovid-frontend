function App() {
  return (
    <>
      <main className="max-w-3xl mx-auto flex px-4 ">
        <div className="py-8 flex flex-col">
          <h1 className="text-4xl font-bold uppercase mb-6">
            URL to Video
            <br />
            with power of AI
          </h1>
          <p className="pb-6">
            Convert any URL into a captivating video with the power of AI. Our
            tool automatically analyzes and transforms your web content into
            dynamic videos, making it easier to share and engage your audience.
          </p>
          <form className="white border-2 rounded-full flex overflow-hidden">
            <input
              className="bg-transparent text- px-4 py-2 grow "
              type="url"
              placeholder="https..."
            />
            <button className="bg-emerald-400 text-black px-2" type="submit">
              Create video
            </button>
          </form>
        </div>
        <div className="p-8">
          <div className="bg-gray-200 w-[240px] h-[380px]">right</div>
        </div>
      </main>
    </>
  );
}

export default App;
