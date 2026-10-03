# Paranavaí Zap — como colocar no ar (versão Firebase)

## 1. Criar o projeto (você faz, 10 min)
1. Entre em https://console.firebase.google.com e clique em **Adicionar projeto**.
2. Em **Criação > Authentication > Método de login**, ative **E-mail/senha** e **Google**.
3. Em **Criação > Firestore Database**, clique em **Criar banco de dados** (modo produção).
4. Em **Configurações do projeto > Seus apps**, clique no ícone **</>** (Web), registre o app e copie o `firebaseConfig`.

## 2. Configurar os arquivos
- Abra `index.html` e cole o `firebaseConfig` no topo do script. Troque também `ADMINS` pelo seu e-mail.
- Abra `firestore.rules`, troque `gabrielenrique493@gmail.com` pelo mesmo e-mail e **cole o conteúdo** em Firestore > Regras > Publicar.

## 3. Publicar o link
Opção fácil: Firebase **Hosting** (Criação > Hosting > Vamos começar) ou, com o terminal:
```
npm i -g firebase-tools
firebase login
firebase init   # escolha Hosting e Firestore, use a pasta atual (.), NÃO sobrescreva index.html
firebase deploy
```
Você recebe um link `https://SEU-PROJETO.web.app` que qualquer pessoa abre. Em **Authentication > Configurações > Domínios autorizados** confirme que o domínio está na lista.

## 4. Instalar como app (sem APK)
No Chrome do celular abra o link > menu ⋮ > **Instalar app**.

## 5. Gerar o APK
- **Mais simples:** vá em https://www.pwabuilder.com, cole o link do passo 3, escolha **Android** e baixe o pacote (gera o APK/AAB).
- **Capacitor:** `npm init -y && npm i @capacitor/core @capacitor/cli @capacitor/android && npx cap init "Paranavaí Zap" com.paranavai.zap --web-dir=.` depois `npx cap add android && npx cap open android` e compile no Android Studio (Build > Build APK).
- Dentro do APK o login por **e-mail e senha** funciona normalmente. O botão **Entrar com Google** pode falhar em apps empacotados; para ele, use o plugin `@capacitor-firebase/authentication`.

## Chamadas de voz e vídeo
- No chat com uma pessoa, use 📞 (voz) ou 🎥 (vídeo). O navegador pede permissão de microfone e câmera.
- Usam servidores STUN gratuitos do Google. Em algumas redes (principalmente 4G/5G de certas operadoras) a conexão pode não fechar; para resolver seria preciso contratar um servidor TURN.
- Só funciona em conversas individuais, e com o app aberto (não toca com o app fechado).
- Se o APK for feito com Capacitor, adicione no AndroidManifest as permissões CAMERA, RECORD_AUDIO e MODIFY_AUDIO_SETTINGS.

## Limites
- Todos os perfis são carregados de uma vez: ótimo até alguns milhares de usuários.
- Fotos são guardadas dentro das mensagens (reduzidas), sem usar o Storage, para funcionar no plano gratuito.
- O Firebase mantém uma cópia local das conversas no aparelho, então elas aparecem mesmo sem internet.
