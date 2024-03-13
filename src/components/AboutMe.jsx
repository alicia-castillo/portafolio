import me from '../../public/assets/me.JPEG'

export const AboutMe = () => {
  return (
    <>
    <div className='aboutMe'>
    <h1>About me</h1>
      <div className='row'>
        <div className='col-12 col-sm-7'>
          <p className=''>
            I'm an informatics engineer with a special passion for web development.
            From day 1, I knew my path was on the web, I always had a special kind of love for it.
            I graduated in 2019 and even before that I was alrealy working in some projects with my friends.
            The first few projects were just to get some experience, my first tecnologies were php, javascript, html and css 
            Througout my professional path I've worked with many different technologies, when I got the opportunity to work with something new, I'd take it,
            I enjoy the process of learning just as much as I enjoy de development part
            that drove me to work with a lot of technologies.
          </p>
        </div>
        <div className='col-12 col-sm-5'>
          <img className='me' src={me}/>
        </div>
      </div>
    </div>
    </>
  )
}
