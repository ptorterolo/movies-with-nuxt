import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import Login from '~/pages/index.vue'

describe('App Login', () => {
  it('should render the component', () => {
    const wrapper = mount(Login)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct title', () => {
    const wrapper = mount(Login)
    expect(wrapper.find('h1').text()).toBe('Movie Finder')
  })

  it('shows error message when credentials are invalid', async () => {
    const wrapper = mount(Login)
    await wrapper.find('form').trigger('submit.prevent')
    const errStr = wrapper.find('[data-testid=errorBox]')
    expect(errStr.exists()).toBe(true)
  })
})
