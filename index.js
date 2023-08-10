const axios = require("axios");
let data = JSON.stringify({
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
    playerId: "62386139-6236-6366-3833-626600000000",
    payload: `{"alss":[{"currentBrightness":100,"currentLUX":10,"firmware":"LIGHT_SENSOR_V1.2.0","id":"0","lastConnected":1688444617000,"luxDuration":5,"luxRangeToBrightnessMapping":[{"brightness":5,"max":50,"min":0},{"brightness":10,"max":100,"min":51},{"brightness":15,"max":500,"min":101},{"brightness":25,"max":1000,"min":501},{"brightness":50,"max":2000,"min":1001},{"brightness":75,"max":3000,"min":2001},{"brightness":90,"max":4000,"min":3001},{"brightness":100,"max":83665,"min":4001}],"macAddress":"E2:FF:0A:01:00:00","portId":"Port A","serialNumber":"-"}],"command":null,"controllerId":"TOT1A-23040010","frameDelayMillionSecond":65,"info":{},"ioBoardFirmwareVersion":"IOB.A.0.0.0-2","nucleusBuildDate":1688399874000,"nucleusVersion":"3.0.0.61+79157946","panels":[{"brightnessBlue":5,"brightnessGreen":5,"brightnessLock":false,"brightnessOverride":false,"brightnessRed":5,"colorCalibrationEnabled":0,"colorTemperature":0,"currentGainBlue":15,"currentGainGreen":15,"currentGainLock":false,"currentGainOverride":false,"currentGainRed":15,"date":${Date.now()},"driverType":"","firmwareVersion":"BL_M_12MM_H750_P102","frameRate":13,"gamma":"2.2","height":0,"id":"0","incompletePacketCount":2,"lastDateSaved":4294967295000,"ledBin":"","ledOut":{"b":[],"g":[],"r":[]},"ledType":"","macAddress":"E2:FF:0A:00:00:00","manufactureDate":0,"manufacturer":"","neighborDown":52428,"neighborRight":52428,"notes":"","offsetX":0,"offsetY":0,"panelErrors":["PANEL_DISCONNECTED"],"panelFeatures":["PANEL_FEATURE"],"panelType":"","portId":"Port A","ratio":"0.240219","response":23745,"temperature":"49.1","totalPackets":5704,"voltage":"4.329","width":24}],"ports":[{"activePower":"1.99997","apparentPower":"0.000275","brightnessBlue":100,"brightnessGreen":100,"brightnessOverride":false,"brightnessRed":100,"burninDate":0,"burninStage":0,"colorTemperature":6500,"currentGainBlue":15,"currentGainGreen":15,"currentGainOverride":false,"currentGainRed":15,"date":1688444656496,"ethernetData":"enp5s0","frequency":"0","gamma":"2.2","height":1,"id":"Port A","isDataToPanelOnline":true,"isPanelDisplayEnable":true,"isPowerToPanelsOn":true,"manufactureInfo":"Cirrus","module":"Blade M 12mm","notes":"","offsetX":0,"offsetY":0,"pitch":12,"portErrors":[],"portFeatures":["PORT_POWER_MONITORING"],"powerFactor":"0.013672","reactivePower":"1.00011","rmsCurrent":"0.095215","rmsVoltage":"113.48","temperature":"41.0212","width":1,"wiringPattern":"BOTTOM_LEFT_UP"},{"activePower":"1.99997","apparentPower":"0.000275","brightnessBlue":100,"brightnessGreen":100,"brightnessOverride":false,"brightnessRed":100,"burninDate":0,"burninStage":0,"colorTemperature":6500,"currentGainBlue":15,"currentGainGreen":15,"currentGainOverride":false,"currentGainRed":15,"date":1688444656497,"ethernetData":"enp4s0","frequency":"0","gamma":"2.2","height":1,"id":"Port B","isDataToPanelOnline":true,"isPanelDisplayEnable":true,"isPowerToPanelsOn":true,"manufactureInfo":"Cirrus","module":"Blade M 12mm","notes":"","offsetX":0,"offsetY":0,"pitch":12,"portErrors":[],"portFeatures":["PORT_POWER_MONITORING"],"powerFactor":"0.060547","reactivePower":"1.00047","rmsCurrent":"0.100708","rmsVoltage":"111.688","temperature":"41.0212","width":1,"wiringPattern":"TOP_LEFT_ACROSS"}],"powerMonitoringIoboardStatus":"CONNECTED","resetTimeoutDurationMinutes":1,"screenTestPattern":"STOP_SHOWING_SCREEN_TEST_PATTERN","spis":[{"activePower":"-9.717","apparentPower":"11.911","firmware":"v1.4.2","frequency":"59","id":"0","lastConnected":1688443061000,"macAddress":"E2:FF:0A:02:00:00","portId":"Port A","powerFactor":"0","powerStatus":"on","reactivePower":"5.843","rmsCurrent":"0.103","rmsVoltage":"113.697","serialNumber":"-","temperature":"26"}],"timestamp":1691674529000,"transmissionMode":"BROADCAST_MODE"}`,
  },
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:2000/services/graphql",
  headers: {
    Authorization: "",
    source: "screenhub-agent",
    "Content-Type": "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });