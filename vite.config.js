import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
var ghpages = require('gh-pages');
var fs = require('fs');


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})


fs.writeFile('dist/CNAME', "marzamprojects.com", function(err) {});
ghpages.publish('dist', function(err) {});
