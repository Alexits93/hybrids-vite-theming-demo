import { html, define, Component } from 'hybrids';

interface ThemeSwitcher {
    theme: string;
    toggleTheme: any;
}

export default define<ThemeSwitcher>({
    tag: 'theme-switcher',
    theme: 'light',
    toggleTheme: function (host: Component<ThemeSwitcher>) {
        host.theme = host.theme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', host.theme);
        console.log(host);
    },
    content: ({ toggleTheme }) => html`
    <button onclick="${toggleTheme}">
      Toggle Theme
    </button>
    `,
});
