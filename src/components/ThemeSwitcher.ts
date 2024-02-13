import { html, define, dispatch } from 'hybrids';

export interface ThemeSwitcher extends HTMLElement {
    theme: { value: string };
}

/**
 * Toggles the theme of the host between light and dark.
 *
 * @param {ThemeSwitcher} host - the host object to toggle the theme for
 * @return {void} 
 */
export function toggleTheme(host: ThemeSwitcher) {
    host.theme.value = host.theme.value === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', host.theme.value);
    dispatch(host, 'context-request');
}

define<ThemeSwitcher>({
    tag: 'app-theme-switcher',
    theme: {
        value: undefined,
        connect: (host: ThemeSwitcher, key: string, _invalidate: Function) => {
            //@ts-ignore
            host[key] = { value: document.body.getAttribute('data-theme') || 'light' };
        },
    },
    render: ({ theme }) => html`
    <button part="toggle-button" onclick="${toggleTheme}">
      Toggle Theme to ${theme && theme.value === 'light' && 'dark' || 'light'}
    </button>
    `,
});
