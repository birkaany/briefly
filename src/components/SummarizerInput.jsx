const SummarizerInput = () => {
  return (
    <div className="w-full max-w-xl space-y-2 mx-auto ">
      <div className="container">
        <form className="flex space-x-2 bg-gray-800 overflow-hidden rounded-full">
          <input
            className="max-w-lg flex-1 bg-transparent outline-none text-white border-gray-900 px-6 py-3"
            placeholder="Enter URL"
            type="url"
          />
          <button
            className="bg-white text-black h-full px-6 py-3 rounde"
            type="submit"
          >
            ⏎
          </button>
        </form>
      </div>
    </div>
  );
};

export default SummarizerInput;
