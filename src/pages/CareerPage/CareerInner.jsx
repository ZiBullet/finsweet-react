import { useParams } from "react-router-dom"
import CareerInnerTop from "./CareerInnerTop"


const CareerInner = ({ jobs }) => {
    const { id } = useParams();
    const selectedJob = jobs.find(job => job.id == id);

    return (
        <main className="main">
            <CareerInnerTop selectedJob={selectedJob} />
        </main>
    )
}

export default CareerInner