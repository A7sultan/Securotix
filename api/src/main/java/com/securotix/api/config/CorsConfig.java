package com.securotix.api.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(
                        "http://localhost:5173",
                        "http://localhost:8081",
                        "https://securotix.com",
                        "https://www.securotix.com",
                        "https://securotix-76ip.vercel.app",
                        "https://securotix.vercel.app"
                )
                .allowedMethods("GET", "POST", "OPTIONS", "PUT", "DELETE", "PATCH")
                .allowedHeaders("*");
    }
}
