const NODE_ENV = process.env.NODE_ENV

export default function getConfig() {
  const config = {
    baseUrl: "http://localhost:3001"
  };

  if(NODE_ENV === "production") {
    // add production baseUrl
  }

  return config;
}