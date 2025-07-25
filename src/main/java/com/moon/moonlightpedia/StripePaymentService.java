package com.moon.moonlightpedia;

public class StripePaymentService implements PaymentService {
    @Override
    public void processPayment(double amount){
        System.out.println("stripe");
        System.out.println("amount :: " + amount + " :: paid");
    }
}
