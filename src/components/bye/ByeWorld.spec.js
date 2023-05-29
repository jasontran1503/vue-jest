import { shallowMount } from '@vue/test-utils';
import ByeWorld from './ByeWorld.vue';

describe('ByeWorld', () => {
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(ByeWorld, {
			propsData: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
