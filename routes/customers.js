var express = require('express');
var router = express.Router();
var routes = require('../util/routes');

/* MAIN ROUTES */

/* GET customers page. */
router.get(routes.CUSTOMERS, function (req, res, next) {
  res.redirect('customers/login');
});

/* GET login page. */
router.get(routes.CUSTOMERS_LOGIN, function (req, res, next) {
  res.render('customers/login');
});

/* GET portal page. */
router.get(routes.CUSTOMERS_PORTAL, function (req, res, next) {
  res.render('customers/portal', { title: 'Saxons | Portal' });
});

/* POST portal page. */
router.post(routes.CUSTOMERS_PORTAL, function (req, res, next) {
  res.render('customers/portal', { title: 'Saxons | Portal' });
});

/* ======================================== */

/* SETTINGS ROUTES */

/* GET portal's general settings page. */
router.get(routes.CUSTOMERS_PORTAL_GENERAL_SETTINGS, function (req, res, next) {
  res.render('customers/portal/general-settings', { title: 'Saxons | General Settings' });
});

/* GET portal's company settings page. */
router.get(routes.CUSTOMERS_PORTAL_COMPANY_SETTINGS, function (req, res, next) {
  res.render('customers/portal/company-settings', { title: 'Saxons | Company Settings' });
});

/* GET portal's communication settings page. */
router.get(routes.CUSTOMERS_PORTAL_COMMUNICATION_SETTINGS, function (req, res, next) {
  res.render('customers/portal/communication-settings', { title: 'Saxons | Communication Settings' });
});

/* ======================================== */

/* VEHICLES OWNER ROUTES */

/* GET portal's create vehicle owner page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_VEHICLE_OWNER, function (req, res, next) {
  res.render('customers/portal/create-vehicle-owner', { title: 'Saxons | Create Vehicle Owner' });
});

/* GET portal's read vehicle owner page. */
router.get(routes.CUSTOMERS_PORTAL_READ_VEHICLE_OWNER, function (req, res, next) {
  res.render('customers/portal/read-vehicle-owner', { title: 'Saxons | Read Vehicle Owner' });
});

/* ======================================== */

/* VEHICLES TYPE ROUTES */

/* GET portal's create vehicle type page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_VEHICLE_TYPE, function (req, res, next) {
  res.render('customers/portal/create-vehicle-type', { title: 'Saxons | Create Vehicle Type' });
});

/* GET portal's read vehicle type page. */
router.get(routes.CUSTOMERS_PORTAL_READ_VEHICLE_TYPE, function (req, res, next) {
  res.render('customers/portal/read-vehicle-type', { title: 'Saxons | Read Vehicle Type' });
});

/* ======================================== */

/* VEHICLES VEHICLE ROUTES */

/* GET portal's create vehicles vehicle page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_VEHICLES_VEHICLE, function (req, res, next) {
  res.render('customers/portal/create-vehicle-type', { title: 'Saxons | Create Vehicle Vehicle' });
});

/* GET portal's read vehicles vehicle page. */
router.get(routes.CUSTOMERS_PORTAL_READ_VEHICLES_VEHICLE, function (req, res, next) {
  res.render('customers/portal/read-vehicle-type', { title: 'Saxons | Read Vehicle Vehicle' });
});

/* ======================================== */

/* DRIVERS DRIVER ROUTES */

/* GET portal's create drivers driver page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_DRIVERS_DRIVER, function (req, res, next) {
  res.render('customers/portal/create-driver-driver', { title: 'Saxons | Create Driver Driver' });
});

/* GET portal's read drivers driver page. */
router.get(routes.CUSTOMERS_PORTAL_READ_DRIVERS_DRIVER, function (req, res, next) {
  res.render('customers/portal/read-driver-driver', { title: 'Saxons | Read Driver Driver' });
});

/* ======================================== */

/* EMPLOYEES SHIFT ROUTES */

/* GET portal's create employee shift page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_EMPLOYEE_SHIFT, function (req, res, next) {
  res.render('customers/portal/create-employee-shift', { title: 'Saxons | Create Employee Shift' });
});

/* GET portal's read employee shift page. */
router.get(routes.CUSTOMERS_PORTAL_READ_EMPLOYEE_SHIFT, function (req, res, next) {
  res.render('customers/portal/read-employee-shift', { title: 'Saxons | Read Employee Shift' });
});

/* ======================================== */

/* CUSTOMERS CUSTOMER ROUTES */

/* GET portal's create customers customer page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_CUSTOMERS_CUSTOMER, function (req, res, next) {
  res.render('customers/portal/create-customer-customer', { title: 'Saxons | Create Customer Customer' });
});

/* GET portal's read customers customer page. */
router.get(routes.CUSTOMERS_PORTAL_READ_CUSTOMERS_CUSTOMER, function (req, res, next) {
  res.render('customers/portal/read-customer-customer', { title: 'Saxons | Read Customer Customer' });
});

/* ======================================== */

/* ADDRESSES POSTAL CODE ROUTES */

/* GET portal's create addresses postal code page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_ADDRESSES_POSTAL_CODE, function (req, res, next) {
  res.render('customers/portal/create-addresses-postal-code', { title: 'Saxons | Create Addresses Postal Code' });
});

/* GET portal's read addresses postal code page. */
router.get(routes.CUSTOMERS_PORTAL_READ_ADDRESSES_POSTAL_CODE, function (req, res, next) {
  res.render('customers/portal/read-addresses-postal-code', { title: 'Saxons | Read Addresses Postal Code' });
});

/* ======================================== */

/* ADDRESSES ADDRESS ROUTES */

/* GET portal's create addresses address page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_ADDRESSES_ADDRESS, function (req, res, next) {
  res.render('customers/portal/create-addresses-address', { title: 'Saxons | Create Addresses Address' });
});

/* GET portal's read addresses address page. */
router.get(routes.CUSTOMERS_PORTAL_READ_ADDRESSES_ADDRESS, function (req, res, next) {
  res.render('customers/portal/read-addresses-address', { title: 'Saxons | Read Addresses Address' });
});

/* ======================================== */

/* ADDRESSES AREA ROUTES */

/* GET portal's create addresses area page. */
router.get(routes.CUSTOMERS_PORTAL_CREATE_ADDRESSES_AREA, function (req, res, next) {
  res.render('customers/portal/create-addresses-area', { title: 'Saxons | Create Addresses Area' });
});

/* GET portal's read addresses area page. */
router.get(routes.CUSTOMERS_PORTAL_READ_ADDRESSES_AREA, function (req, res, next) {
  res.render('customers/portal/read-addresses-area', { title: 'Saxons | Read Addresses Area' });
});

/* ======================================== */

module.exports = router;
