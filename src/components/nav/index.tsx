import { Select } from "flourish-ui";
import { FormattedMessage } from "react-intl";

type NavProps = {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = ({ locale, setLocale }: NavProps) => {
  const handleSelect = (e: MouseEvent | FocusEvent, value: string) => {
    e.preventDefault();
    setLocale(value);
  };
  return (
    <header>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: '1rem'
        }}
      >
        <p>
          <FormattedMessage
            id="greeting"
            defaultMessage="Hello {name}"
            values={{ name: "Quentin" }}
          />
        </p>
        <Select
          value={locale ?? "English"}
          onSelect={handleSelect}
          options={[
            {
              label: "en",
              value: "en",
            },
            {
              label: "fr",
              value: "fr",
            },
          ]}
        />
      </nav>
    </header>
  );
};

export default Nav;
