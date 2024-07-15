import { useEffect, useState } from "react";
import ApiKeyInputForm from "./components/ApiKeyInputForm";
import PromptInputForm from "./components/PromptInputForm";

function App() {
  
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    setApiKey(localStorage.getItem("apiKey") || "");
  }, []);

  useEffect(() => {
    console.log(prompt);
  }, [prompt]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">AI Image Creator</h1>
        <p className="font-semibold text-gray-500">by Dall-E</p>
        {apiKey ? (
          <>
            <PromptInputForm prompt={prompt} setPrompt={setPrompt} />
          </>
        ) : (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p>본 페이지는 Open AI API-KEY 가 필요합니다.</p>
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              className="text-blue-500 hover:text-blue-600 mb-2"
            >
              Open AI API-KEY 발급하기
            </a>
            <ApiKeyInputForm setApiKey={setApiKey} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
