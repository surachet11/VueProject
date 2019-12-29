<template>
  <div>
    <h1>Form</h1>
    <br />
    <div class="field">
      <div class="control">
        <input
          v-model="person.name"
          :class="`input ${className('name')}`"
          type="text"
          placeholder="Name"
        />
      </div>
    </div>

    <div class="control">
      <input
        v-model="person.surname"
        :class="'input ' + className('surname')"
        type="text"
        placeholder="Surname"
      />
    </div>
    <br />
    <p>Name: {{ person }}</p>
    <div class="field">
      <label class="checkbox">
        <input v-model="person.isMarried" type="checkbox" /> Married
      </label>
    </div>
    <div class="field">
      <label class="checkbox">
        <input v-model="person.hobbies" type="checkbox" value="reading" />
        Reading
        <input v-model="person.hobbies" type="checkbox" value="music" /> Music
        <input v-model="person.hobbies" type="checkbox" value="sports" />
        Sports
      </label>
    </div>

    <div class="field">
      <div class="control">
        <label class="control">
          <input v-model="person.gender" type="radio" value="F" /> Female
          <input v-model="person.gender" type="radio" value="M" /> Male
        </label>
      </div>
    </div>

    <div class="field">
      <div class="select">
        <select v-model="person.language">
          <option v-for="each in languages" :value="each" :key="each">{{
            each
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css/animate.min.css";

export default {
  methods: {
    className(fieldName) {
      return this.person[fieldName]
        ? "is-success"
        : "is-danger animated infinite bounce delay-1s";
    }
  },

  // computed: {
  //   className() {
  //     return {
  //       name: this.person.name ? "is-success" : "is-danger",
  //       surname: "is-success"
  //     };
  //   }
  // },

  data() {
    return {
      languages: ["Javascript", "vue", "java"],
      person: {
        name: "John",
        surname: "Joe",
        isMarried: false,
        hobbies: [],
        gender: "M",
        language: "Javascript"
      }
    };
  }
};
</script>
