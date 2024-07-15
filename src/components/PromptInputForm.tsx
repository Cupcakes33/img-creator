import React from "react";

type props = {
  prompt: string;
  setPrompt: (prompt: string) => void;
};

export default function PromptInputForm({ prompt, setPrompt }: props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api 요청을 여기서 ?
  };

  return (
    <form className="flex gap-2 mt-4 w-[50dvw]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        value={prompt}
        onChange={handleChange}
        className="flex-1 p-2 rounded-md border-2 border-gray-3000"
      />
      <button
        type="submit"
        className="w-20 p-2 rounded-md bg-blue-500 text-white"
      >
        Create
      </button>
    </form>
  );
}
