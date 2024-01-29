import { html, define } from 'hybrids';

interface DisplayComponent {
    theme: string;
}

export default define<DisplayComponent>({
    tag: 'display-component',
    theme: () => document.body.getAttribute('data-theme') || 'light',
    content: ({ theme }) => html`
    <div>Current Theme: ${theme}</div>
  `,
});
