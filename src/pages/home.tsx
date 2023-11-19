import React from 'react';
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import API_BASE_URL from '../App_config';

function ReactQueryClient(){
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Home />
        </QueryClientProvider>
    );
}

function Home(){
    const {data: posts, isLoading, isError} = useQuery({
        queryKey: ['postData'],
        queryFn: () => axios.get(`${API_BASE_URL}/api/posts`).then(res => res.data)
    });

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(isError){
        return <div>Error</div>;
    }

    if(posts && posts.length > 0){
        console.log(posts)
    }

    return (
        <div></div>
    );
}

export default ReactQueryClient;