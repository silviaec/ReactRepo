import React, { PureComponent } from 'react';

class Friends extends PureComponent {

render(){

    const { friends } = this.props;

    return(

        <table >
            <td>
            {friends.map ((friend) => <tr>-{friend.name}</tr>)}
            </td>
            </table>
    );
}


}


export default Friends;