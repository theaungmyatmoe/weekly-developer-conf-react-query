'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const Page = () => {
    const {
        data,
        isLoading,
        isSuccess,
        isError,
    } = useQuery(['todos'],
        () => axios.get('https://jsonplaceholder.typicode.com/toddos')
            .then(res => res.data))
    return (
        <div>
            {isSuccess && JSON.stringify(data)}
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error</div>}
        </div>
    );
};

export default Page;
