package abbruzzese.webpage.webpage.server.webpage.corsconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@Profile("development")

public class WebConfig implements WebMvcConfigurer {


    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**") 
        .allowedOrigins("http://localhost:5173") 
        //.allowedOrigins("grupoabbruzzese.com.ar") 
        .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") 
        .allowedHeaders("*") 
        .allowCredentials(true);
        
    }

    @Override
    public void addResourceHandlers(@NonNull ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/eventImage/**")
                .addResourceLocations("file:/C:/Users/RINZLER/GrupoAbbruzzese/abbruzzese-page/server/webpage.server/webpage.server/eventimageupload/");
                //.addResourceLocations("file:/home/c0640198/uploads/eventimageupload/");
    }
}