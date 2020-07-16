<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Bem vindo ao FreelaTime!</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Seu nome"
                name="name"
                v-model="name"
                type="text"
                autofocus="autofocus"
              ></v-text-field>

              <v-text-field
                label="Seu email"
                name="email"
                v-model="email"
                type="text"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="doLogin">Começar!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="displayDialog"
      width="500"
    >
      <v-card>
        <v-card-text class="pt-4 body-1">
          Preencha todos os campos do formulário!
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="displayDialog = false"
          >
            Ok!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
      displayDialog: false,
      name: 'Tadeu',
      email: 'tadeufbarbosa@gmail.com',
    };
  },

  methods: {
    doLogin() {
      if (this.name == null || this.email == null) {
        this.displayDialog = true;
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
