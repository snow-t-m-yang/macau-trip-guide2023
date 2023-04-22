const Day5page = () => {
  return (
    <section className="grid w-full px-3 min-h-[100dvh] ">
      <h1 className="text-5xl">Day 5</h1>

      <div>
        <h2>航班資訊</h2>
        <iframe
          className="w-full h-56 rounded-2xl"
          src="https://aviability.com/flight-status/status-nx618-air-macau"
        ></iframe>
      </div>
    </section>
  );
};
export default Day5page;
