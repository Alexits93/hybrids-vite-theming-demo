import { html, define } from 'hybrids';

export interface ThemeSwitcher extends HTMLElement {
    theme: string;
}

/**
 * Toggles the theme of the host between light and dark.
 *
 * @param {ThemeSwitcher} host - the host object to toggle the theme for
 * @return {void} 
 */
export function toggleTheme(host: ThemeSwitcher) {
    host.theme = host.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', host.theme);
}

define<ThemeSwitcher>({
    tag: 'app-theme-switcher',
    theme: 'light',
    render: () => html`
    <button part="toggle-button" onclick="${toggleTheme}">
      Toggle Theme
    </button>
    `,
});
