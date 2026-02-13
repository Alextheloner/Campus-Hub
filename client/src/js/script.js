// dark theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const token = localStorage.getItem("campusHubToken");

  const userEmail = document.querySelector('.user-email');

  // Fetch and display user email
  async function fetchUserData() {
    if (!token) return;
    
    try {
      const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;
      console.log('Fetching user data from:', `${API_URL}/dashboard`);
      console.log('Token:', token ? 'exists' : 'missing');
      
      const res = await fetch(`${API_URL}/dashboard`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      console.log('Response status:', res.status);
      
      if (!res.ok) {
        const errorData = await res.json();
        console.error('API Error:', errorData);
        throw new Error("Failed to fetch user data");
      }

      const data = await res.json();
      console.log('User data received:', data);
      
      // Display user email if element exists
      if (userEmail && data.user && data.user.email) {
        console.log('Setting email to:', data.user.email);
        userEmail.innerHTML = data.user.email;
      } else {
        console.log('userEmail element:', userEmail);
        console.log('data.user:', data.user);
      }
      
      // Store user data in a global variable if needed elsewhere
      window.currentUser = data.user;
      
    } catch (err) {
      console.error("Error fetching user data:", err);
      // Don't redirect on error, just log it for now
      // localStorage.removeItem("campusHubToken");
      // window.location.href = "/login.html";
    }
  }

  // Call the function to fetch user data
  if (token) {
    fetchUserData();
  }

  function updateIcons() {
    if (html.classList.contains("dark")) {
      darkIcon.style.display = "flex";
      darkIcon.textContent = "dark_mode";
      lightIcon.style.display = "none";
    } else {
      lightIcon.textContent = "light_mode";
      lightIcon.style.display = "flex";
      darkIcon.style.display = "none";
    }
  }

  function getPreferredTheme() {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Set the initial theme
  const preferredTheme = getPreferredTheme();
  if (preferredTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  updateIcons();

  themeToggle.addEventListener("click", function () {
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );
    updateIcons();
  });
});

// Signup button redirect
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
  signupBtn.onclick = function () {
    window.location.href = "/signup.html"; // or './signup.html' depending on your folder
  };
}
// Login button redirect
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.onclick = function () {
    window.location.href = "/login.html"; // or './login.html'
  };
}

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("campusHubToken");
    window.location.href = "/login.html";
  });
}

// Mobile menu toggle (public pages: index, About, contact)
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    if (isOpen) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex");
    } else {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    }
    // Swap hamburger icon to close icon
    const icon = menuToggle.querySelector(".material-symbols-outlined");
    if (icon) {
      icon.textContent = isOpen ? "menu" : "close";
    }
  });
}

// Mobile sidebar toggle (dashboard pages)
const sidebarToggle = document.getElementById("sidebar-toggle");
const mobileSidebarOverlay = document.getElementById("mobile-sidebar-overlay");
const mobileSidebarBackdrop = document.getElementById("mobile-sidebar-backdrop");
const mobileSidebarClose = document.getElementById("mobile-sidebar-close");

function openMobileSidebar() {
  if (mobileSidebarOverlay) {
    mobileSidebarOverlay.classList.remove("hidden");
    sidebarToggle.classList.toggle("hidden")
  }
}

function closeMobileSidebar() {
  if (mobileSidebarOverlay) {
    mobileSidebarOverlay.classList.add("hidden");
    sidebarToggle.classList.toggle("hidden");
  }
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", openMobileSidebar);
}
// if (mobileSidebarBackdrop) {
//   mobileSidebarBackdrop.addEventListener("click", closeMobileSidebar);
// }
if (mobileSidebarClose) {
  mobileSidebarClose.addEventListener("click", closeMobileSidebar);
}