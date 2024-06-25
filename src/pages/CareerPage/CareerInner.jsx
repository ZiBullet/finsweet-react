import { useParams } from "react-router-dom";
import CareerInnerTop from "./CareerInnerTop";
import CareerInnerContent from "./CareerInnerContent";


const CareerInner = ({ jobs, showInnerContentHandler }) => {
    const { id } = useParams();
    const selectedJob = jobs.find(job => job.id == id);

    return (
        <main className="main">
            <CareerInnerTop selectedJob={selectedJob} />
            <CareerInnerContent
                selectedJobContent={selectedJob.content}
                showInnerContentHandler={showInnerContentHandler}
            />
        </main>
    )
}

export default CareerInner