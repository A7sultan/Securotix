package com.securotix.api.services;

import com.securotix.api.dto.*;

public interface MailService {

    void sendContactMail(ContactRequest request);

    void sendAutoReply(String to, String subject, String body);

    void sendCareerApplication(CareerRequest request);

    void sendPasswordResetEmail(String to, String resetLink);

}
