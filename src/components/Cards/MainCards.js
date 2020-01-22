import React, { Component } from "react";
import Cards from "./Cards";
import BarSearch from "../BarSearch/BarSearch";
import axios from "axios";

class MainCards extends Component {
    state = {
        // data: { recibeData: [] },
        recibeData: [],
        loading: false,
        error: null,
        showData: false,
        nextPage:
            "/api/courses?orderBy=popularity+desc&expand=provider&limit=24&",
        Searching: ""
    };

    componentDidMount() {
        this.fethIndata();
    }

    inputSearch = event => {
        const { value, id } = event.target;
        this.setState({ [id]: value });
    };

    fethIndata = async () => {
        this.setState({ loading: true });
        try {
            let peticion = axios.get(
                `https://test.mytablemesa.com${this.state.nextPage}name=${this.state.Searching}`
            );
            let respuesta = await peticion;
            this.setState({
                recibeData: this.state.recibeData.concat(respuesta.data.items),
                loading: false,
                showData: true,
                nextPage: respuesta.data.next
            });
        } catch (error) {
            this.setState({ error: error, loading: false });
            console.log(error.message);
        }
    };
    render() {
        console.log(this.state);
        if (this.state.loading) {
            return <h1>This is Loading</h1>;
        } else if (this.state.error) {
            return <h1>Meti las patas</h1>; //Ponerel componente de loader. importarlo
        } else if (
            this.state.recibeData === undefined ||
            this.state.showData === false
        ) {
            return "";
        } else if (this.state.recibeData) {
            return (
                <>
                    <BarSearch
                        fethIndata={this.fethIndata}
                        Searching={this.state.Searching}
                        inputSearch={this.inputSearch}
                    />
                    <Cards
                        recibeData={this.state.recibeData}
                        fethIndata={this.fethIndata}
                    />
                </>
            );
        }
    }
}
export default MainCards;
