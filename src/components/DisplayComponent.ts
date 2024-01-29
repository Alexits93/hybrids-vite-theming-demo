import { html, define } from 'hybrids';

interface DisplayComponent extends HTMLElement {
    theme: string;
}

export default define<DisplayComponent>({
    tag: 'display-component',
    theme: () => document.body.getAttribute('data-theme') || 'light',
    render: ({ theme }) => html`
    <div>Current Theme: ${theme}</div>
  `,
});
