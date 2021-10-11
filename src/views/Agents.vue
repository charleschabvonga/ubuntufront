<template>
    <div>
        <h1>Agents</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Number</td>
                <!-- <td>Actions</td> -->
            </tr>
            </thead>

            <tbody>
                <tr v-for="agent in agents" :key="agent.id">
                    <td>{{ agent.id }}</td>
                    <td>{{ agent.first_name }}</td>
                    <td>{{ agent.last_name}}</td>
                    <td>{{ agent.email}}</td>
                    <td>{{ agent.phone_number}}</td>
                    <!-- <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td> -->
                    <!-- <td><button class="btn btn-danger">Delete</button></td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  name: 'Agents',
  components: {
  },
  computed: {
    agents() {
      return this.$store.state.agent.agents
    },
    loadingStatus() {
      return this.$store.state.client.loadingStatus;
    },
  },
  mounted() {
    this.fetchAgents();
  },
  data() {
    return {
    };
  },
  methods: {
    // newClient() {
    //   this.$router.push({ name: 'AddClient' });
    // },
    fetchAgents() {
      this.$store.dispatch('agent/findAll');
    },
    // getClient(client) {
    //   this.$router.push({ name: 'ShowClient', params: { id: client.id } });
    // },
  },
};
</script>
