<template>
  <div class="signup-form">
    <h1>Save The Icecaps Inc Newsletter</h1>
    <p
      class="bottom-seperator">
      Monthly newsletter, delivered straight to your home, with most recent climate change information and current events. It will be fun!
    </p>

    <b-form @submit="onSubmit">
      <b-form-group label="Name:" label-for="name" label-cols-sm="3">
        <b-form-input id="name" v-model="form.name" placeholder="Enter your name" required></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email address:"
        label-for="email"
        description="We will send the newsletter to this email (but don't worry - we'll never share your email with anyone else)."
        label-cols-sm="3"
        class="bottom-seperator">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Enter your email"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group label="Gender" label-cols-sm="3" class="bottom-seperator">
        <b-form-radio-group
          v-model="form.gender"
          :options="options"
          button-variant="outline-primary"
          name="radio-btn-outline"
          buttons>
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="How green do you think is your lifestyle?" class="bottom-seperator">
        <b-form-rating v-model="form.stars" variant="primary"></b-form-rating>
      </b-form-group>

      <b-form-group
        label="Amount for donation to help save our planet:"
        label-for="amount"
        class="bottom-seperator">
        <b-form-input
          id="amount"
          v-model="form.amount"
          type="number"
          placeholder="Enter amount to donate"
          required>
        </b-form-input>

        <b-form-checkbox
          v-model="form.skipSubscription"
          name="skipSubscription">
          I hate polar bears -- select this to opt out of a recurring donation
        </b-form-checkbox>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox v-model="form.checked" name="terms">I accept the terms and conditions</b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <b-card class="mt-3" header="Summary">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      form: {
        email: "",
        name: "",
        gender: "",
        stars: 1,
        amount: 20,
        skipSubscription: false,
        checked: true
      },
      options: [
        { text: "Female", value: "female" },
        { text: "Male", value: "male" },
        { text: "Other", value: "other" }
      ]
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      // trying to get more donations
      alert(
        "Thank you very much - Polar bears are already dancing with joy! Do you want to send the newsletter also for your best friend? :) "
      );

      // reset form values (except the amount value)
      this.form.email = "";
      this.form.name = "";
      this.form.gender = "";
      this.form.skipSubscription = false;
      this.form.stars = 1;
    }
  }
};
</script>

<style scoped>
.signup-form {
  margin: auto;
  margin-top: 60px;
  width: 60%;
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
