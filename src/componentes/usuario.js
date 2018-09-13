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
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADkQAAEDAgMEBwQKAwEAAAAAAAEAAgMEEQUSMQYhQVETFDJhcYGRIkLR8BYjM1JTYqGxweFUcoIV/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQFBgf/xAAzEQACAQMCBAMGBQUBAAAAAAAAAQIDBBEhMQUSQVEiYXETFVKhsdEGM0KBkRZiweHwNP/aAAwDAQACEQMRAD8A9xQAgBACAjlnihF5ZGMHNzrLCdSEFmTSMoxlLZFSTGcOjF3VcR/1Ob9lqS4laR3qL6/QtVrWf6Su7aPDW6Svd4RlUPjVmv1fJlisq3b5ojdtPQDRszvBo+KqfHbVd/4MlYVfIYdqqThT1Ho34qv+oLf4X8vuZe76ndDDtXTf403qFH9QUfgfyMvd0/iQv0ojI9ijnPoof4gpdIMe7pdZIYdpX33YfJ5u/pYP8QR6U3/JK4f/AHFzD8ep6uUQSRvglPZa/Q+a3bTi9G4lyPwvzKK1nOmuZao1wusagIAQEFVVwUkfSVEgY3v4+CprV6dCPPUeEZwpyqPEVkyZ9qKJoPRMlkI03WC5VTjttFeFNm3Hh9V7tIx6rGMQrOzJ0EZ0bHr66rg3PGrmtonyry+5v0rKlDdZ9SgYg52Z5LnHUkrlyqSm8tm2klohwjaPdCwywLkHIITkbIcjSQiWRkY2PNYvNyVOewLcMbRoAFnHUqkyyrCsEBXrWgwl17ObvBTzMo7nZYfK6ehp5n9p8bXHxIX0G2qOpRhN7tJnAqxUZuK6MsK8wEJsgOExCqdiFbJM8kxglsbeAC+f8Su5XFdyzp09D0NtRVKGCrO3c3xWjEvZO1tgFiB2VTgjIZUwMhlTBGRr4w5pBUk5K5c6I5XWdbkU5ck5JWVD/cjJUrQxaySiaqdpE1Z8xhyoXPWfhs+fNTlkeEjnNS9lpI7M97LyRPXUlY6HaYVVU9VRsdS9hoDcp1bbgvfWVxSrUU6Wy0x28jg1qc4TanuXFtlQh4IDzumH1fmvmMtz1BMWZi3uN0RDZIAmCMjrKcGORHlrG3cbBTgCNfG7svBTAG1BLIi4apglEEbAAOfNYNlmCzG26mKK5MsAAcFbgqFUgEBY2feYcZfC0+xLHmI7x8ldvgVRxuHDo19DVvYp0lLsdUvWnJEPBAee0n2XmvmT3PTssgIYtjwFlgxyOAU4IyKGpgjJDNSskGmV33gmCVLBRe6SImKTe3kf4UFi11APLALODm8uIWLimSmSsqbatKhLAayTNroxqHeisTK3AXr0XBrz5KckcjA1hI9iCQ+ITI5fM09leikqpppJB1m1hHa1m8SvQcAjS55Sb8XbyNG/5lFJLQ6lepOWIeCA8/oh9V5r5mz00ty2ApSMMjgFlgxY5SQCAEBWrog+Eutvbvv3KGZReGVImjKDbeVTJl6LMbQUSMJMsNaANFckVNj1JAICCaQ0s8NXH243i/eOStoVnQqxqLow4qcXB9TuAvoZ58DwQHA0G+AeK+aHpJblsBZGDY5SQCAEAIBku+J9/ulGFuZccmQWO8KpxybCZPHUMHFQk0Q1kssqY7b3t9VmpFbix3WIfxG+qyyY8rENXAB9oPIXTI5WSUNM/FquNrWHqzHXkeRuPcuhw6yndVVp4Vv9iqvWVGD7naL3JwxCLoDiq2ndhVW+ORp6u9143gbrcl4XiFlK1qvTwvY7tGqq0E1v1HMkZILscHeC0TNprccgBACAEBDVuy07zzFh5qHsTHcoxxgAEi5KpbZsYLLIWO7TQsoowkyTqkPFg9VZgr5mL1aH8MKcIjmY2Wkjc28YyvG8WTbVEqT6nUYBVmsw2N7wA9pLXWFt4XuOGXDuLaMnvszi3VL2dVpbGkuga4IBkkbJWFkjWuadQ4XBWMoxmsSWUSm08oyqzZ2im9qEGnk4GPT0XLuODW1XWK5X5fY26d7Vho9UYtXRV+HgulZ08A1kZqPFeeu+GV7bxbx7r/Jv0rilV0WjGRSslbeNwPMclzi5prcehAICOeITRlhNuRRkp4ZQzGJ2SQWIVMol6eSzDK06EeqJ4MZIshwKtTKsCqSBk0rYmFzvIc0JSbN/ZmmfT4Y0yCzpXF9jyOi9pwehKjarm3epybyanV06GsuoagIAQAgEsgMTFcBZNeeitDUDfYbmu+C4t9wenWTnS8MvkzdoXkoeGeqMSGRxc6KVuSZhs9pXk5wlCTjNYaOnpjK2JViAQD8JbG7G+jmY17ZISAHC4PzZdTg6hK65ZrKaZRdcyo5j0ZtTbP4dKb9BkP5HEfovRT4RZz15MejZoRvKy6lc7L0fuyzt8HD4LWfAbV7Nr/vQsXEKvVIT6LUnGoqD/wBD4KPcFv8AFL5fYn3hU7InptnaCCQSFr5SNBI649FfR4Na0pc2M+pXO9qyWNvQ1xuXVNQEAIAQAgBACAwNp6G8Yr4BaWLt295v9Lg8bslUp+3jut/T/Rv2VbD9m9mZTHh7A9uhF15U6OMaDkBE+Xq1XTVQ0jkGbw4/yr7Wr7GvGp2fy6kThzwlHuduN4X0E4AIAQAgBACAEAIAQAgBANkY2SNzHi7XAgjuUSipJxezJTw8o4ilaYjLA43MUhavndSHs5yh2bX8HoHLmSl3J1gQQ1bc9O8chdCYvDOqwac1GGU8hN3Flj4jcf2XvLCr7W2hPy+mhxLiHJVki8twpBACAEAIAQAgBACAEAHRAcXMMuLVw4dKT+pXguILF3U9Tu0vyYeg5ahmI+2Q35IDb2Vv/wCPHfTM63qvZcF/8cf3+py7785/sbC6xpggBACAEAIAQAgBACADogOMqt2M1w/PdeE4ksXdT1O5R/JgKtIsIbSVswpKQZnu7TuDQraFCdxUVOC1YlJU488jsaOnZSU0cEfZY21+fevfUKMaNONOOyOFUm6k3J9SdWmAIAQAgBACAEAIAQAgBAZWJYJTVsnTZnxTffZx8lzLzhVG6lzvSXdG1Ru50ly7opN2ZBNpq2V7OQFlox/D9NPxTeC98QfSJs0VDT0UeSmjDRxOpPiV2be1pW8eWmsGlUqzqvMmWVsFYIAQAgBACA//2Q=="></img>
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
                <p>Activo:</p> {if({ isActive } ="true");}
                {
                <img src="https://previews.123rf.com/images/wektorygrafika/wektorygrafika1709/wektorygrafika170900046/85204269-mano-pulgar-arriba-dise%C3%B1o-de-icono-de-s%C3%ADmbolo-de-vector-de-dibujos-animados-hermosa-ilustraci%C3%B3n-aislada-sobr.jpg" style={{width:40}}></img>
                }
            
                
          
            
            
                <hr/>


              </article>  

            );

        }

}

export default Usuario;