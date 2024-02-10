import './style.css'
import './themes.css'
import './components/ApplicationShell.ts'
import './components/ThemeSwitcher.ts'
import './components/DisplayComponent.ts'
import { DisplayComponent } from './components/DisplayComponent.ts'
import { ThemeSwitcher } from './components/ThemeSwitcher.ts'

declare global {
    interface HTMLElementTagNameMap {
        "app-display-component": DisplayComponent,
        "app-theme-switcher": ThemeSwitcher
    }
}

