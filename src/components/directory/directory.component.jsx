import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import'./directory.style.scss'


class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections:[{
                title: 'HATS',
                imageurl :'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
               {
                title: 'JACKETS',
                imageurl :'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2   
               },
               {
                title: 'sneakers',
                imageurl :'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3   
               },
               {
                title: 'womens',
                imageurl :'https://i.ibb.co/GCCdy8t/womens.png',
                id: 4 ,
                size: 'large' 
               },
               {
                title: 'mens',
                imageurl :'https://i.ibb.co/R70vBrQ/men.png',
                id: 5 ,
                size: 'large'  
               },
        ]
        }

    }
    render(){
        return <div className="directory-menu">
            {
                this.state.sections.map(({title, imageurl, id, size}) =>(
                    <MenuItem key={id} title={title} imageurl={imageurl} size={size}/>
                ) )
            }
        </div>
    
    }


}

export default Directory;