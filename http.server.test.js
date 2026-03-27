/* eslint-disable no-undef */
import http from "node:http";
import pc from "picocolors";

const PORT = process.env.PORT || 3000;

const ProcessRequest = (req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") {
        res.writeHead(200, { "Content-Type": "text/html, charset=UTF-8" });
        res.end("<h1>Hello, World! First Page</h1>");
    } else if (method === "GET" && url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html, charset=UTF-8" });
        res.end("<h1>About Page</h1><p>This is the about page.</p>");
    } else if (method === "GET" && url === "/bd") {
        res.writeHead(200, { "Content-Type": "text/html, charset=UTF-8" });
        res.end("<h1>Base de Datos</h1><p>Conexión exitosa a la base de datos.</p>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html, charset=UTF-8" });
        res.end("<h1>404 Not Found</h1><p>vamos despegandola de aquí baboso</p>");
    }
}

const server = http.createServer(ProcessRequest);

server.listen(PORT, () => {
    console.log(`Server running at ${pc.cyan(`http://localhost:${PORT}`)}`);
});