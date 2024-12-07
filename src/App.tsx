import { FormattedMessage, IntlProvider } from "react-intl";

// Translated messages in French with matching IDs to what you declared
const messagesInFrench = {
  greeting: "Bonjour je m'appele {name}",
};

const App = () => {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="greeting"
          defaultMessage="Bonjour je m'appele {name}"
          values={{ name: "Quentin" }}
        />
      </p>
    </IntlProvider>
  );
};

export default App;
