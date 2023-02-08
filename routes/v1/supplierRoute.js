import express from "express";

const supplierRouter = express.Router();

supplierRouter.route('/').post(createSupplier).get(getSupplier)


export default supplierRouter;