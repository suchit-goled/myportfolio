
function GitHubStats() {
    return (

        <section
            id="github"
            className="github-stats"
        >

            <h2>GitHub Statistics</h2>


            <div className="stats-grid">

                <img
                    src="https://github-readme-stats.vercel.app/api?username=suchit-goled&show_icons=true&theme=transparent"
                    alt="GitHub Stats"
                />

                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=suchit-goled&layout=compact&theme=transparent"
                    alt="Top Languages"
                />

            </div>

        </section>
    );
}

export default GitHubStats;