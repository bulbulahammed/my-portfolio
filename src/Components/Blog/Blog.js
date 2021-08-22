import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blog.css';
import BlogOne from '../../images/Blog-1.png';
import BlogTwo from '../../images/Blog-2.png';
import BlogThree from '../../images/Blog-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, fas } from '@fortawesome/free-solid-svg-icons';
import longArrow from '../../images/Vector.svg';

const Blog = () => {
    return (
        <div id="blog">
            <div className="container blog-container">
                <div className="row justify-content-center section-title">
                    <div className="col-md-3">
                        <h3>My Blogs</h3>
                        <p>Some of my Projects</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 single-blog">
                        <Card>
                            <Card.Img variant="top" src={BlogOne} />
                            <Card.Body>
                                <Card.Title><h4>Blog Title</h4></Card.Title>
                                <Card.Text>
                                    <p> There are many variations of passages of Lorem Ipsum available, but the
                                        majority have There are many variations of
                                        passages of Lorem Ipsum available, but the</p>
                                </Card.Text>
                                <div className="blog-link">
                                    <a href="#">
                                        <img src={longArrow} alt="" />
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 single-blog">
                        <Card>
                            <Card.Img variant="top" src={BlogTwo} />
                            <Card.Body>
                                <Card.Title><h4>Blog Title</h4></Card.Title>
                                <Card.Text>
                                    <p> There are many variations of passages of Lorem Ipsum available, but the
                                        majority have There are many variations of
                                        passages of Lorem Ipsum available, but the</p>
                                </Card.Text>
                                <div className="blog-link">
                                    <a href="#">
                                        <img src={longArrow} alt="" />
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 single-blog">
                        <Card className="card">
                            <Card.Img variant="top" src={BlogThree} />
                            <Card.Body>
                                <Card.Title><h4>Blog Title</h4></Card.Title>
                                <Card.Text>
                                    <p> There are many variations of passages of Lorem Ipsum available, but the
                                        majority have There are many variations of
                                        passages of Lorem Ipsum available, but the</p>
                                </Card.Text>
                                <div className="blog-link">
                                    <a href="#">
                                        <img src={longArrow} alt="" />
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;