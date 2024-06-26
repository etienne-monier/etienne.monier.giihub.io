import { ref, computed } from "vue";
import { useTheme as useVuetifyTheme } from "vuetify";

export function useTheme() {
  const theme = useVuetifyTheme();
  // theme.global.name.value = getCookie().theme;

  function toggleTheme() {
    // Get new theme name
    const themeName = theme.global.name.value === "lightTheme" ? "darkTheme" : "lightTheme";
    // Change theme
    theme.global.name.value = themeName;
    // Update cookies
    // const cookie = getCookie();
    // cookie.theme = themeName;
    // setCookie(cookie);
  }

  const dark = computed(() => theme.global.current.value.dark);

  return { theme, toggleTheme, dark };
}
