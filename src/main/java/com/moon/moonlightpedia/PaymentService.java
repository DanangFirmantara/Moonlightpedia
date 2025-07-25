package com.moon.moonlightpedia;

import org.springframework.stereotype.Service;

public interface PaymentService {
    void processPayment(double amount);
}
