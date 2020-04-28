import express from 'express';
import { ENDPOINTS } from './constants/endpoints';

class RestApi {

  app: express.Application;

  bindRootCheck (_app) {
    _app.get("/", (req, res) => {
      res.send({data: "root initted"});
    });
  }

  bindCustomerSegmentation (_app) {
    _app.get(ENDPOINTS.CUSTOMER_SEGMENTS, (req, res)=>{
      res.send({data: ENDPOINTS.CUSTOMER_SEGMENTS});
    })
  }

  bindValueProp (_app) {
    _app.get(ENDPOINTS.VALUE_PROP, (req, res)=>{
      res.send({data: ENDPOINTS.VALUE_PROP});
    })
  }

  bindPromoChannels (_app) {
    _app.get(ENDPOINTS.PROMO_CHANNELS, (req, res)=>{
      res.send({data: ENDPOINTS.PROMO_CHANNELS});
    })
  }

  bindCustomerRelations (_app) {
    _app.get(ENDPOINTS.CUSTOMER_RELATIONS, (req, res)=>{
      res.send({data: ENDPOINTS.CUSTOMER_RELATIONS});
    })
  }

  bindRevenueStreams (_app) {
    _app.get(ENDPOINTS.REVENUE_STREAMS, (req, res)=>{
      res.send({data: ENDPOINTS.REVENUE_STREAMS});
    })
  }

  bindKeyResources (_app) {
    _app.get(ENDPOINTS.KEY_RESOURCES, (req, res)=>{
      res.send({data: ENDPOINTS.KEY_RESOURCES});
    })
  }

  bindKeyActivities (_app) {
    _app.get(ENDPOINTS.KEY_ACTIVITIES, (req, res)=>{
      res.send({data: ENDPOINTS.KEY_ACTIVITIES});
    })
  }

  bindKeyPartnerships (_app) {
    _app.get(ENDPOINTS.KEY_PARTNERSHIPS, (req, res)=>{
      res.send({data: ENDPOINTS.KEY_PARTNERSHIPS});
    })
  }

  bindCostStructure (_app) {
    _app.get(ENDPOINTS.COST_STRUCTURE, (req, res)=>{
      res.send({data: ENDPOINTS.COST_STRUCTURE});
    })
  }

  constructor(_app: express.Application) {
    this.app = _app;
    this.bindRootCheck(this.app);
    this.bindCustomerSegmentation(this.app);
    this.bindValueProp(this.app);
    this.bindPromoChannels(this.app);
    this.bindCustomerRelations(this.app);
    this.bindRevenueStreams(this.app);
    this.bindKeyResources(this.app);
    this.bindKeyActivities(this.app);
    this.bindKeyPartnerships(this.app);
    this.bindCostStructure(this.app);
  }
}

export default RestApi;
