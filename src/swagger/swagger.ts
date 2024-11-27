import { post_webhook_mercadopago } from "domains/pagamento/adapter/driver/rest/swagger/pagamento.swagger";

export const swagger = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Tech Challenge Fiap",
    description: "Conjuntos dde recursos e operações do Tech Challenge da FIAP",
  },
  host: ["pagamento-backend-472933699837.us-central1.run.app"],
  //host: "localhost:3000",
  schemes: ["https", "http"],
  tags: [
    {
      name: "Pagamento",
      description: "APIs do domínio de Pagamento",
    },
  ],
  definitions: {
    post_webhook_mercadopago,
  },
};
