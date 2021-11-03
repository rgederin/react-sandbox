import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail"
import youtube from "./api/youtube";


const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('table tennis');
    }, []);


    const onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: { q: term },
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelected = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={onVideoSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default App;