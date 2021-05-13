import { mount } from "@vue/test-utils";
import SignUpForm from "@/components/SignUpForm/SignUpForm.vue";

describe("SignUpForm.vue", () => {
  const wrapper = mount(SignUpForm);

  it("sets 1 as minimum value for amount", () => {
    const amountInput = wrapper.find('#amount')
    expect(amountInput.attributes('min')).toBe('1');
  });
});
