import { lazy, Suspense, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

const Nav = lazy(() => import("./components/nav"));
const Banner = lazy(() => import("./components/banner"));
const About = lazy(() => import('./components/about'))

/**
 * Dynamically import translated files for a given local, only when the translations are needed.
 * @param locale users selected locale
 * @returns json file containing translated strings for the given locale
 */
const getMessagesByLocale = async (locale: string) => {
  return await import(`./translations/strings-${locale}.json`);
};

const App = () => {
  const [messages, setMessages] = useState({});
  const [locale, setLocale] = useState("en");
  useEffect(() => {
    getMessagesByLocale(locale)
      .then((messages) => setMessages(messages))
      .catch(() =>
        console.error(`Error loading messages for locale: ${locale}`)
      );
  }, [locale]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        <Nav locale={locale} setLocale={setLocale} />
        <Banner />
        <About />
      </IntlProvider>
    </Suspense>
  );
};

export default App;
