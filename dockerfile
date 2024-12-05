# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de dependencias primero
COPY package.json package-lock.json ./

# Instala las dependencias locales (no solo globalmente)
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Instalar Vite globalmente para asegurarnos de que esté accesible
RUN npm install -g vite

# Expone el puerto donde Vite servirá la aplicación
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
