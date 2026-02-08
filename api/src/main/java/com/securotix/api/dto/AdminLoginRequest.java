package com.securotix.api.dto;

public record AdminLoginRequest(
    String email,
    String password
) {}

