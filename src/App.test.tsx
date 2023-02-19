import React from 'react';
import App from './App'
import Header from './components/Header'
import { render, screen } from '@testing-library/react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });

test("should wirte LOREM on desktop version", () => {
    render(<Header />);
    const lorem = screen.queryByText("LOREM");
    const loremIpsum = screen.queryByText("LOREM IPSUM");
    expect(lorem).toBeInTheDocument();
    expect(loremIpsum).not.toBeInTheDocument();
});

test("should wirte LOREM IPSUM on mobile version", () => {
    global.window.innerWidth = 500;
    global.window.dispatchEvent(new Event('resize'));
    render(<Header />)
    const lorem = screen.queryByText("LOREM")
    const loremIpsum = screen.queryByText("LOREM IPSUM");
    expect(lorem).not.toBeInTheDocument();
    expect(loremIpsum).toBeInTheDocument();
});
