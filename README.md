# Pudim da Lud — V2

Projeto da loja Pudim da Lud no GitHub.

## O que já existe
- Loja responsiva com 8 sabores e 5 tamanhos.
- Gourmet: Maracujá, Limão Siciliano e Frutas Vermelhas.
- Carrinho e checkout com entrega/retirada.
- Área ADM em `admin-v2.html`.
- Painel da cozinha em `cozinha.html`.
- Estrutura Firebase em `js/`.
- Regras iniciais do Firestore em `firestore.rules`.

## Ativar Firebase
O código já está preparado para Firebase, mas as credenciais do seu projeto precisam ser inseridas pelo proprietário do projeto. Use `js/firebase-config.example.js` como modelo e gere o arquivo local `js/firebase-config.js` com os dados do seu Web App Firebase.

1. Firebase Console → crie o projeto.
2. Authentication → habilite Email/Password.
3. Firestore Database → crie o banco.
4. Cadastre o primeiro usuário no Authentication.
5. Crie `usuarios/{UID}` com `role: "admin"` e `ativo: true`.
6. Publique `firestore.rules`.

Sem Firebase configurado, a loja continua funcionando em modo local para testes.

## Próximas integrações
Mercado Pago, WhatsApp Business, funcionários, promoções, cupons, delivery e PDF podem ser conectados ao mesmo banco.
