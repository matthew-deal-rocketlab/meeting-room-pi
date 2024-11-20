import app from "./src/app";
import config from "./src/config";

const server = app.listen(config.port, () => {
  console.log(`\n🚀 Server is running at http://localhost:${config.port}`);
  console.log(
    `📍 API endpoints available at http://localhost:${config.port}/api`
  );
  console.log(`❤️  Health check at http://localhost:${config.port}/api/health`);
  console.log(
    `📊 Meeting status endpoint at http://localhost:${config.port}/api/meeting/status\n`
  );
});

export default server;
