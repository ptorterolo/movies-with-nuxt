import { mount } from '@vue/test-utils'
import { it, expect, describe } from 'vitest'
import MovieSearch from '~/pages/movies/index.vue'

describe('Movie Search', () => {
  it('should render the component', () => {
    const wrapper = mount(MovieSearch)
    expect(wrapper.exists()).toBe(true)
  })
  it('should clear input when clear button is clicked', async () => {
    const wrapper = mount(MovieSearch)
    const searchInput = wrapper.find('[data-testid="searchInput"]')
    await searchInput.setValue('sonic')
    const clearBtn = wrapper.find('[data-testid="clear-search"]')
    await clearBtn.trigger('click')
    expect(searchInput.text()).toBe('')
  })
})
