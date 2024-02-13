import { define, html } from "hybrids";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface AppComponent {
    theme: string;
}

const getThemeContext = (host: AppComponent, event: CustomEvent) => {
    (event.target as ThemeSwitcher).theme = {
        get value() {
            return host.theme;
        },
        set value(value) {
            host.theme = value;
        }
    }
};

define<AppComponent>({
    tag: "app-shell",
    theme: {
        value: undefined,
    },
    content: (h) => html`
        <app-display-component theme="${h.theme}"></app-display-component>
        <app-theme-switcher oncontext-request="${getThemeContext}"></app-theme-switcher>
    `
})