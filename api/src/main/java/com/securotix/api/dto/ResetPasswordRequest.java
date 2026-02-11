package com.securotix.api.dto;

import lombok.Getter;

@Getter
public class ResetPasswordRequest {

    private String token;
    private String newPassword;
}
