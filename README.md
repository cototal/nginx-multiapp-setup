# Nginx Multiapp Setup

This is a Vite frontend application with react router and a Symfony backend application.

```
cd frontend
npm install
npm run build

cd ..

cd backend
composer install

cd ..

docker compose up -d
```

Go to `[localhost]/one/two` and click the **Add** button to test the session.