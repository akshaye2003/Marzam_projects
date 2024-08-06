import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
var ghpages = require('gh-pages');
var fs = require('fs');


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})


fs.writeFile('src/CNAME', "marzamprojects.com", function(err) {});
ghpages.publish('src', function(err) {});
