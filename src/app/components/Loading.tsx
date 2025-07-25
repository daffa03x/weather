const Loading = () => {
    return (
        <>
            <div className="loading-dots-container">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </div>
            <style jsx>{`
                .loading-dots-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f5f5f5;
                }

                .loading-dot {
                    width: 20px;
                    height: 20px;
                    margin: 0 5px;
                    background-color: #3498db;
                    border-radius: 50%;
                    animation: bounce 1.2s infinite ease-in-out;
                }

                .loading-dot:nth-child(1) {
                    animation-delay: -0.32s;
                }
                .loading-dot:nth-child(2) {
                    animation-delay: -0.16s;
                }

                @keyframes bounce {
                    0%,
                    80%,
                    100% {
                    transform: scale(0);
                    }
                    40% {
                    transform: scale(1);
                    }
                }
            `}</style>
      </>
    )
}

export default Loading