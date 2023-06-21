"use strict";

var utils = require("../utils/writer.js");
var ServiceInstances = require("../service/ServiceInstancesService");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.serviceInstanceDeprovisionUsingDELETE =
  function serviceInstanceDeprovisionUsingDELETE(
    req,
    res,
    next,
    service_id,
    plan_id,
    xBrokerAPIVersion,
    instance_id,
    xBrokerAPIOriginatingIdentity,
    accepts_incomplete
  ) {
    ServiceInstances.serviceInstanceDeprovisionUsingDELETE(
      service_id,
      plan_id,
      xBrokerAPIVersion,
      instance_id,
      xBrokerAPIOriginatingIdentity,
      accepts_incomplete
    )
      .then(async (response) => {
        console.log(
          xBrokerAPIVersion,
          instance_id,
          service_id,
          plan_id,
          xBrokerAPIOriginatingIdentity,
          accepts_incomplete
        );
        const msg = {
          to: "mukesh.dhamat@ibm.com",
          from: "zeel.patel2@ibm.com",
          subject: "Deprovision Request",
          html: `<b>Plan ID :</b> ${plan_id}<br><b>Service ID :</b> ${service_id}<br><b>Instance ID :</b> ${instance_id}`,
        };
        await sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error);
          });
        return res.status(200).json({});
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceGetUsingGET = function serviceInstanceGetUsingGET(
  req,
  res,
  next,
  xBrokerAPIVersion,
  instance_id,
  xBrokerAPIOriginatingIdentity,
  service_id,
  plan_id
) {
  ServiceInstances.serviceInstanceGetUsingGET(
    xBrokerAPIVersion,
    instance_id,
    xBrokerAPIOriginatingIdentity,
    service_id,
    plan_id
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceInstanceLastOperationGetUsingGET =
  function serviceInstanceLastOperationGetUsingGET(
    req,
    res,
    next,
    xBrokerAPIVersion,
    instance_id,
    service_id,
    plan_id,
    operation
  ) {
    ServiceInstances.serviceInstanceLastOperationGetUsingGET(
      xBrokerAPIVersion,
      instance_id,
      service_id,
      plan_id,
      operation
    )
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceProvisionUsingPUT =
  function serviceInstanceProvisionUsingPUT(
    req,
    res,
    next,
    body,
    accepts_incomplete,
    instance_id,
    xBrokerAPIVersion,
    xBrokerAPIOriginatingIdentity
  ) {
    ServiceInstances.serviceInstanceProvisionUsingPUT(
      body,
      accepts_incomplete,
      instance_id,
      xBrokerAPIVersion,
      xBrokerAPIOriginatingIdentity
    )
      .then(async (response) => {
        const msg = {
          to: "mukesh.dhamat@ibm.com",
          from: "zeel.patel2@ibm.com",
          subject: "Provision Request",
          html: `<b>Plan ID :</b> ${body.plan_id}<br><b>Service ID :</b> ${body.service_id}<br><b>Instance ID :</b> ${instance_id}<br>
                  <b>Account ID :</b> ${body.context.account_id}<br><b>CRN :</b> ${body.context.crn}<br><b>Instance Name :</b> ${body.context.name}<br>
                  <b>Resource Group CRN :</b> ${body.context.resource_group_crn}<br><b>Target CRN :</b> ${body.context.target_crn}<br>
                  <h2><b>Extra Parameters</b><br>
                  <b>Capacity :</b> ${body.parameters.Capacity}<br>
                  <b>Company :</b> ${body.parameters.Company}<br>`,
        };
        await sgMail
          .send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error);
          });
        return res.status(201).json({
          dashboard_url:
            "https://qradar-bnpp-dashboard-bckt.s3-web.us-south.cloud-object-storage.appdomain.cloud",
        });
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };

module.exports.serviceInstanceUpdateUsingPATCH =
  function serviceInstanceUpdateUsingPATCH(
    req,
    res,
    next,
    body,
    accepts_incomplete,
    instance_id,
    xBrokerAPIVersion,
    xBrokerAPIOriginatingIdentity
  ) {
    ServiceInstances.serviceInstanceUpdateUsingPATCH(
      body,
      accepts_incomplete,
      instance_id,
      xBrokerAPIVersion,
      xBrokerAPIOriginatingIdentity
    )
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
