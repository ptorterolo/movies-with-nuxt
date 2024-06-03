import { mount, RouterLinkStub } from '@vue/test-utils'
import { it, expect, describe, vi } from 'vitest'
import AppHeader from './AppHeader.vue'

vi.mock('firebase/auth', () => ({
  signOut: vi.fn()
}))
describe('App Header', () => {
  it('should render the component', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('should have a user profile link', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          NuxtLink: RouterLinkStub
        }
      }
    })

    const userProfileBtn = wrapper.find('[data-testid="userProfileBtn"]')
    expect(userProfileBtn.exists()).toBe(true)
  })
  it('should have a logout button', async () => {
    const wrapper = mount(AppHeader)
    const userProfileBtn = wrapper.find('[data-testid="logoutBtn"]')
    expect(userProfileBtn.exists()).toBe(true)
  })
})
