export default function CreateChannelPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-xl bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <h1 className="text-4xl font-black mb-2">
          Create Your Channel
        </h1>

        <p className="text-zinc-400 mb-8">
          Create your creator identity to continue.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Channel name"
            className="w-full bg-zinc-800 rounded-xl h-12 px-4"
          />

          <textarea
            placeholder="Channel description"
            className="w-full bg-zinc-800 rounded-xl p-4 min-h-30"
          />

          <input
            type="text"
            placeholder="Channel banner"
            className="w-full bg-zinc-800 rounded-xl h-12 px-4"
          />

          <input
            type="text"
            placeholder="Channel avatar"
            className="w-full bg-zinc-800 rounded-xl h-12 px-4"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 h-12 rounded-xl font-semibold"
          >
            Create Channel
          </button>
        </form>
      </div>
    </div>
  );
}