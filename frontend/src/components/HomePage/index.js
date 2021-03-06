import './HomePage.css';

const HomePage = () => {
  return (
    <div className='main-container'>
      <h1 className='main-banner'>
        Discover your next favorite wine...
      </h1>
      <img
        className="main"
        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="wine glass"
      />
    </div>
  )

}

export default HomePage;
