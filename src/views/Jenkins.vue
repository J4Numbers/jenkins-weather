<template>
  <div v-if="errored">
    <h1>Uh oh...</h1>
    <p>Something went wrong during the program</p>
    <pre>{{ errored }}</pre>
  </div>

  <div v-else>
    <div v-if="loading">
      <p>Please wait...</p>
    </div>
    <div v-else>
      <div v-if="jobs.length === 0">
        <h2>No jobs found...</h2>
      </div>
      <div v-else v-for="job in jobs">
        <div class="job"><h2>{{job.name}}</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Test',
  data () {
    return {
      loading: true,
      jobs: undefined,
      errored: undefined
    };
  },
  mounted () {
    axios
      .get('http://localhost:8080/api/json?tree=jobs', { auth: { username: 'user', password: 'password' }, responseType: 'json' })
      .then(
        (response) => { this.jobs = response.data.jobs; },
        (reject) => { this.errored = reject; }
      ).catch((error) => {
        this.errored = error;
      }).finally(() => { this.loading = false; });
  }
};
</script>

<style scoped>

</style>
