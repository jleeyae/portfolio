export function useConversationMode() {
  const key = "conversation-mode";
  const enabled = localStorage.getItem(key) === "true";

  const toggle = () => {
    localStorage.setItem(key, (!enabled).toString());
    window.location.reload();
  };

  return { enabled, toggle };
}
