import React from 'react'

const WorkoutSessions = () => {
  return (
    <section className='workout_session'>
      <div className='wrapper'>
        <h1>Top Workout Session</h1>
        <p>Experience the ultimate workout sessions designed to push your limits and maximize results!</p>
        <img className='img' src="/img5.jpg" alt="workout" />
      </div>
      <div className='wrapper'>
        <h1>Featured BootCamps</h1>
        <p>For the Featured Bootcamps section on your gym website, you can highlight different bootcamp programs your gym offers.</p>
        <div className='bootcamps'>
          <div>
          <h4>Beginner’s Bootcamp</h4>
          <p>New to fitness? This entry-level bootcamp introduces you to fundamental exercises, ensuring proper form and technique while building confidence and strength.</p>
          </div>
          <div>
          <h4>Athletic Performance Bootcamp</h4>
          <p>Train like an athlete with speed, agility, and power-focused workouts. This bootcamp is perfect for sports enthusiasts and anyone looking to boost overall performance.</p>
          </div>
          <div>
          <h4>Fat-Burning Cardio Bootcamp</h4>
          <p>A heart-pumping, sweat-dripping session that blends cardio drills with bodyweight exercises to accelerate metabolism and shed unwanted fat. Ideal for those looking to improve cardiovascular health while toning up.</p>
          </div>
          <div>
          <h4>Functional Fitness Bootcamp</h4>
          <p>Designed to improve everyday movement, this bootcamp focuses on agility, balance, and flexibility. Engage in dynamic exercises that enhance coordination and overall body strength.</p>
          </div>
          <div>
          <h4>Strength & Conditioning Bootcamp</h4>
          <p>Build muscle, enhance power, and improve overall strength with a mix of weight training, functional movements, and core workouts. Perfect for those looking to gain lean muscle and improve athletic performance.</p>
          </div>
          <div>
          <h4>High-Intensity Interval Training (HIIT) Bootcamp</h4>
          <p>Torch calories and boost endurance with fast-paced, high-energy workouts. This bootcamp combines short bursts of intense exercises with brief recovery periods to maximize fat burn and build stamina.</p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default WorkoutSessions;