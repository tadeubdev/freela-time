<template>
  <v-template
    class="fill-height pt-5"
    fluid
  >
    <v-row>
      <v-col cols="12" v-for="(value,index) in [...new Array(2)]" :key="index">
        <article>
          123 - {{index}}
        </article>
      </v-col>
    </v-row>
  </v-template>
</template>
