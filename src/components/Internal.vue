<template>
  <v-app>
    <v-card
      flat
      tile
      color="primary"
      style="min-height:100vh;"
    >
      <v-toolbar
        color="primary"
        dark
        extended
        flat
      ></v-toolbar>
        <v-card
          flat
          class="mx-4 mx-lg-auto rounded-b"
          max-width="600"
          style="margin-top:-64px;"
        >
          <v-toolbar
            flat
            class="text-dark"
          >
            <v-toolbar-title class="grey--text font-weight-light">Freela Time</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="displayLogout = !displayLogout"
            >
              <v-icon>mdi-account-arrow-right-outline</v-icon>
            </v-btn>
          </v-toolbar>
          <v-main
            style="min-height:500px;"
          >
            <v-container
              class="fill-height"
              align-top
            >
              <router-view/>
            </v-container>
          </v-main>
        </v-card>
    </v-card>

    <NovoCliente v-model="displayNovoCliente"></NovoCliente>
    <Logout v-model="displayLogout"></Logout>
  </v-app>
</template>

<script>
import NovoCliente from './Dialogs/NovoCliente.vue';
import Logout from './Dialogs/Logout.vue';

export default {

  components: {
    NovoCliente,
    Logout,
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      drawer: false,
      displayLogout: false,
      displayNovoCliente: false,
    };
  },

  mounted() {
    // só pega o valor em dispositivos grandes
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = this.$localStorage.get('drawer', false);
    }
    document.addEventListener('keyup', this.onKeyUp);
  },

  methods: {

    onKeyUp(event) {
      if (event.keyCode === 65 && event.shiftKey && !this.displayNovoCliente) {
        this.displayNovoCliente = true;
        //
        event.preventDefault();
      }
    },

    changeDrawer() {
      this.drawer = !this.drawer;
      // não salva posição em dispositivos pequenos
      if (this.$vuetify.breakpoint.lgAndUp) {
        this.$localStorage.set('drawer', this.drawer);
      }
    },

  },

};
</script>
