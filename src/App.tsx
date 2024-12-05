import React from 'react';
import { useAuthStore } from './store/authStore';
import { LoginForm } from './components/LoginForm';
import { TodoList } from './components/TodoList';
import { Header } from './components/Header';

function App() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-6">
        <TodoList />
      </main>
    </div>
  );
}

export default App;