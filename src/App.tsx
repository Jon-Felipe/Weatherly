// components
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <main className='w-screen h-screen bg-blue-800'>
      <div className='max-w-screen-xl m-auto p-16'>
        <Header />
        <section>
          <Input />
        </section>
      </div>
    </main>
  );
}

export default App;
