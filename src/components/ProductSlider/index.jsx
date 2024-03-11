import Carousel from 'react-elastic-carousel';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductSlider extends Component {
    state = {
        items: [
            { id: 1, image: '/flowers/rose.jpg' },
            { id: 2, image: '/flowers/lily.jpg' },
            { id: 3, image: '/flowers/rose.jpg' },
            { id: 4, image: '/flowers/lily.jpg' },
            { id: 5, image: '/flowers/rose.jpg' },
            { id: 6, image: '/flowers/lily.jpg' },
        ]
    }


    render() {
        const { items } = this.state;
        return (
            <Carousel itemsToShow={3} >
                {items.map(item => <div key={item.id}>
                    <p>{item.name}</p>
                    <Link to='/Products'><img src={item.image} alt={item.name} height={300} width={400} /></Link>
                </div>)}
            </Carousel>
        )
    }
}
export default ProductSlider;