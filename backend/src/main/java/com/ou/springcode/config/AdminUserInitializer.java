package com.ou.springcode.config;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.ou.springcode.entity.Role;
import com.ou.springcode.entity.User;
import com.ou.springcode.repository.UserRepository;
@Configuration
public class AdminUserInitializer {
    private static final Logger log = LoggerFactory.getLogger(AdminUserInitializer.class);
    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_EMAIL = "admin@localhost";
    private static final String ADMIN_PASSWORD = "admin123";
    @Bean
    CommandLineRunner seedAdminUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.existsByUsername(ADMIN_USERNAME)) {
                return;
            }
            User admin = User.builder()
                .username(ADMIN_USERNAME)
                .email(ADMIN_EMAIL)
                .passwordHash(passwordEncoder.encode(ADMIN_PASSWORD))
                .role(Role.ADMIN)
                .fullName("Administrator")
                .build();
            userRepository.save(admin);
            log.info("Seeded default admin user: username={}, password={} (change in production)", ADMIN_USERNAME, ADMIN_PASSWORD);
        };
    }
}