package com.estudos.desafios;

public class ConversorMoeda implements ConversaoFinanceira {

    private double taxaCambio;

    public double getTaxaCambio() {
        return taxaCambio;
    }

    public void setTaxaCambio(double taxaCambio) {
        this.taxaCambio = taxaCambio;
    }

    @Override
    public double converterDolarParaReal(double valorDolar) {
        return valorDolar * this.taxaCambio;
    }

    public static void main(String[] args) {
        System.out.println("ok");
    }

}
