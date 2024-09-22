# Установка Node.js
FROM node:18.19.1

# Установка зависимостей
WORKDIR /app
COPY package*.json ./
RUN npm install

# Копирование кода приложения
COPY . .

# Установка переменных среды
ENV NODE_ENV production

# Запуск приложения
CMD ["npm", "run", "start"]