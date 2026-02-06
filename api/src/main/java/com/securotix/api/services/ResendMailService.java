package com.securotix.api.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.securotix.api.dto.CareerRequest;
import com.securotix.api.dto.ContactRequest;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class ResendMailService implements MailService {

    @Value("${resend.api.key}")
    private String apiKey;

    @Value("${app.mail.from:onboarding@resend.dev}")
    private String from;

    @Value("${app.mail.internal:aminah.sultan735@gmail.com}")
    private String internal;

    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void sendContactMail(ContactRequest request) {
        String body = String.format(
                """
                New Contact Form Submission

                Name: %s
                Email: %s
                Company: %s

                Message:
                %s
                """,
                request.getName(),
                request.getEmail(),
                request.getCompany(),
                request.getMessage()
        );

        send(internal, "New Contact Form Submission", body);
    }

    @Value("${app.mail.dev-mode:true}")
private boolean devMode;

@Override
public void sendCareerApplication(CareerRequest request) {

    String body = """
            New Career Application

            Name: %s %s
            Email: %s
            Phone: %s

            Message:
            %s
            """.formatted(
            request.getFirstName(),
            request.getLastName(),
            request.getEmail(),
            request.getPhone(),
            request.getMessage()
    );

    send(internal, "New Career Application", body);
}

@Override
public void sendAutoReply(String to, String subject, String body) {
    if (devMode) {
        send(internal, "[DEV MODE] " + subject, body);
        return;
    }
    send(to, subject, body);
}



    private void send(String to, String subject, String text) {
        try {
            Map<String, Object> payload = Map.of(
                    "from", from,
                    "to", List.of(to),
                    "subject", subject,
                    "text", text
            );

            String json = objectMapper.writeValueAsString(payload);

            Request request = new Request.Builder()
                    .url("https://api.resend.com/emails")
                    .post(RequestBody.create(
                            json,
                            MediaType.parse("application/json")
                    ))
                    .addHeader("Authorization", "Bearer " + apiKey)
                    .addHeader("Content-Type", "application/json")
                    .build();

            try (Response response = client.newCall(request).execute()) {
                if (!response.isSuccessful()) {
                    throw new RuntimeException(
                            "Failed to send email: " + response.body().string()
                    );
                }
            }

        } catch (IOException e) {
            throw new RuntimeException("Email send failed", e);
        }
    }
}
