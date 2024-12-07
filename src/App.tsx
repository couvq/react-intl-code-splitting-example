import { Suspense, useEffect, useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

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
  const locale = "fr";
  useEffect(() => {
    setTimeout(() => {
      console.log('content loading...')
    }, 2000);
    getMessagesByLocale(locale)
      .then((messages) => setMessages(messages))
      .catch(() =>
        console.error(`Error loading messages for locale: ${locale}`)
      );
  }, []);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <IntlProvider messages={messages} locale="fr" defaultLocale="en">
        <p>
          <FormattedMessage
            id="greeting"
            defaultMessage="Bonjour je m'appele {name}"
            values={{ name: "Quentin" }}
          />
        </p>
      </IntlProvider>
    </Suspense>
  );
};

export default App;
