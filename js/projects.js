// Project list for the Work section on the home page.
//
// To add a project type: add an entry to PROJECT_TYPES. It appears as a
// filter button once at least one project uses it.
// To add a project: add an entry to PROJECTS and create its detail page
// (copy an existing *Details.html page as a starting point).
//
// status.state controls the dot: "live" (filled), "dev" (half), "done" (outline).

window.PROJECT_TYPES = [
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "game", label: "Games" },
  { id: "ai", label: "AI & automation" },
  { id: "data", label: "Data" },
];

window.PROJECTS = [
  {
    title: "ELibrary",
    type: "web",
    summary: "Online library with user accounts, book borrowing and admin tools.",
    stack: ["ASP.NET MVC", "C#", "SQL Server"],
    image: "./images/Elibrary_sample.jpg",
    imageAlt: "ELibrary home page",
    url: "./ELibraryDetails.html",
  },
  {
    title: "AI agents & automation",
    type: "ai",
    summary: "n8n workflows, a RAG system and a machine learning tumor detector.",
    stack: ["n8n", "Ollama", "Python"],
    image: "./images/AI-agent.jpg",
    imageAlt: "Illustration of an AI agent",
    url: "./n8nProjectsDetails.html",
  },
  {
    title: "Ya Zalame Drive!",
    type: "game",
    summary: "Endless driving game set on chaotic Lebanese roads.",
    stack: ["Unity", "C#", "Android"],
    status: { label: "On Google Play", state: "live" },
    image: "./images/LoadingBackground.png",
    imageAlt: "Ya Zalame Drive! loading screen",
    url: "./YaZalameDriveDetails.html",
  },
  {
    title: "Watchable",
    type: "mobile",
    summary: "Discover movies and TV shows and track what to watch next.",
    stack: ["React Native", "Expo", "TMDB API"],
    status: { label: "Prototype complete", state: "dev" },
    image: "./images/watchable.jpg",
    imageAlt: "Watchable app artwork",
    url: "./WatchableDetails.html",
  },
  {
    title: "Data engineering & reporting",
    type: "data",
    summary: "Power BI reports, with data engineering projects coming soon.",
    stack: ["Power BI"],
    image: "./images/Reporting.jpg",
    imageAlt: "Illustration of people reviewing charts and reports",
    url: "./DataProjectsDetails.html",
  },
];
