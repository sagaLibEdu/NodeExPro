import express from 'express';
import validators from 'express-joi-validation'

import {createUser,getUser,getUserList, loginUser} from '../controller/user.js'
import {auth} from '../middleware/auth.js';
import { userGet, userPost, userLogin } from '../validator/user.js';
import userSchema from './userSchema.js';
const router = express.Router();

const validator=  validators.createValidator({});


/**
* @swagger
* components:
*    schemas:
*       User:
*         type: object
*         required:
*           - name
*           - age
*           - contact
*           - email
*           - password
*         properties:
*           id:
*             type: integer
*             description: The auto-generated id of the book.
*           name:
*             type: string
*             description: The name of the user.
*           age:
*             type: string
*             description: The age of the user.
*           contact:
*             type: string
*             description: The contact of the user.
*           email:
*             type: string
*             description: The email of the user.
*         example:
*            name: Shubh
*            age: 10
*            contact: 8989898989
*            email: shubh@saga.com
 */


/**
 * @swagger
 * tags:
 *  name: User
 *  description: This is for the main data
 * /users:
 *  get:
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server
 *          400:
 *              description: Validation Error
 *          401:
 *              description: Unauthorized
 */
router.get('/',auth, getUserList);

/**
 * @swagger
 * tags:
 *  name: User
 *  description: This is for the main data
 * /users/user:
 *  get:
 *      tags: [User]
 *      security:
 *          - bearerAuth: []
 *      parameters:
 *          - name: name
 *            default: shubh
 *            in: query
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server
 *          400:
 *              description: Validation Error
 *          401:
 *              description: Unauthorized
 */
 router.get('/user',validator.query(userGet),auth, getUser);

/**
 * @swagger
 * tags:
 *  name: User
 *  description: This is for the main data
 * /users/signup:
 *  post:
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The user's name.
 *                  example: shubhshubh
 *                age:
 *                  type: string
 *                  description: The age of the user.
 *                  example: 10
 *                contact:
 *                  type: string
 *                  description: The contact of the user.
 *                  example: 999999999
 *                email:
 *                  type: string
 *                  description: The email of the user.
 *                  example: shubh@shubh.com
 *                password:
 *                  type: string
 *                  description: The password of the user.
 *                  example: shubhshubh
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server
 *          400:
 *              description: Validation Error
 *          401:
 *              description: Unauthorized
 */
router.post('/signup',validator.body(userPost), createUser);



/**
 * @swagger
 * tags:
 *  name: User
 *  description: This is for login of user
 * /users/login:
 *  post:
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: The user's email.
 *                  example: shubh@shubh.com
 *                password:
 *                  type: string
 *                  description: The password of the user.
 *                  example: shubhshubh
 *      responses:
 *          200:
 *              description: Success
 *          500:
 *              description: Internal Server
 *          400:
 *              description: Validation Error
 *          401:
 *              description: Unauthorized
 */
 router.post('/login',validator.body(userLogin),loginUser);
//  router.post('/login',validator.query(userLogin), loginUser);

export default router;



// router.get('/',auth, getUserList);

// router.get('/user',validator.query(userGet),auth, getUser);

// router.post('/signup',validator.query(userPost), createUser);

// router.post('/login',validator.query(userLogin), loginUser);
// *      consumes:
//  *          - application/json
//  *      parameters:
//  *          - in: body
//  *            name: user
//  *            description: The user to create.
//  *            schema: 
//  *              $ref: '#/components/User'



// /**
//  * @swagger
//  * tags:
//  *  name: User
//  *  description: This is for login of user
//  * /users/login:
//  *  post:
//  *      tags: [User]
//  *      parameters:
//  *          - name: email
//  *            default: shubh@shubh.com
//  *            in: query
//  *            required: true
//  *            schema:
//  *              type: string
//  *          - name: password
//  *            default: shubhshubh
//  *            in: query
//  *            required: true
//  *            schema:
//  *              type: string
//  *      responses:
//  *          200:
//  *              description: this is succeess
//  *          500:
//  *              desccription: eroor 5005
//  */
//  router.post('/login',validator.query(userLogin), loginUser);
