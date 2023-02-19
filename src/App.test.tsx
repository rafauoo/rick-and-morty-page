import React from 'react';
import App from './App'
import Header from './components/Header'
import { render, screen, within, waitFor} from '@testing-library/react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import EpisodesList from './components/EpisodesList';
import { MockedProvider } from '@apollo/client/testing';

test("HEADER: should wirte LOREM on desktop version", () => {
    render(<Header />);
    const lorem = screen.queryByText("LOREM");
    const loremIpsum = screen.queryByText("LOREM IPSUM");
    expect(lorem).toBeInTheDocument();
    expect(loremIpsum).not.toBeInTheDocument();
});

test("HEADER: should wirte LOREM IPSUM on mobile version", () => {
    global.window.innerWidth = 500;
    global.window.dispatchEvent(new Event('resize'));
    render(<Header />)
    const lorem = screen.queryByText("LOREM")
    const loremIpsum = screen.queryByText("LOREM IPSUM");
    expect(lorem).not.toBeInTheDocument();
    expect(loremIpsum).toBeInTheDocument();
});

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

const wrongClient = new ApolloClient({
    uri: 'https:/',
    cache: new InMemoryCache(),
  });

test('renders correct number of items in episodes list (testing if API works)', async () => {
    render(
    <ApolloProvider client={client}>
        <EpisodesList />
    </ApolloProvider>
    );
    await waitFor(() => {
        const list = screen.getByRole("list", {
            name: /episodes/i,
        })
        const { getAllByRole } = within(list)
        const listItems = getAllByRole('listitem');
        expect(listItems.length).toBe(10); 
    });
});

//MOCKING
const { GraphQLError } = require('graphql');

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

const mocksWrong = [
    {
        request: {
        query: GET_EPISODES,
        },
        result: {
            errors: [new GraphQLError("Error!")],
        },
    },
];

test('renders error when API does not work)', async () => {
    render(
    <MockedProvider mocks={mocksWrong}>
        <EpisodesList />
    </MockedProvider>
    );
    await waitFor(() => {
        const error = screen.queryByText("Error occured while loading data");
        expect(error).toBeInTheDocument();
    });
});

const mocks = [
    {
        request: {
          query: GET_EPISODES,
        },
        result: {
          data: {
            episodes: {
              results: [
                { episode: 'S01E01', name: 'Episode 1', air_date: '2021-01-01' },
                { episode: 'S01E02', name: 'Episode 2', air_date: '2021-01-08' },
              ],
            },
          },
        },
    },
];
  
test('renders normally when API does work)', async () => {
    render(
    <MockedProvider mocks={mocks}>
        <EpisodesList />
    </MockedProvider>
    );
    await waitFor(() => {
        const list = screen.getByRole("list", {
            name: /episodes/i,
        })
        const { getAllByRole } = within(list)
        const listItems = getAllByRole('listitem');
        expect(listItems.length).toBe(2);
    });
});