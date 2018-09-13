import React, { PureComponent } from 'react';
import Friends from './friends';
import Tags from './tags';


class Usuario extends PureComponent {

        render(){
            const { 
                name, 
                email, 
                friends, 
                tags, 
                eyeColor, 
                about, 
                picture, 
                gender,
                age,
                registered,
                phone,
                address,
                balance,
                company,
                isActive
                } = this.props.datos;
            
            
            return(
               
                /*else{
                    <img src="data:image/jpeg;base64,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"></img>
                }*/
               
              <article>

                <h2> 
                <img src={ picture }></img>
                {name} 
                </h2>
                <p> Acerca de mi:<span style={{color: 'grey'}}> {about} </span></p>
                <p> Género: { gender } Edad: { age }</p>
                <p>E-mail:<a href={email}>{email}</a></p>
                <p>Dirección: { address }</p>
                <p>Teléfono: { phone }</p>
                <p>Lista de amigos:<Friends friends={friends}> </Friends></p>
                <Tags tags={tags}> </Tags>
                <p>Ojos: <span style= {{ background: eyeColor}}>:)</span></p>
                <p> Fecha y Hora de registro: { registered } </p>
                <p>Balance: { balance }</p>
                <p>Compañía: { company }</p>
                <p>Activo: { isActive }</p>
                
      {isActive &&
        
         <img src='data:image/jpeg;base64,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'style= {{ width: 50}}></img>
        
      }

         {isActive == false && 
         <img src= 'http://www.stickpng.com/assets/images/5897ac7ecba9841eabab6167.png' style= {{ width: 50}}></img>
         }
                

                
               
                
          
            
            
                <hr/>


              </article>  

            );

        }

}

export default Usuario;