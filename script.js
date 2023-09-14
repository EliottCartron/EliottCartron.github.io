// Affichage sections
document.addEventListener("DOMContentLoaded", async function () {
  const javaSection = createSection(".comp-title-java", ".hover-comp-java");
  const angularSection = createSection(".comp-title-angular", ".hover-comp-angular");
  const pgSection = createSection(".comp-title-pg", ".hover-comp-pg");
  const gitSection = createSection(".comp-title-git", ".hover-comp-git");
  const idqSection = createSection(".comp-title-idq", ".hover-comp-idq");
  const ssgSection = createSection(".exp-title-items", ".hover-exp-title-items");
  const devSection = createSection(".exp-item-dev", ".hover-exp-dev");
  const rddSection = createSection(".exp-item-rdd", ".hover-exp-rdd");
  const foncSection = createSection(".exp-item-fonc", ".hover-exp-fonc");
  const gestionSection = createSection(".exp-item-gestion", ".hover-exp-gestion");

  javaSection.init();
  angularSection.init();
  pgSection.init();
  gitSection.init();
  idqSection.init();
  ssgSection.init();
  devSection.init();
  rddSection.init();
  foncSection.init();
  gestionSection.init();

  function createSection(titleSelector, contentSelector) {
    const compTitle = document.querySelector(titleSelector);
    const content = document.querySelector(contentSelector);

    // Contenu texte
    const contentFileName = compTitle.getAttribute('data-content');

    async function fetchContent() {
      try {
        const response = await fetch(contentFileName);
        const contentText = await response.text();
        content.textContent = contentText;
      } catch (error) {
        console.error('Erreur : impossible de récupérer le contenu ', error);
      }
    }

    function toggleSection() {
      // Affichage progressif
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        setTimeout(() => {
          content.style.display = null;
        }, 400);
      } else {
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + "px";
      }

      // Défilement jusqu'à la section
      if (content.style.maxHeight) {
        content.scrollIntoView({ behavior: "smooth" });
      }
    }

    return {
      init: function () {
        fetchContent();
        compTitle.addEventListener("click", toggleSection);
      },
    };
  }
});

// Thème
const themeSwitcher = {
  // Config
  _scheme: "auto",
  menuTarget: "details[role='list']",
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",
  localStorageKey: "picoPreferredColorScheme",

  // Init
  init() {
    this.scheme = this.schemeFromLocalStorage;
    this.initSwitchers();
  },

  // Get color scheme from local storage
  get schemeFromLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      if (window.localStorage.getItem(this.localStorageKey) !== null) {
        return window.localStorage.getItem(this.localStorageKey);
      }
    }
    return this._scheme;
  },

  // Preferred color scheme
  get preferredColorScheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  },

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // Set scheme
          this.scheme = button.getAttribute(this.buttonAttribute);
          // Close dropdown
          document.querySelector(this.menuTarget).removeAttribute("open");
        },
        false
      );
    });
  },

  // Set scheme
  set scheme(scheme) {
    if (scheme == "auto") {
      this.preferredColorScheme == "dark" ? (this._scheme = "dark") : (this._scheme = "light");
    } else if (scheme == "dark" || scheme == "light") {
      this._scheme = scheme;
    }
    this.applyScheme();
    this.schemeToLocalStorage();
  },

  // Get scheme
  get scheme() {
    return this._scheme;
  },

  // Apply scheme
  applyScheme() {
    document.querySelector("html").setAttribute(this.rootAttribute, this.scheme);
  },

  // Store scheme to local storage
  schemeToLocalStorage() {
    if (typeof window.localStorage !== "undefined") {
      window.localStorage.setItem(this.localStorageKey, this.scheme);
    }
  },
};
themeSwitcher.init();
