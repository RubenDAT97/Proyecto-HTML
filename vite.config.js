
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Proyecto-HTML/',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        aviso_legal: 'aviso-legal.html',
        blockchain: 'blockchain.html',
        blog: 'blog.html',
        contacto: 'contacto.html',
        cursos: 'cursos.html',
        fullstack: 'fullstack.html',
        login: 'login.html',
        quienes_somos: 'quienes_somos.html',
        registro: 'registro.html'
      }
    }
  }
})
