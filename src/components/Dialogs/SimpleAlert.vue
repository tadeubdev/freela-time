<template>
  <v-dialog v-model="show" max-width="400px">
    <v-card>
      <v-card-title>
        <span class="headline" v-if="title" v-text="title"></span>
      </v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
        <v-btn color="red darken-1" text v-if="no" @click="handleNo">Não</v-btn>
        <v-btn color="red darken-1" text v-if="cancel" @click="handleCancel">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text v-if="yes" focusable @click="handleYes">Sim</v-btn>
        <v-btn color="blue darken-1" text v-if="ok" @click="handleOk">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  props: {
    value: Boolean,
    //
    title: String,
    message: String,
    //
    ok: null,
    yes: null,
    no: null,
    cancel: null,
  },

  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {

    handleOk() {
      if (this.ok) {
        this.ok();
      }
    },

    handleYes() {
      if (this.yes) {
        this.yes();
      }
    },

    handleNo() {
      if (this.no) {
        this.no();
      }
    },

    handleCancel() {
      if (this.cancel) {
        this.cancel();
      }
    },

  },

};
</script>
