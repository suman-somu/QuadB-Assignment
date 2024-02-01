import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../Components/MovieCard";

const url = "https://api.tvmaze.com/search/shows?q=all"

//movies API call method
const getMovies = async () => {
    try {
        const response = await axios.get(url)
        console.log('response:-', response);
        return response.data
    } catch (error) {
        console.log('error while getting movies:-', error);
    }
}

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        // call getMovies function to get movies data
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    console.log("MoviesPage Component:-", movies);


    return (
        <Container  >
            <Row>
                {
                    movies.map((movie) => {
                        return (
                            <Col className="mt-4">
                                <MovieCard key={movie.show.id} movie={movie} />
                            </Col>
                        )

                    })
                }
            </Row>
        </Container>
    )
}

export default MoviesPage;