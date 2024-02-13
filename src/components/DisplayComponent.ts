import { html, define } from 'hybrids';

export interface DisplayComponent extends HTMLElement {
  theme: string;
}

define<DisplayComponent>({
  tag: 'app-display-component',
  theme: {
    value: undefined,
  },
  render: ({ theme }) => html`
    <div>Current Theme: ${theme}</div>
  `,
});
