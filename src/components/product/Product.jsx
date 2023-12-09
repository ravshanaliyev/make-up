import React, { useEffect, useState } from 'react'
import { Card, Container } from '../../utils/Utils';
import { connect, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { loadProducts } from '../../redux/actions/product-actions'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Product.scss'
import { Link } from 'react-router-dom';

const Product = ({ loadProducts }) => {
    const [loading, setLoading] = useState(false);
    const data = useSelector(state => state.product_data.products);
    useEffect(() => {
        loadProducts("?product_category=concealer&product_type=foundation")
    }, [loadProducts])
    return (
        <div className="products__wrapper">
            <h2 className="products__wrapper-title">SCIENCE POWERED SKINCARE</h2>
            <Container>
                <Swiper
                    cssMode={true}
                    keyboard={true}
                    navigation={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <div className="cards__wrapper">
                        {loading ? (
                            <Skeleton amount={8} />
                        ) : (
                            data.map((product) => {
                                return (
                                    <SwiperSlide className="card-slide" key={product.id}>
                                            <Card
                                                key={product.id}
                                                id={product.id}
                                                image={product.image_link}
                                                title={product.name}
                                                description={product.description.length > 30 ? product.description.slice(0, 30) + "..." : product.description}
                                                desc={product.description}
                                                price={product.price}
                                                product={product}
                                            />
                                    </SwiperSlide>
                                );
                            })
                        )}
                    </div>
                </Swiper>
            </Container>
        </div>
    )
}

export default connect(null, { loadProducts })(Product)