package abbruzzese.webpage.webpage.server.webpage.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import abbruzzese.webpage.webpage.server.webpage.Service.UserService;

@Configuration
@Profile("production")
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfigProd {
    
 
//     private JwtUtil jwtutil;
//     private UserService userDetails;

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//         .authorizeHttpRequests(authorize -> authorize
//             .requestMatchers("/public/**").permitAll() // Rutas públicas
//             .anyRequest().authenticated() // Proteger el resto
//         )
//         .csrf(csrf -> csrf.requireCsrfProtectionMatcher(request -> true)) // Activar CSRF
//         .cors(cors -> cors.configurationSource(request -> {
//             var corsConfig = new org.springframework.web.cors.CorsConfiguration();
//             corsConfig.addAllowedOrigin("grupoabbruzzese.com.ar"); // Frontend en producción
//             corsConfig.addAllowedMethod("*");
//             corsConfig.addAllowedHeader("*");
//             corsConfig.setAllowCredentials(true);
//             return corsConfig;
//         }));
//     return http.build();
// }


    private  JwtUtil jwtutil;
    private  UserService userDetails;


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Stateless API
            .csrf(csrf -> csrf.disable()) // Desactivar CSRF solo para APIs
            .authorizeHttpRequests(auth -> auth
                // Endpoints públicos (acceso sin autenticación)
                .requestMatchers("/api/user/findByEmail","/api/user/auth/login","/api/user/auth/reset-password","/api/eventImage/active","/api/eventImage/inactive","/api/magazine/rango","/api/magazine/ultima-revista/enlace","/api/magazine/ultima-revista","/api/newsletter/subscribe","/api/cookies/check","/api/cookies/set","/api/user/**","/api/product/**","/api/newsletter/**","/api/eventImage/**","/api/magazine/**","/api/magazine/images/","/api/product/upload","/api/product/productimages/**","/api/product/search/name/**","/api/product/search/categoria/**").permitAll()
                // Proteger el resto de endpoints
                .anyRequest().authenticated()
            )
            // Configurar CORS solo para tu dominio de frontend
            .cors(cors -> cors.configurationSource(request -> {
                var config = new org.springframework.web.cors.CorsConfiguration();
                config.addAllowedOrigin("grupoabbruzzese.com.ar");
                config.addAllowedMethod("*");
                config.addAllowedHeader("*");
                config.setAllowCredentials(true);
                return config;
            }))
            // Filtro de autenticación JWT
            .addFilterBefore(new JwtAuthenticationFilter(jwtutil, userDetails), UsernamePasswordAuthenticationFilter.class)
            .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = 
            http.getSharedObject(AuthenticationManagerBuilder.class);
        return authenticationManagerBuilder.build();
    }

}
