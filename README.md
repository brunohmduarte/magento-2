# Loja de desenvolvimento e estudo

## Instalação

### Crie uma pasta
	~ mkdir docker
	
### Clonando o repositório
	~ cd docker
	~ git clone --recurse-submodule https://github.com/magenteiro/firestore.git mage2

### Criando os containers
	~ cd mage2
	~ bin/start

### Copie todos os arquivos da pasta src/ para dentro do container
	~ bin/copytocontainer --all

### Instalando as dependências da loja
	~ bin/composer install

### Instalando o banco de dados
	~ bin/mysql < 20201016-firestore.sql

### Instalando a loja Magento 2
bin/magento setup:install \
  --db-host="db" \
  --db-name="magento" \
  --db-user="magento" \
  --db-password="magento" \
  --base-url=https://mage2.local/ \
  --base-url-secure=https://mage2.local/ \
  --backend-frontname="admin" \
  --admin-firstname="Bruno" \
  --admin-lastname="Duarte" \
  --admin-email="bruno@teste.com" \
  --admin-user=admin-m2 \
  --admin-password=admin1234 \
  --amqp-host="$RABBITMQ_HOST" \
  --amqp-port="$RABBITMQ_PORT" \
  --amqp-user="$RABBITMQ_DEFAULT_USER" \
  --amqp-password="$RABBITMQ_DEFAULT_PASS" \
  --amqp-virtualhost="$RABBITMQ_DEFAULT_VHOST" \
  --cache-backend=redis \
  --cache-backend-redis-server=redis \
  --cache-backend-redis-db=0 \
  --page-cache=redis \
  --page-cache-redis-server=redis \
  --page-cache-redis-db=1 \
  --session-save=redis \
  --session-save-redis-host=redis \
  --session-save-redis-log-level=4 \
  --session-save-redis-db=2 \
  --search-engine=elasticsearch7 \
  --elasticsearch-host=elasticsearch \
  --elasticsearch-port=9200 \
  --use-rewrites=1 \
  --no-interaction

### Copiando e descompactando o arquivo de media dentro da loja
	~ copiar o arquivo dento do diretório: docker/mage2/src
	~ bin/copytocontainer media_product.tar.gz pub/media
	~ bin/bash
	~ tar xzvf media_product.tar.gz

### Criando o virtual host da loja
	Acesse o arquivo: ~ sudo nano /etc/hosts
	Adicione a seguinte instrução: 127.0.0.1 mage2.local
	Salve as alterações e saia do arquivo

### Configuração do nginx
	Remoneie o arquivo: "nginx.conf.sample" para "nginx.conf"
	Renomeie o arquivo: ".htaccess" para ".htaccess.bkp"
	Restarte os containers

### Limpe os caches da loja
	~ bin/magento cache:flush
