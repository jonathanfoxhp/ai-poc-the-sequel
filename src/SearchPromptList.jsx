import AIPromptButton from "./components/AIPromptButton";

function SearchPromptList() {
  return (
    <div className="gap-2 flex items-start w-full">
      <AIPromptButton label="how do I upgrade my PC?" />
      <AIPromptButton label="how do I speed up my games?" />
      <AIPromptButton label="how do I replace my PC?" />
    </div>
  );
}

export default SearchPromptList;
