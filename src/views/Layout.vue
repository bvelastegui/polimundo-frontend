<template>
  <v-app>
    <v-main>
      <v-toolbar
          extended
          dark
          color="#6A76AB"
          src="https://picsum.photos/id/351/1080/720"
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-toolbar-title>Polimundo</v-toolbar-title>
      </v-toolbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>