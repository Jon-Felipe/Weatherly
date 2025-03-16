// components
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <main className='w-screen h-screen bg-blue-900'>
      <div className='max-w-screen-lg m-auto p-16'>
        <Header />
        <section className='mt-8'>
          <SearchInput />
        </section>
        <section className='mt-8'>
          <WeatherCard />
        </section>
      </div>
    </main>
  );
}

export default App;
