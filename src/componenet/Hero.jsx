import heroImg from '../assets/Images/bird.jpg'

const Hero = () => {
  return (
    <section className='section-hero' id='hero'>
        <div className="hero-text">
            <div className="hero-header">
                This is about our site
            </div>
            <p className="hero-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe,
                 optio qui soluta placeat aut, dolorum provident perferendis nisi quas dolor
                  ab unde similique repellendus harum ratione numquam. Blanditiis, porro?
            </p>
        </div>
        <div className="hero-img">
            <img src={heroImg} alt="hero-img" />
        </div>
    </section>
  )
}

export default Hero