import React from "react"
import Playlists from "./Playlists"

const Categories = () => {


        const dataCategories = [
            {
                id: 1,
                name: 'Yakında Çalanlar'
                
            },
            {
                id: 2,
                name: 'Tavsiyeler'
            },
            {
                id: 3,
                name: 'Beğendiklerin'
            },
            {
                id: 4,
                name: 'Category 4'
            },
        ]
    return (
        <div>
            {dataCategories.map(category =>(
 <div className="cardsWrap">     
 <h2> {category.name}</h2>
 <p className="subText">Sevdiğin her şeyden biraz dinle.</p>
 <Playlists category_id = {category.id} />

 
         </div>
            ))}
            
        </div>
       
    )
}

export default Categories