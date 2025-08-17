#!/bin/bash

# --- Configuração de Segurança ---
# Encerra o script imediatamente se um comando falhar.
set -e

# --- Lógica do Script ---
echo "Iniciando a instalação de dependências nos projetos..."
echo ""

# Pega todos os argumentos passados para o script.
# Ex: se você rodar ./install_all.sh sequelize sqlite3, LIBS será "sequelize sqlite3"
LIBS_TO_INSTALL="$@"

# Loop por todas as pastas no diretório atual
for project_dir in */ ; do
    # Verifica se a pasta contém um arquivo package.json
    if [ -f "${project_dir}package.json" ]; then
        echo "================================================="
        echo "Entrando no projeto: ${project_dir}"
        
        # Entra no diretório do projeto
        cd "${project_dir}"

        # Verifica se foram passadas bibliotecas para instalar
        if [ -n "$LIBS_TO_INSTALL" ]; then
            echo "Executando: npm install ${LIBS_TO_INSTALL}"
            # Instala as bibliotecas especificadas
            npm install ${LIBS_TO_INSTALL}
        else
            echo "Executando: npm install"
            # Se nenhuma biblioteca foi passada, apenas instala as dependências do projeto
            npm install
        fi
        
        # Volta para o diretório raiz para continuar o loop
        cd ..
        echo "Saindo do projeto: ${project_dir}"
        echo "================================================="
        echo ""
    fi
done

echo "✅ Processo concluído com sucesso em todos os projetos."