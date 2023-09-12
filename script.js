// JAVA
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleJava = document.querySelector(".comp-title-java");
  const contentJava = document.querySelector(".hover-comp-java");

  // Contenu texte
  const contentFileName = compTitleJava.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentJava.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleJava.addEventListener("click", function () {
    // Affichage progressif
    if (contentJava.style.maxHeight) {
      contentJava.style.maxHeight = null;
      setTimeout(() => {
        contentJava.style.display
          = null;
      }, "400");
    } else {
      contentJava.style.display = 'block';
      contentJava.style.maxHeight = contentJava.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentJava.style.maxHeight) {
      contentJava.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Angular
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleAngular = document.querySelector(".comp-title-angular");
  const contentAngular = document.querySelector(".hover-comp-angular");

  // Contenu texte
  const contentFileName = compTitleAngular.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentAngular.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleAngular.addEventListener("click", function () {
    // Affichage progressif
    if (contentAngular.style.maxHeight) {
      contentAngular.style.maxHeight = null;
      setTimeout(() => {
        contentAngular.style.display
          = null;
      }, "400");
    } else {
      contentAngular.style.display = 'block';
      contentAngular.style.maxHeight = contentAngular.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentAngular.style.maxHeight) {
      contentAngular.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// PostgreSQL
document.addEventListener("DOMContentLoaded", async function () {
  const compTitlePG = document.querySelector(".comp-title-pg");
  const contentPG = document.querySelector(".hover-comp-pg");

  // Contenu texte
  const contentFileName = compTitlePG.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentPG.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitlePG.addEventListener("click", function () {
    // Affichage progressif
    if (contentPG.style.maxHeight) {
      contentPG.style.maxHeight = null;
      setTimeout(() => {
        contentPG.style.display
          = null;
      }, "400");
    } else {
      contentPG.style.display = 'block';
      contentPG.style.maxHeight = contentPG.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentPG.style.maxHeight) {
      contentPG.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Git
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleGit = document.querySelector(".comp-title-git");
  const contentGit = document.querySelector(".hover-comp-git");

  // Contenu texte
  const contentFileName = compTitleGit.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentGit.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleGit.addEventListener("click", function () {
    // Affichage progressif
    if (contentGit.style.maxHeight) {
      contentGit.style.maxHeight = null;
      setTimeout(() => {
        contentGit.style.display
          = null;
      }, "400");
    } else {
      contentGit.style.display = 'block';
      contentGit.style.maxHeight = contentGit.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentGit.style.maxHeight) {
      contentGit.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// IDQ
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleIDQ = document.querySelector(".comp-title-idq");
  const contentIDQ = document.querySelector(".hover-comp-idq");

  // Contenu texte
  const contentFileName = compTitleIDQ.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentIDQ.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleIDQ.addEventListener("click", function () {
    // Affichage progressif
    if (contentIDQ.style.maxHeight) {
      contentIDQ.style.maxHeight = null;
      setTimeout(() => {
        contentIDQ.style.display
          = null;
      }, "400");
    } else {
      contentIDQ.style.display = 'block';
      contentIDQ.style.maxHeight = contentIDQ.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentIDQ.style.maxHeight) {
      contentIDQ.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// SSG 
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleSSG = document.querySelector(".exp-title-items");
  const contentSSG = document.querySelector(".hover-exp-title-items");

  // Contenu texte
  const contentFileName = compTitleSSG.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentSSG.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleSSG.addEventListener("click", function () {
    // Affichage progressif
    if (contentSSG.style.maxHeight) {
      contentSSG.style.maxHeight = null;
      setTimeout(() => {
        contentSSG.style.display
          = null;
      }, "400");
    } else {
      contentSSG.style.display = 'block';
      contentSSG.style.maxHeight = contentSSG.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentSSG.style.maxHeight) {
      contentSSG.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dév 
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleDev = document.querySelector(".exp-item-dev");
  const contentDev = document.querySelector(".hover-exp-dev");

  // Contenu texte
  const contentFileName = compTitleDev.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentDev.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleDev.addEventListener("click", function () {
    // Affichage progressif
    if (contentDev.style.maxHeight) {
      contentDev.style.maxHeight = null;
      setTimeout(() => {
        contentDev.style.display
          = null;
      }, "400");
    } else {
      contentDev.style.display = 'block';
      contentDev.style.maxHeight = contentDev.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentDev.style.maxHeight) {
      contentDev.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// RDD 
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleRDD = document.querySelector(".exp-item-rdd");
  const contentRDD = document.querySelector(".hover-exp-rdd");

  // Contenu texte
  const contentFileName = compTitleRDD.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentRDD.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleRDD.addEventListener("click", function () {
    // Affichage progressif
    if (contentRDD.style.maxHeight) {
      contentRDD.style.maxHeight = null;
      setTimeout(() => {
        contentRDD.style.display
          = null;
      }, "400");
    } else {
      contentRDD.style.display = 'block';
      contentRDD.style.maxHeight = contentRDD.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentRDD.style.maxHeight) {
      contentRDD.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fonctionnel 
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleFonc = document.querySelector(".exp-item-fonc");
  const contentFonc = document.querySelector(".hover-exp-fonc");

  // Contenu texte
  const contentFileName = compTitleFonc.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentFonc.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleFonc.addEventListener("click", function () {
    // Affichage progressif
    if (contentFonc.style.maxHeight) {
      contentFonc.style.maxHeight = null;
      setTimeout(() => {
        contentFonc.style.display
          = null;
      }, "400");
    } else {
      contentFonc.style.display = 'block';
      contentFonc.style.maxHeight = contentFonc.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentFonc.style.maxHeight) {
      contentFonc.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Gestion 
document.addEventListener("DOMContentLoaded", async function () {
  const compTitleGestion = document.querySelector(".exp-item-gestion");
  const contentGestion = document.querySelector(".hover-exp-gestion");

  // Contenu texte
  const contentFileName = compTitleGestion.getAttribute('data-content');
  try {
    const response = await fetch(contentFileName);
    const content = await response.text();
    contentGestion.textContent = content;
  } catch (error) {
    console.error('Erreur : impossible de récupérer le contenu ', error);
  }

  compTitleGestion.addEventListener("click", function () {
    // Affichage progressif
    if (contentGestion.style.maxHeight) {
      contentGestion.style.maxHeight = null;
      setTimeout(() => {
        contentGestion.style.display
          = null;
      }, "400");
    } else {
      contentGestion.style.display = 'block';
      contentGestion.style.maxHeight = contentGestion.scrollHeight + "px";
    }

    // Défilement jusqu'à la section
    if (contentGestion.style.maxHeight) {
      contentGestion.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// THEME
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

// Init
themeSwitcher.init();
