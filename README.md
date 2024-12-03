# Tech Challenge - API do Microserviço Pagamentos

## Descrição

Este projeto é parte do Tech Challenge da FIAP e implementa um microserviço de pagamentos. A API fornece um conjunto de recursos e operações para gerenciar pagamentos.

## Documentação da API

A documentação completa da API pode ser acessada em `/api-docs` após iniciar o servidor.

### Informações Gerais

- **Versão**: 1.0.0
- **Título**: Tech Challenge Fiap
- **Descrição**: Conjuntos de recursos e operações do Tech Challenge da FIAP
- **Host**: pagamento-backend-472933699837.us-central1.run.app
- **BasePath**: /
- **Esquemas**: http

### Tags

- **Pagamento**: APIs do domínio de Pagamento

## Endpoints

### Health Check

- **URL**: `/api/health-check/v1`
- **Método**: GET
- **Descrição**: Health Check da API
- **Tags**: Pedido
- **Segurança**: JWT

### Webhook MercadoPago

- **URL**: `/api/pagamentos/v1/webhook/mercadopago`
- **Método**: POST
- **Descrição**: Webhook para receber notificações do MercadoPago
- **Tags**: Pagamento

## Como Executar

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento, execute:

```sh
npm run dev
