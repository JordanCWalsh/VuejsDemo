import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue unit tests:', () => {
  let renderWrapper
  describe('when home page is rendered', () => {
    beforeAll(() => {
      renderWrapper = shallowMount(Home)
    })
    it('renders the required components', () => {
      expect(
        renderWrapper.find('[search-card]').exists() &&
          renderWrapper.find('[search-input]').exists()
      ).toBe(true)
    })
  })
})
