import "./test.css"

export const Test = () => {
    return (
        <div id="home" className="home-container">
            <nav>
            <a href="#page-1">1</a>
            <a href="#page-2">2</a>
            <a href="#page-3">3</a>
            </nav>
            <section>
            <div id="page-1">1</div>
            <div id="page-2">2</div>
            <div id="page-3">3</div>
            </section>
        </div>
    )
}