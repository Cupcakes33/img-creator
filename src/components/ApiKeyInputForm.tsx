import React from "react";

type Props = {
  setApiKey: (apiKey: string) => void;
};

export default function ApiKeyInputForm({ setApiKey }: Props) {
  const [form, setForm] = React.useState({
    apiKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, apiKey: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("apiKey", form.apiKey);
    setApiKey(form.apiKey);
  };

  return (
    <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-[3] p-2 rounded-md border-2 border-gray-300"
        name="apiKey"
        value={form.apiKey}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="flex-1 p-2 rounded-md bg-blue-500 text-white"
      >
        저장
      </button>
    </form>
  );
}
