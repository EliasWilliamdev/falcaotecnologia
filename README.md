
    # Falcão Tecnologia — Landing Page (Vite + React)

    Landing page profissional para Falcão Tecnologia, focada em Projetos Elétricos, Energia Solar e Segurança Eletrônica.

    ## Como rodar localmente

    ```powershell
    # Instalar dependências
    npm install

    # Rodar em modo desenvolvimento
    npm run dev

    # Gerar build de produção
    npm run build

    # Visualizar build local
    npm run preview
    ```

    ## Deploy rápido

    ### GitHub Pages
    1. Gere o build: `npm run build`
    2. Copie o conteúdo da pasta `dist` para um branch chamado `gh-pages`.
    3. Ative GitHub Pages nas configurações do repositório, apontando para o branch `gh-pages`.
    4. Recomendo usar [vite-plugin-gh-pages](https://github.com/vitejs/vite-plugin-gh-pages) para automatizar.

    ### Netlify
    1. Faça login em [netlify.com](https://netlify.com) e clique em "New site from Git".
    2. Selecione seu repositório.
    3. Configure o comando de build: `npm run build` e o diretório de publicação: `dist`.
    4. Deploy automático a cada push.

    ### Vercel
    1. Faça login em [vercel.com](https://vercel.com) e clique em "Add New Project".
    2. Selecione seu repositório.
    3. O Vercel detecta Vite automaticamente (`npm run build`, output: `dist`).
    4. Deploy automático a cada push.

    ## Estrutura do projeto
    - `src/` — componentes React e estilos
    - `public/assets/images/` — imagens extraídas do PDF
    - `saida.txt` — texto extraído do PDF
    - `Portfólio  Falcão Tecnologia.pdf` — PDF original

    ## Contato
    Botão flutuante do WhatsApp já configurado para contato rápido.

    ---
    Deploy fácil, responsivo e pronto para produção!
