import './footer.css'

function Footer() {
    return(
        <footer className="bg-primary bg-gradient text-light p-3 d-flex justify-content-between">
            <h2 className="fs-6">© 2026 Healthy Store</h2>

            <nav className="d-flex gap-3">
                <div className="d-flex flex-column gap-2">
                <a className="text-white" href="#">Home</a>
                <a className="text-white" href="#">About</a>
                </div>

                <div className="d-flex flex-column gap-2">
                <a className="text-white" href="#">Contact</a>
                <a className="text-white" href="#">Catalog</a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;