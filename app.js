(() => {
  const supportedLanguages = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  const languageSelect = document.querySelector("#languageSelect");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const translations = window.siteTranslations || {};

  const browserLocale = (navigator.languages?.[0] || navigator.language || "zh-CN").toLowerCase();

  function detectLanguage(locale) {
    if (/^zh-(tw|hk|mo|hant)/.test(locale)) return "zh-Hant";
    if (locale.startsWith("zh")) return "zh-Hans";
    return supportedLanguages.find((lang) => lang !== "zh-Hans" && lang !== "zh-Hant" && locale.startsWith(lang)) || "en";
  }

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem("kevoralabs.tap.lang");
      return supportedLanguages.includes(saved) ? saved : null;
    } catch {
      return null;
    }
  }

  function applyLanguage(lang, persist = false) {
    const activeLang = supportedLanguages.includes(lang) ? lang : "en";
    const dict = translations[activeLang] || translations.en;

    document.documentElement.lang = activeLang;
    if (languageSelect) languageSelect.value = activeLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) el.innerHTML = dict[key];
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    if (dict["meta.description"] && descriptionMeta) descriptionMeta.content = dict["meta.description"];

    if (persist) {
      try {
        localStorage.setItem("kevoralabs.tap.lang", activeLang);
      } catch {
        // ignore in private mode
      }
    }
  }

  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value, true);
    });
  }

  const initialLang = getSavedLanguage() || detectLanguage(browserLocale);
  applyLanguage(initialLang);

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const textToCopy = button.dataset.copy;
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const textSpan = button.querySelector('[data-i18n*="copy"]') || button.querySelector("span");
        if (textSpan) {
          const originalText = textSpan.textContent;
          const currentLang = document.documentElement.lang || "zh-Hans";
          const dict = translations[currentLang] || translations.en;
          const copiedText = dict["hero.copied"] || dict["app.copied"] || "Copied!";

          textSpan.textContent = copiedText;
          button.classList.add("copied");

          setTimeout(() => {
            textSpan.textContent = originalText;
            button.classList.remove("copied");
          }, 2000);
        }
      } catch (err) {
        console.error("Failed to copy text:", err);
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
