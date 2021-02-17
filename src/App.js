import info from './assets/info.png';

export default function App() {
  return (
    <div>
      <p>A simple alertbox</p>
      <div className="w-64 h-16 bg-gray-600 rounded-lg p-1">
        <div className="w-full h-full flex">
          <div className="pt-2 pr-1">
            <img src={info} alt="info" className="w-8 h-8" />
          </div>
          <div className="w-full h-full">
            <div className="text-center text-base font-bold">This is a info alert</div>
            <div className="text-center text-sm pt-1">
              Im alerting you
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}