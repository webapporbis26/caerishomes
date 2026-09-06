export function splitChars(text: string) {
  return text.split(" ").map((word, wordIndex, wordsArray) => (
    <span key={wordIndex} style={{ display: "inline-block" }}>
      <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {word.split("").map((c, i) => (
          <span key={i} className="split-char" style={{ display: "inline-block" }}>
            {c}
          </span>
        ))}
      </span>
      {wordIndex !== wordsArray.length - 1 && " "}
    </span>
  ));
}
