'use strict';

var utils = require('../utils/writer.js');
var ServiceInstances = require('../service/ServiceInstancesService');

module.exports.serviceInstanceDeprovisionUsingDELETE = function serviceInstanceDeprovisionUsingDELETE (req, res, next, xBrokerAPIVersion, instance_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete) {
  ServiceInstances.serviceInstanceDeprovisionUsingDELETE(xBrokerAPIVersion, instance_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceGetUsingGET = function serviceInstanceGetUsingGET (req, res, next, xBrokerAPIVersion, instance_id, xBrokerAPIOriginatingIdentity, service_id, plan_id) {
  ServiceInstances.serviceInstanceGetUsingGET(xBrokerAPIVersion, instance_id, xBrokerAPIOriginatingIdentity, service_id, plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceLastOperationGetUsingGET = function serviceInstanceLastOperationGetUsingGET (req, res, next, xBrokerAPIVersion, instance_id, service_id, plan_id, operation) {
  ServiceInstances.serviceInstanceLastOperationGetUsingGET(xBrokerAPIVersion, instance_id, service_id, plan_id, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceProvisionUsingPUT = function serviceInstanceProvisionUsingPUT (req, res, next, body, accepts_incomplete, instance_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceInstances.serviceInstanceProvisionUsingPUT(body, accepts_incomplete, instance_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceUpdateUsingPATCH = function serviceInstanceUpdateUsingPATCH (req, res, next, body, accepts_incomplete, instance_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceInstances.serviceInstanceUpdateUsingPATCH(body, accepts_incomplete, instance_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
