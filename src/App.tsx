// components
import Header from './components/Header';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <main className='w-screen h-screen bg-blue-800'>
      <div className='max-w-screen-xl m-auto p-16'>
        <Header />
        <section className='mt-8'>
          <SearchInput />
        </section>
      </div>
    </main>
  );
}

export default App;
