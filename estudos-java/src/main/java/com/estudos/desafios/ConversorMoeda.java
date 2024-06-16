package com.estudos.desafios;

import kong.unirest.core.HttpResponse;
import kong.unirest.core.Unirest;
import org.json.JSONObject;

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
        String url = "https://api.apilayer.com/exchangerates_data/latest";
        try {

            HttpResponse<String> response = Unirest.get(url)
                    .header("accept", "application/json")
                    .header("apiKey", "1twwZkAVmKJySlvcwd6O0d5T2Ay3gsIK")
                    .queryString("base", "USD")
                    .queryString("symbols", "BRL")
                    .asString();

            if (response.getStatus() == 200) {
                JSONObject json = new JSONObject(response.getBody());
                double cambio = json.getJSONObject("rates").getDouble("BRL");

                ConversorMoeda conversorMoeda = new ConversorMoeda();
                conversorMoeda.setTaxaCambio(cambio);
                System.out.println("\n");
                System.out.println("Resultado da Conversao de Moedas");
                System.out.println(conversorMoeda.converterDolarParaReal(5));
            } else {
                throw new RuntimeException("Falha ao obter a cotação do dólar.");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
