import copy from "copy-to-clipboard"

export const copyContent = async (
  quote: { quote: string; author: string },
  setButtonText: React.Dispatch<React.SetStateAction<string>>,
) => {
  copy(`"${quote.quote}" - ${quote.author}`)
  setButtonText("Copied")
  setTimeout(() => {
    setButtonText("Copy")
  }, 1000)
}
