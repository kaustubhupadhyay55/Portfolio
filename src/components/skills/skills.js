import React from 'react'
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
        <section className="skillTitle">Projects</section>
        <section className="skillDesc">I pay attention to smallest details and make sure my work is pixel perfect. These things makes my projects good in all aspects</section>
        <div className="skillbars">
            <div className="skillbar">
                <div className="skillbartext">
                    <h2>Movie App | Individual Project |<a href='https://github.com/kaustubhupadhyay55/movie-app/tree/main/Movie%20App'><i className='source'>source</i></a></h2>
                    <ul>
                        <li>Tech Stack –HTML5, CSS, JavaScript, TMDB API</li>
                        <li>Summary – A site where you can watch the trailers of various movies by choosing genre</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="skillbars">
            <div className="skillbar">
                <div className="skillbartext">
                    <h2>Blogging Site | Individual Project |<a href='https://github.com/kaustubhupadhyay55/Bloggingsite-'><i className='source'>source</i></a></h2>
                    <ul>
                        <li>Tech Stack –HTML5, CSS</li>
                        <li>Summary- Website involves creating and reading the published Blogs of different Niche</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="skillbars">
            <div className="skillbar">
                <div className="skillbartext">
                    <h2>House Price Prediction | Group Project(Team Size-4) |<a href='https://github.com/kaustubhupadhyay55/house_price_prediction'><i className='source'>source</i></a></h2>
                    <ul>
                        <li>Tech Stack –HTML5, CSS, JavaScript, Python(Scikit-learn, regression algorithm, Flask Server)</li>
                        <li>Summary- Machine Learning based project where we can get estimated price of property by choosing different areas and parameters.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
