// const axios = require("axios");
import axios from "axios";
const ledOuts1 = { r: [1], g: [2], b: [] };
const ledOuts2 = { r: [], g: [], b: [] };
const recordDate = Date.now();
// const { dataset } = require("./dataset");
import { dataset } from "./dataset.js";
let data = (playerId) =>
  JSON.stringify({
    query: `mutation PostControllerInitiative(
  $playerId: UUID!
  # $topic: ControllerInitiativeTopicEnums!
  $payload: String!
) {
  postControllerInitiative(
    controllerInitiativeCommunicationData: {
      playerId: $playerId
      topic: REPORT_STATUS
      payload: $payload
    }
  ) {
    code
    success
    message
  }
}`,
    variables: {
      // playerId: "62386139-6236-6366-3833-626600000000",
      playerId,
      payload: JSON.stringify(dataset(Date.now())),
    },
  });

let config3 = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:2000/services/graphql",
  headers: {
    Authorization: "",
    source: "screenhub-agent",
    "Content-Type": "application/json",
  },
  data: data("62386139-6236-6366-3833-626600000003"),
};

let config5 = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:2000/services/graphql",
  headers: {
    Authorization: "",
    source: "screenhub-agent",
    "Content-Type": "application/json",
  },
  data: data("62386139-6236-6366-3833-626600000005"),
};

axios
  .request(config3)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

axios
  .request(config5)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
