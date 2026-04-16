import { MenuItemType } from '@/types/menu'

export const MENU_ITEMS: MenuItemType[] = [
  // ── CORE ────────────────────────────────────────────────────────────────────
  {
    key: 'core',
    label: 'CORE',
    isTitle: true,
  },
  {
    key: 'pipeline',
    label: 'Pipeline',
    icon: 'ri:kanban-view',
    url: '/dashboards/analytics',
  },
  {
    key: 'leads',
    label: 'Leads',
    icon: 'ri:inbox-unarchive-line',
    url: '/customers/list-view',
  },
  {
    key: 'contacts',
    label: 'Contacts',
    icon: 'ri:contacts-book-3-line',
    url: '/customers/grid-view',
  },
  {
    key: 'activities',
    label: 'Activities',
    icon: 'ri:checkbox-circle-line',
    url: '/transactions',
  },
  {
    key: 'deals',
    label: 'Deals',
    icon: 'ri:money-dollar-circle-line',
    url: '/orders',
  },

  // ── MANAGEMENT ──────────────────────────────────────────────────────────────
  {
    key: 'management',
    label: 'MANAGEMENT',
    isTitle: true,
  },
  {
    key: 'automations',
    label: 'Automations',
    icon: 'ri:flashlight-line',
    url: '/pages/welcome',
  },
  {
    key: 'insights',
    label: 'Insights',
    icon: 'ri:bar-chart-2-line',
    url: '/dashboards/agent',
  },
  {
    key: 'emails',
    label: 'Emails',
    icon: 'ri:mail-line',
    url: '/inbox',
  },
  {
    key: 'calendar',
    label: 'Calendar',
    icon: 'ri:calendar-line',
    url: '/pages/calendar',
  },

  // ── SYSTEM ──────────────────────────────────────────────────────────────────
  {
    key: 'system',
    label: 'SYSTEM',
    isTitle: true,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: 'ri:settings-4-line',
    url: '/pages/pricing',
  },
  {
    key: 'profile',
    label: 'Profile',
    icon: 'ri:user-line',
    url: '/pages/welcome',
  },
]
