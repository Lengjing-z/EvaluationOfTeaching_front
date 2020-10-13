<template>
  <div style="width: 40%;margin: 20px auto">
    <b-form @submit="onSubmit"  @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.code"
          required
          placeholder="Enter code"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          required
          placeholder="Enter code"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.sex"
          required
          placeholder="Enter code"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Height:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.height"
          required
          placeholder="Enter code"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your college:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.institute.name"
          required
          placeholder="Enter code"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Your introduce:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          v-model="form.intr1"
          type="email"
          required
          placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.intr"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UserMess",
  mounted() {
    this.init();
  },
  data() {
    return {
      form: {
        email: '',
        institute:{
          name:'',
        },
        name: '',
        food: null,
        checked: [],
        addr:'',
        age:'',
        code:'',
        height:'',
        intr1:'',
        sex:'',
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    init(){
      this.form = this.$store.state.info.mine;
      this.form.name = this.$store.state.info.mine.name;
      this.form.intr1 = this.$store.state.info.mine.intr;
      console.log(this.$store.state.info.mine.intr)
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }

}
</script>

<style scoped>

</style>
