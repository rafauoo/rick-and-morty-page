import React from "react";
import './EpisodesList.css';

function EpisodesList() {
    const numbers = ["S04E01", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listItems = numbers.map((number) =>
    <li className="episodes">{number}</li>
    );
    const names = ["Edge of Tomorty: Rick, Die, Rickpeat", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ"];
    const names_list = names.map((number) =>
    <li className="name">{number}</li>
    );
    const air_dates = ["November 10, 2019", 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const air_dates_list = air_dates.map((number) =>
    <li className="air_date">{number}</li>
    );
    const hl = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hl_list = hl.map((number) =>
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