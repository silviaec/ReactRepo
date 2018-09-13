import React, { PureComponent } from 'react';

class Tags extends PureComponent {

render(){

    const { tags } = this.props;

    return(

        <p>Tags: {tags.map ((tag) => <span>{tag} / </span>)}</p>

    );
}


}


export default Tags;