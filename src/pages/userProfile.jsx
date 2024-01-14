import Footer from "../components/Footer";

const userProfile = () => {
    return ( 
        <>
            <div class="container " style={{minHeight: '60vh'}}>
            <h1 class="text-center mt-5">Profile</h1>
            <div class="d-flex justify-content-center mt-5">
            <a href="report.pdf" class="btn btn-outline-secondary ">Скачать отчет (PDF)</a>
            <a href="report.docx" class="btn btn-outline-secondary ms-2">Скачать отчет (DOCX)</a>
            </div>
        </div>
        <Footer/>
        </>
     );
}

export default userProfile;