import { useEffect, useState } from "react";

const KEY = "pp.conversationMode";

export function useConversationMode() {
  const [enabled, setEnabled] = useState<boolean>(() => localStorage.getItem(KEY) === "1");

  useEffect(() => {
    localStorage.setItem(KEY, enabled ? "1" : "0");
  }, [enabled]);

  const toggle = () => setEnabled((v) => !v);

  return { enabled, toggle };
}
