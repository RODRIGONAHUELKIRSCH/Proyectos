export default defineConfig({
    server: {
      hmr: {
        protocol: 'ws',  
        timeout: 30000,  
        overlay: true    
      }
    }
  });
