import React from "react";
import './EpisodesList.css';
import { useQuery, gql } from '@apollo/client';


const GET_LOCATIONS = gql`
query {
    episodes(filter: {episode: "S04"}) {
          results {
            name
        episode
        air_date
          }
    }
  }
`;

function EpisodesList() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    console.log("loading", loading);
    console.log("error", error);
    console.log(data);
    const listItems = data?.episodes?.results?.map((result: any, index: number) =>
    <li className="episodes" key={index}>{result.episode}</li>
    );
    const names_list = data?.episodes?.results?.map((result: any, index: number) =>
    <li className="name" key={index}>{result.name}</li>
    );
    const air_dates_list = data?.episodes?.results?.map((result: any, index: number) =>
    <li className="air_date" key={index}>{result.air_date}</li>
    );
    const hlines: JSX.Element[] = [];
    for (let i = 0; i < data?.episodes?.results?.length - 1; i++) {
        hlines.push(<li className="horizontal-line" key={i} />);
    }
    return (
        <div>
            <ul id="episodes-list">{listItems}</ul>
            <div id="vl"></div>
            <ul id="names-list">{names_list}</ul>
            <ul id="air-dates-list">{air_dates_list}</ul>
            <ul id="hlines">{hlines}</ul>
        </div>
    )
}

export default EpisodesList;