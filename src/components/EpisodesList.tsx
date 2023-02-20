import React from "react";
import './EpisodesList.css';
import { useQuery, gql } from '@apollo/client';


const GET_EPISODES = gql`
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
function EpisodeName({name, blue}: any) {
    return blue ?
    <span className="episode-name" style = {{color: '#BDD800'}}>{name}</span> :
    <span className="episode-name" style={{color: '#00BDD4'}}>{name}</span>
}

function Episode({data, index}: any) {
    return (
        <li className="episode-data" key={index}>
            <span className="episode-ep">{data.episode}</span>
            <EpisodeName name={data.name} blue={index%2} />
            <span className="episode-air-date">{data.air_date}</span>
        </li>
    )
}

function EpisodesList() {
    const { loading, error, data } = useQuery(GET_EPISODES);
    if (error) {
        return (
            <span className="episodes" id="episodes-list">Error occured while loading data</span>
        )
    }
    const listItems = data?.episodes?.results?.map((result: any, index: number) =>
        <Episode data={result} index={index}></Episode>
    );

    const hlines: JSX.Element[] = [];
    for (let i = 0; i < data?.episodes?.results?.length - 1; i++) {
        hlines.push(<li className="horizontal-line" key={i} />);
    }
    return (
        <div>
            <div id="vl"></div>
            <ul id="hlines">{hlines}</ul>   
            <ul id="episodes-list" aria-label="episodes">{listItems}</ul>
        </div>
    )
}

export default EpisodesList;