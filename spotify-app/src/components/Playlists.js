import React from "react"
import { ReactComponent as playIcon} from '../svgs/play.svg'


const Playlists = (props) => {

    const dataPlaylist = [
        {
            id:101,
            category_id: 3,
            img: "image/cover picture (1).jpg",
            name: 'Home playlist'
        },
        {
            id:102,
            category_id: 3,
            name: 'Daily Mix v1'
        },
        {
            id:103,
            category_id: 3,
            name: 'Daily Mix v2'
        },
        {
            id:104,
            category_id: 1,
            name: 'Daily Mix v3'
        },
        {
            id:105,
            category_id: 4,
            name: 'Daily Mix v4'
        },
        
    ]

    const matchedPlaylists = dataPlaylist.filter(Playlists => Playlists.category_id === props.category_id)
    return (
        
        <div className="cardsWrapInner">

            {matchedPlaylists.map(Playlists => (
 <div className="card">
 <div className="cardImage">
  <img
   src="image/cover picture (3).jpg"
    alt=" resim-1"
   
   />
  </div>
  <div className="cardContent">
      <h3>Daily Mix v1</h3>
      <span>Çalma listesi açıklaması.</span>

  </div>
  <span className="playIcon">
      <playIcon />
  </span>


</div>
            ))}
        
            <div className="card">

            <div className="cardImage">
            <img src="image/cover picture (1).jpg" alt=" resim-1" />
            </div>
            <div className="cardContent">
                <h3>{Playlists.name}</h3>
                <span>Çalma listesi açıklaması.</span>

            </div>
            <span className="playIcon">
                <playIcon />
            </span>


            </div>
        </div>



    )
}

export default Playlists