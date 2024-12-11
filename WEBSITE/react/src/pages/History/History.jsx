import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import "./History.css";

const History = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/history", {
                    method: "GET",
                    credentials: "include",
                });

                const data = await response.json();

                if (data.success) {
                    setImages(data.images);
                } else {
                    setError(data.message || "Failed to fetch history.");
                }
            } catch (error) {
                console.error("Error fetching history:", error);
                setError("An error occurred while fetching history.");
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    const downloadImage = (base64, index) => {
        const link = document.createElement("a");
        link.href = base64;
        link.download = `image_${index + 1}.jpeg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleImageClick = (base64) => {
        setExpandedImage(base64);
    };

    const handleCloseModal = () => {
        setExpandedImage(null);
    };

    if (loading) {
        return <div className="history-container">Loading history...</div>;
    }

    if (error) {
        return <div className="history-container">{error}</div>;
    }

    return (
        <div className="history-container">
            <Navbar />
            <br></br>
            <div className="container history mt-5">
                <h2 className="text-center mb-4">History of Generated Images</h2>
                <div className="cardContainer">
                    {images.length > 0 ? (
                        images.map((base64, index) => (
                            <div className="blockImg" key={index}>
                                <div
                                    className="zoom-container"
                                    onClick={() => handleImageClick(base64)}
                                >
                                    <img
                                        className="mainImg"
                                        src={base64}
                                        alt={`Generated Image ${index + 1}`}
                                    />
                                </div>
                                <button
                                    className="download-btn"
                                    onClick={() => downloadImage(base64, index)}
                                >
                                    Download
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No images found in your history.</p>
                    )}
                </div>

                {/* {expandedImage && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content">
                            <img src={expandedImage} alt="Expanded View" />
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default History;
