import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "About.html"),
        announcements: resolve(__dirname, "announcements.html"),
        contact: resolve(__dirname, "contact.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        events: resolve(__dirname, "events.html"),
        login: resolve(__dirname, "login.html"),
        resources: resolve(__dirname, "resources.html"),
        signup: resolve(__dirname, "signup.html"),
        timetable: resolve(__dirname, "timetable.html")
      }
    }
  }
});
