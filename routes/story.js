import express from 'express';
import validators from 'express-joi-validation'

import {createStory,getStory,getStoryList} from '../controller/story.js'
import {storyPost,storyGet} from '../validator/story.js';
const router = express.Router();
 
const validator=  validators.createValidator({});

/**
* @swagger
*   components:
*    schemas:
*       story:
*         type: object
*         required:
*           - name
*           - genre
*           - image
*           - writer
*           - writerEmail
*           - storySummary
*         properties:
*           id:
*             type: integer
*             description: The auto-generated id of the book.
*           name:
*             type: string
*             description: The name of the story.
*           genre:
*             type: string
*             description: The genre of the story.
*           image:
*             type: string
*             description: The image of the story.
*           writer:
*             type: string
*             description: The name of the writer.
*           writerEmail:
*             type: string
*             description: The email of the writer.
*           storySummary:
*             type: string
*             description: The summary of the story.
*         example:
*            name: Shubh
*            genre: 10
*            writer: 8989898989
*            writerEmail: shubh@saga.com
 */

/**
 * @swagger
 * tags:
 *  name: Story
 *  description: This is for the Story
 * /story:
 *  get:
 *      tags: [Story]
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
router.get('/', getStoryList);

/**
 * @swagger
 * tags:
 *  name: Story
 *  description: This is for the Story
 * /story/one:
 *  get:
 *      tags: [Story]
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
 router.get('/one',validator.query(storyGet), getStory);

/**
 * @swagger
 * tags:
 *  name: Story
 *  description: This is for the Story
 * /story:
 *  post:
 *      tags: [Story]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: The story's name.
 *                  example: shubhshubh
 *                genre:
 *                  type: string
 *                  description: The genre of the story.
 *                  example: 10
 *                image:
 *                  type: string
 *                  description: The image of the story.
 *                  example: def/Loc/ex.png
 *                writer:
 *                  type: string
 *                  description: The name of the writer.
 *                  example: shubh
 *                writerEmail:
 *                  type: string
 *                  description: The email of the writer.
 *                  example: shubh@shubh.com
 *                storySummary:
 *                  type: string
 *                  description: The summary of the story.
 *                  example: DeprecationWarning Listening to events on the Db class has been deprecated and will be removed in the next major version.
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
router.post('/',validator.query(storyPost), createStory);

export default router;