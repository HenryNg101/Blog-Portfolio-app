import React from "react";
import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

function ReactQueryClient(){
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Resume />
        </QueryClientProvider>
    );
}

function Resume(){
    const {data: result, isLoading, isError} = useQuery({
		queryKey: ['releaseData'],
		queryFn: () => axios.get(`https://api.github.com/repos/HenryNg101/HenryNg101/releases/latest`).then(res => res.data)
	});

    if(isError){
        console.log("Error")
    }

    if(isLoading){
        console.log("Loading...")
    }

    if(result){
	    const fileUrl = result.assets[0].browser_download_url
        // console.log(fileUrl)
        // fetch(fileUrl, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/pdf'
        //     }
        // })
        //     .then(data => console.log(data.blob()))
        //     .catch(err => console.log(err))
	}
    return <div></div>;
}

export default ReactQueryClient;