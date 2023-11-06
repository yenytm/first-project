import './hero.css'

export function Hero(){
    return (
        <div className='midBody'>
            <div className="leftBody">
                <h3>November's Book Club Pick:</h3>
                 <h2>Iron Flame </h2> 
                 by Rebecca Yarros
                 
            </div>
            <div className="rightBody">
                <a target='_blank' href="https://www.goodreads.com/book/show/90202302-iron-flame?from_search=true&from_srp=true&qid=jwDEdtvEtH&rank=1">
                <img className='monthlyBook' src="https://images.squarespace-cdn.com/content/v1/6398d94cae7504477c095dde/1695521573136-LW5SF1H9Z4UCT69IGLO4/Yarros_Iron+Flame.png?format=1000w" />


                </a>
            </div>


        </div>
    )
}