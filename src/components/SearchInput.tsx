function SearchInput() {
  return (
    <form>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search your location...'
        className='w-full py-2 px-4 rounded-full bg-blue-600 text-white focus:outline-none'
      />
    </form>
  );
}

export default SearchInput;
