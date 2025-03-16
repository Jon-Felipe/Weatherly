import { MdWaterDrop, MdSpeed } from 'react-icons/md';
import { FaLongArrowAltUp, FaLongArrowAltDown, FaWind } from 'react-icons/fa';

type Props = {};

function WeatherCard({}: Props) {
  return (
    <div className='w-full bg-blue-600 rounded-2xl p-6'>
      <h3 className='text-blue-900 font-medium text-xl'>Current Weather</h3>
      <div className='grid grid-cols-2 place-content-center mt-6'>
        <section>
          <h3 className='text-lg text-blue-400 font-semibold'>Paris</h3>
          <div className='flex items-center'>
            <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='' />
            <p className='text-6xl text-blue-400'>24°</p>
          </div>
          <p className='text-xl text-blue-400 font-semibold'>Thunderstorm</p>
        </section>
        <section>
          <h3 className='text-xl text-blue-400'>Feels like 24°</h3>
          <div className='flex items-center justify-between w-40 my-4'>
            <div className='flex items-center gap-x-2'>
              <span>
                <FaLongArrowAltUp className='w-5 h-5' />
              </span>
              <p>26°</p>
            </div>
            <div className='flex items-center gap-x-2'>
              <span>
                <FaLongArrowAltDown className='w-5 h-5' />
              </span>
              <p>23°</p>
            </div>
          </div>

          <div className='grid grid-cols-[1fr_2fr] items-center mb-2'>
            <div className='flex items-center gap-x-4'>
              <span>
                <MdWaterDrop className='w-5 h-5' />
              </span>
              <h6 className='text-blue-900 tracking-wide'>Humidity</h6>
            </div>
            <p className='text-blue-950 text-sm font-bold'>73%</p>
          </div>

          <div className='grid grid-cols-[1fr_2fr] items-center mb-2'>
            <div className='flex items-center gap-x-4'>
              <span>
                <FaWind className='w-5 h-5' />
              </span>
              <h6 className='text-blue-900 tracking-wide'>Wind</h6>
            </div>
            <p className='text-blue-950 text-sm font-bold'>18kph</p>
          </div>

          <div className='grid grid-cols-[1fr_2fr] items-center'>
            <div className='flex items-center gap-x-4'>
              <span>
                <MdSpeed className='w-5 h-5' />
              </span>
              <h6 className='text-blue-900 tracking-wide'>Pressure</h6>
            </div>
            <p className='text-blue-950 text-sm font-bold'>1014hPa</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WeatherCard;
