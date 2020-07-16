<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <LateralBar></LateralBar>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Freela time</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ user.name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            @click="doLogout"
          >
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LateralBar from './Internal/LateralBar.vue';

export default {

  components: {
    LateralBar,
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      drawer: false,
    };
  },

  mounted() {
    // só pega o valor em dispositivos grandes
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = this.$localStorage.get('drawer', false);
    }
  },

  methods: {

    changeDrawer() {
      this.drawer = !this.drawer;
      // não salva posição em dispositivos pequenos
      if (this.$vuetify.breakpoint.lgAndUp) {
        this.$localStorage.set('drawer', this.drawer);
      }
    },

    async doLogout() {
      await this.$store.commit('setUser', {});
      await this.$store.commit('setUserLogged', false);
      this.$router.push({ name: 'Welcome' });
    },

  },

};
</script>
