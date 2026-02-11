package com.securotix.api.dto;

import lombok.Getter;

@Getter
public class CompleteSetupRequest {

    private String newEmail;
    private String newPassword;
}
