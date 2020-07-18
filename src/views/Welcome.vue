<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="12" md="6" lg="5">
        <v-card
          outlined
        >
          <v-toolbar
            flat
          >
            <v-toolbar-title>
              Bem vindo ao FreelaTime!
            </v-toolbar-title>
          </v-toolbar>
          <v-subheader>
            Esta é uma versão beta. <br>
            Em breve mais novidades e melhorias!
          </v-subheader>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Seu nome"
                name="name"
                v-model="name"
                type="text"
                autofocus="autofocus"
                @keypress.enter="doLogin"
              ></v-text-field>

              <v-text-field
                label="Seu email"
                name="email"
                v-model="email"
                type="text"
                @keypress.enter="doLogin"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary flat px-4"
              depressed
              outlined
              width="140"
              @click="doLogin"
            >
              Entrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!--  -->
    <SimpleAlert
      v-model="dialog.show"
      :message="dialog.message"
      :title="dialog.title"
      :ok="dialog.ok"
      :yes="dialog.yes"
      :no="dialog.no"
      :cancel="dialog.cancel"
    ></SimpleAlert>
  </v-container>
</template>

<script>
import SimpleAlert from '../components/Dialogs/SimpleAlert.vue';

export default {

  components: {
    SimpleAlert,
  },

  data() {
    return {
      name: 'Tadeu',
      email: 'tadeufbarbosa@gmail.com',
      //
      dialog: {
        show: false,
        title: null,
        message: null,
        ok: null,
        yes: null,
        no: null,
        cancel: null,
      },
    };
  },

  methods: {

    showOnEmpty() {
      this.dialog.title = 'Ops!';
      this.dialog.message = 'Preencha todos os campos!';
      this.dialog.ok = () => {
        this.dialog.show = false;
      };
      this.dialog.show = true;
    },

    doLogin() {
      if (!this.name || !this.email) {
        this.showOnEmpty();
        return;
      }
      this.$store.commit('setUserLogged', true);
      this.$store.commit('setUser', {
        name: this.name,
        email: this.email,
      });
      //
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
