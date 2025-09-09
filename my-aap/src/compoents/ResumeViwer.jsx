

const ResumeViwer = () => {
    return (
        <div className="pdf-viwer-container">
        <div className="pdf-viwer-container-iframe">
            <iframe 
            src="/resume/Caio-Nepomuceno-CV-2025.pdf"
            width='100%'
            height='100%'
            style={{ border: 'none' }}
            title="Resume"
        />
        </div>
    </div>
    )
}

export default ResumeViwer;