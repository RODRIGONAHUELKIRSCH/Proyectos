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
@Profile("development")
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    private JwtUtil jwtutil;
    private UserService userDetails;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
        .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))  
        .csrf(csrf -> csrf.disable())
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/user/findByEmail","/api/user/auth/login","/api/user/auth/reset-password","/api/eventImage/active","/api/eventImage/inactive","/api/magazine/rango","/api/magazine/ultima-revista/enlace","/api/magazine/ultima-revista","/api/newsletter/subscribe","/api/cookies/check","/api/cookies/set","/api/user/**","/api/product/**","/api/newsletter/**","/api/eventImage/**","/api/magazine/**","/api/magazine/images/","/api/product/upload","/api/product/productimages/**","/api/product/search/name/**","/api/product/search/categoria/**").permitAll()
            //.anyRequest().permitAll() // Permitir acceso a otros endpoints sin autenticación
            .anyRequest().authenticated() //Authenticar todas los endpoints
        )
    
        .addFilterBefore(new JwtAuthenticationFilter(jwtutil,userDetails), UsernamePasswordAuthenticationFilter.class)
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