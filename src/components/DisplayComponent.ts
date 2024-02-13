import { html, define } from 'hybrids';

export interface DisplayComponent extends HTMLElement {
  theme: string;
}

define<DisplayComponent>({
  tag: 'app-display-component',
  theme: {
    value: undefined,
    connect: (host: DisplayComponent, key: string, _invalidate: Function) => {
      //@ts-ignore
      host[key] = document.body.getAttribute('data-theme') || 'light';
    }
  },
  render: ({ theme }) => html`
    <div>Current Theme: ${theme}</div>
  `,
});
