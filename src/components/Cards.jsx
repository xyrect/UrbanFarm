import React, { useState, useEffect } from 'react';
import '../components/cards.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Cards() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Ambil artikel dari API Express.js saat komponen dimount
        fetch('http://localhost:3001/api/articles')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Error fetching articles:', error));
    }, []);

    return (
        <Container fluid="md">
            <div class="cards">
                {articles.map((article) => (
                    <a href={article.sumber} target="_blank" rel="noopener noreferrer" key={article.id}>
                        <div className="cards3">
                            <img src={article.gambar} alt="Card Image"></img>
                            <div className="overlay">
                                <h6>{article.tanggal}</h6>
                                <p>{article.judul}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Container>
    );
}

export default Cards;
