self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/start/index.html",
        "/start/starting.css",
        "/start/script2.js",
        "/manifest.json",
        "/start/icon-192.png",
        "/start/icon-512.png",

        // Authentication
        "/Authentication/student/signinStudent.html",
        "/Authentication/student/signinStudent.css",
        "/Authentication/student/signinStudent.js",
        "/Authentication/teacher/signinTeacher.html",
        "/Authentication/teacher/signinTeacher.css",

        // Home
        "/sidenav/home/homePage.html",
        "/sidenav/home/homePage.css",
        "/sidenav/home/homePage.js",
        "/sidenav/home/allstandards.html",

        // Progress
        "/sidenav/progress/progress.html",

        // Setting
        "/sidenav/setting/settings.html",

        // Subjects
        "/sidenav/subject/subjects.html",
        "/sidenav/subject/subjects.css",

        // Images
        "/assets/CHSE-Odisha-logo.jpg",
        "/assets/gamified-education.jpg",
        "/assets/Govt_odisha.png",
        "/assets/jagannath-rath-yatra.jpg",
        "/assets/odisha seconader board.jpg",
        "/assets/sambalpur.jpeg",
        "/assets/Shri-Jagannath-Temple.jpg",
        "/assets/starting_background.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
