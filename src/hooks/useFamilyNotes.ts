export function useFamilyNotes() {
  const key = "family-notes-enabled";
  const enabled = localStorage.getItem(key) === "true";

  const toggle = () => {
    localStorage.setItem(key, (!enabled).toString());
    window.location.reload();
  };

  return { enabled, toggle };
}
