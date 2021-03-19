import React from 'react';

import SHOP_DATA from './shopdata';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collection: SHOP_DATA
        }            
    }

    render() {
        const {collection} = this.state;
        return(
            <div className='shop-page'>
                {
                    collection.map(({id, ...otherCollectionProps }) => {
                        return (
                            <CollectionPreview 
                                key={id} 
                                {...otherCollectionProps}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default ShopPage;