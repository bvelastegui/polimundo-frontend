// Referencia: https://stackoverflow.com/questions/71243239/add-vuetify-2-to-vite-project
import {defineConfig} from 'vite'
import {createVuePlugin} from "vite-plugin-vue2";
import {VuetifyResolver} from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        createVuePlugin(),
        Components({
            resolvers: [
                VuetifyResolver(),
            ]
        }),
    ],
})