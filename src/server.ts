import app from "./app"

const port = parseInt(process.env.PORT) || 3000;
const secret = process.env.SECRET;

app.listen(port, () => console.log(`Server running on port ${port}!!`))
