<template>
  <div class="signup-form">
    <h1>Save The Icecaps Inc Newsletter</h1>
    <p class="bottom-seperator">
      Monthly newsletter, delivered straight to your home, with most recent climate change information and current events. It will be fun!
    </p>

    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          id="name"
          v-model="form.name"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="bottom-seperator">
        <b-form-radio-group
          v-model="form.gender"
          :options="options"
          button-variant="outline-primary"
          name="radio-btn-outline"
          buttons>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group
        description="We will send the newsletter to this email (but don't worry - we'll never share your email with anyone else)."
        class="bottom-seperator">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group label="How Green is your Life?" class="bottom-seperator">
        <b-form-rating v-model="form.levelOfGreenLife" variant="primary"></b-form-rating>
      </b-form-group>

      <b-form-group
        label="Amount for donation to help save our planet:"
        label-for="amount"
        class="bottom-seperator">
        <b-input-group prepend="€" append="monthly">
          <b-form-input
            id="amount"
            v-model.number="form.amount"
            min="1"
            type="number"
            placeholder="Enter amount to donate"
            :state="amountValidation"
            required>
          </b-form-input>
        </b-input-group>
        <b-form-invalid-feedback :state="amountValidation">
          Polar bears are crying about donations less then 1€..
        </b-form-invalid-feedback>

        <b-form-checkbox v-model="form.oneTimePurchase" name="oneTimePurchase">
          I hate polar bears -- select this to opt out of a recurring donation
        </b-form-checkbox>
      </b-form-group>

      <b-card bg-variant="light" header="Summary" class="bottom-seperator">
        <p class="info">{{ form.oneTimePurchase ? "*Only one newsletter" : "*Monthly Subscription"}}</p>
        <p>
          We will charge you {{ form.amount }} € and send fantastic newsletter on {{ nextNewsletterDate }}!
        </p>
        <p v-if="!form.oneTimePurchase">
          We plan to send out the newsletter on the first workday of every month.
        </p>
      </b-card>


      <b-form-group>
        <b-form-checkbox
          v-model="form.termsAccepted"
          name="terms"
          required
          :state="termsAcceptedValidation">
          I accept the terms and conditions
        </b-form-checkbox>
        <b-form-invalid-feedback :state="termsAcceptedValidation">
          You need to accept all terms to help save the icecups!
          </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" class="bottom-seperator">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getNextFirstWorkdayOfMonth } from "../common/helperMethods.js";
import { UserSignupInfo } from "../types/User.ts";

@Component
export default class SignUpForm extends Vue {
  form: UserSignupInfo = {
    email: "",
    name: "",
    gender: "",
    levelOfGreenLife: 1,
    amount: 25.00,
    oneTimePurchase: false,
    termsAccepted: true,
  };

  data() {
    return {
      options: [
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Other", value: "other" },
      ],
    };
  }

  get amountValidation(): boolean {
    return this.form.amount >= 1;
  }
  get termsAcceptedValidation(): boolean {
    return this.form.termsAccepted;
  }
  get nextNewsletterDate(): string {
    return getNextFirstWorkdayOfMonth(new Date());
  }

  onSubmit(event: any): void {
    event.preventDefault();

    // trying to get more donations
    alert(
      "Thank you very much - Polar bears are already dancing with joy! Do you want to send the newsletter also for your best friend? :) "
    );

    // reset form values (except the amount value)
    this.form.email = "";
    this.form.name = "";
    this.form.gender = "";
    this.form.oneTimePurchase = false;
    this.form.levelOfGreenLife = 1;
  }
}
</script>

<style scoped lang="less">
.signup-form {
  margin: auto;
  margin-top: 50px;
  width: 50%;
}

.bottom-seperator {
  margin-bottom: 40px;
}

@media screen and (max-width: 1200px) {
  .signup-form {
    width: 90%;
  }
}
</style>
