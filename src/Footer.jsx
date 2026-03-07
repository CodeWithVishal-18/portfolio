export default function Footer() {
    return (
        <footer className={`py-3 text-center small bg-dark text-light border-top border-secondary`}>
            Built with <i className="bi bi-heart-fill text-danger"></i> by {" "}
            <a href="https://github.com/CodeWithVishal-18" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none">
                <i className="bi bi-github me-1"></i>Vishal
            </a>
        </footer>
    )
}
