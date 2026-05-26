function App() {
  return (
    <main className="max-w-xl mx-auto px-4 py-10 flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">Video capture</h1>
        <p className="text-gray-600 leading-relaxed">
          Click the button to allow camera access. A photo will be taken
          automatically after a few seconds.
        </p>
        <button className="self-start px-5 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors cursor-pointer">
          Start
        </button>
      </section>
    </main>
  );
}

export default App;
