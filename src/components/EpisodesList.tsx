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
    const listItems = data?.episodes?.results?.map((result: any) =>
    <li className="episodes">{result.episode}</li>
    );
    const names_list = data?.episodes?.results?.map((result: any) =>
    <li className="name">{result.name}</li>
    );
    const air_dates_list = data?.episodes?.results?.map((result: any) =>
    <li className="air_date">{result.air_date}</li>
    );
    const hl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hl_list = hl.map(() =>
    <li className="horizontal-line"></li>
    );
        return (
            <div>
                <ul id="episodes-list">{listItems}</ul>
                <div id="vl"></div>
                <ul id="names-list">{names_list}</ul>
                <ul id="air-dates-list">{air_dates_list}</ul>
                <ul id="hlines">{hl_list}</ul>
            </div>
        )
}

export default EpisodesList;