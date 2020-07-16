<template>
  <v-list dense>
    <v-list-item link>
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="/welcome">
      <v-list-item-action>
        <v-icon>mdi-email</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Welcome</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
