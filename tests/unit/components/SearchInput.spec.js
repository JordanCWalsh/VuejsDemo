import { shallowMount } from '@vue/test-utils'
import SearchInput from '@components/SearchInput.vue'

describe('SearchInput.vue unit tests:', () => {
  let renderWrapper
  describe('when SearchInput is rendered', () => {
    beforeAll(() => {
      renderWrapper = shallowMount(SearchInput)
    })
    it('renders the required components', () => {
      expect(renderWrapper.find('[search-card]').exists()).toBe(true)
    })
  })
})
