import PositionsItem from "./PositionsItem"

const Positions = ({ jobs }) => {
    return (
        <section className="positions">
            <div className="positions__wrap container">
                <div className="positions__boxes">
                    {
                        jobs && jobs.map(
                            job =>  job.placesAvailable && (
                            <PositionsItem job={job} key={job.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Positions