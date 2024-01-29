import { html, define } from 'hybrids';

interface ThemeSwitcher extends HTMLElement {
    theme: string;
}

export function toggleTheme(host: ThemeSwitcher) {
    host.theme = host.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', host.theme);
}

export default define<ThemeSwitcher>({
    tag: 'theme-switcher',
    theme: 'light',
    render: () => html`
    <button part="toggle-button" onclick="${toggleTheme}">
      Toggle Theme
    </button>
    `,
});
